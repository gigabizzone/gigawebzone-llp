/* =========================================================================
   GigaWebZone — interactions
   ========================================================================= */
(function () {
  "use strict";
  var root = document.documentElement;
  var body = document.body;
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- State (persisted) -------------------------------------------- */
  var store = {
    theme: localStorage.getItem("gwz-theme") || "light",
    hero: localStorage.getItem("gwz-hero") || "b",
    accent: localStorage.getItem("gwz-accent") || "#4d52e3",
    motion: localStorage.getItem("gwz-motion"),
  };
  if (store.motion === null) store.motion = "on";
  var motionOn = store.motion === "on";   // user preference
  var animEnabled = false;                  // host actually runs animation (rAF ticks)
  function animActive() { return animEnabled && motionOn && !prefersReduced; }
  function syncAnim() {
    root.classList.toggle("anim", animActive());
    if (!animActive()) resetParallax();
  }

  /* ---- Helpers ------------------------------------------------------- */
  function hexToRgb(h) {
    h = h.replace("#", "");
    if (h.length === 3) h = h.split("").map(function (c) { return c + c; }).join("");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function darken(hex, amt) {
    var c = hexToRgb(hex).map(function (v) { return Math.max(0, Math.round(v * (1 - amt))); });
    return "rgb(" + c.join(",") + ")";
  }
  function lighten(hex, amt) {
    var c = hexToRgb(hex).map(function (v) { return Math.min(255, Math.round(v + (255 - v) * amt)); });
    return "rgb(" + c.join(",") + ")";
  }


  /* ---- Instant theme/accent commit ----------------------------------
     Color-token swaps must NOT ride a CSS transition: some hosts advance
     rAF (so html.anim is added) yet freeze the transition clock, which would
     leave background/color stuck mid-transition. We disable transitions,
     flip the values, force a reflow to apply them, then restore. */
  var _unfreezeT;
  function commitInstant() {
    void document.documentElement.offsetWidth; // apply new colours under no-transition
    clearTimeout(_unfreezeT);
    _unfreezeT = setTimeout(function () { root.classList.remove("theme-switching"); }, 60);
  }

  /* ---- Theme --------------------------------------------------------- */
  function applyTheme(t) {
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", t);
    store.theme = t;
    localStorage.setItem("gwz-theme", t);
    if (twkDark) twkDark.classList.toggle("on", t === "dark");
    commitInstant();
  }

  /* ---- Accent -------------------------------------------------------- */
  function applyAccent(hex) {
    root.classList.add("theme-switching");
    store.accent = hex;
    localStorage.setItem("gwz-accent", hex);
    var rgb = hexToRgb(hex).join(",");
    root.style.setProperty("--accent", hex);
    root.style.setProperty("--accent-600", darken(hex, 0.1));
    root.style.setProperty("--accent-700", darken(hex, 0.22));
    root.style.setProperty("--accent-link", root.getAttribute("data-theme") === "dark" ? lighten(hex, 0.45) : darken(hex, 0.05));
    root.style.setProperty("--accent-tint", "rgba(" + rgb + ",0.12)");
    document.querySelectorAll("#swAccent .twk-sw").forEach(function (s) {
      s.classList.toggle("on", s.getAttribute("data-a") === hex);
    });
    commitInstant();
  }
  /* ---- Hero variant -------------------------------------------------- */
  function applyHero(v) {
    store.hero = v;
    localStorage.setItem("gwz-hero", v);
    body.setAttribute("data-hero", v);
    document.querySelectorAll("#segHero button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-v") === v);
    });
    // re-mark reveals/counters for the newly shown variant (synchronous —
    // rAF can't be relied on in frozen hosts)
    if (typeof checkReveal === "function") { checkReveal(); checkCounters(); }
  }
  /* ---- Motion -------------------------------------------------------- */
  function applyMotion(on) {
    motionOn = on;
    store.motion = on ? "on" : "off";
    localStorage.setItem("gwz-motion", store.motion);
    if (twkMotion) twkMotion.classList.toggle("on", on);
    syncAnim();
  }

  /* ---- Header scroll state ------------------------------------------ */
  var header = document.getElementById("header");
  function onScrollHeader() {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }

  /* ---- Reveal on scroll --------------------------------------------- */
  var revealEls = [];
  function collectReveal() { revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal:not(.in)")); }
  function isVisible(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight - 60 && r.bottom > 0 && r.width > 0 && r.height >= 0 &&
      el.offsetParent !== null;
  }
  function checkReveal() {
    for (var i = revealEls.length - 1; i >= 0; i--) {
      var el = revealEls[i];
      if (el.offsetParent === null) continue; // hidden hero variant
      if (isVisible(el)) { el.classList.add("in"); revealEls.splice(i, 1); }
    }
  }

  /* ---- Animated counters -------------------------------------------- */
  var counters = [];
  function collectCounters() {
    counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]")).map(function (el) {
      return { el: el, done: false, target: parseFloat(el.getAttribute("data-count")), suf: el.getAttribute("data-suffix") || "" };
    });
  }
  function animateCount(c) {
    var dur = 1400, t0 = performance.now();
    function step(now) {
      var p = Math.min(1, (now - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      var val = Math.round(c.target * e);
      c.el.textContent = val + c.suf;
      if (p < 1) requestAnimationFrame(step);
      else c.el.textContent = c.target + c.suf;
    }
    requestAnimationFrame(step);
  }
  function checkCounters() {
    counters.forEach(function (c) {
      if (c.done) return;
      if (c.el.offsetParent === null) return;
      var r = c.el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) {
        c.done = true;
        if (animActive()) animateCount(c); else c.el.textContent = c.target + c.suf;
      }
    });
  }

  /* ---- Pointer + scroll parallax ------------------------------------ */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var scrollEls = Array.prototype.slice.call(document.querySelectorAll("[data-scroll]"));
  var pointer = { x: 0, y: 0 };
  function resetParallax() {
    parallaxEls.concat(scrollEls).forEach(function (el) { el.style.transform = ""; });
    var inner = document.getElementById("stage3dInner");
    if (inner) inner.style.transform = "";
    document.querySelectorAll("[data-depth]").forEach(function (el) { el.style.transform = ""; });
  }
  var rafPending = false;
  function updateParallax() {
    rafPending = false;
    if (!animActive()) return;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var dx = (pointer.x - cx) / cx, dy = (pointer.y - cy) / cy;
    var sy = window.scrollY;
    parallaxEls.forEach(function (el) {
      var f = parseFloat(el.getAttribute("data-parallax")) * 100;
      var sf = parseFloat(el.getAttribute("data-scroll") || 0);
      el.style.transform = "translate3d(" + (dx * f).toFixed(1) + "px," + (dy * f - sy * sf).toFixed(1) + "px,0)";
    });
    scrollEls.forEach(function (el) {
      if (parallaxEls.indexOf(el) !== -1) return;
      var sf = parseFloat(el.getAttribute("data-scroll"));
      el.style.transform = "translate3d(0," + (-sy * sf).toFixed(1) + "px,0)";
    });
    // 3D stage tilt
    var inner = document.getElementById("stage3dInner");
    if (inner && inner.offsetParent !== null) {
      inner.style.transform = "rotateY(" + (dx * 7).toFixed(2) + "deg) rotateX(" + (-dy * 6).toFixed(2) + "deg)";
      inner.querySelectorAll("[data-depth]").forEach(function (el) {
        var d = parseFloat(el.getAttribute("data-depth"));
        el.style.transform = "translateZ(" + d + "px) translate3d(" + (dx * d * 0.25).toFixed(1) + "px," + (dy * d * 0.25).toFixed(1) + "px,0)";
      });
    }
  }
  function queueParallax() { if (!rafPending) { rafPending = true; requestAnimationFrame(updateParallax); } }

  window.addEventListener("pointermove", function (e) { pointer.x = e.clientX; pointer.y = e.clientY; queueParallax(); }, { passive: true });

  /* ---- Card tilt (pillars / portfolio) ------------------------------ */
  document.querySelectorAll(".tilt").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", (px * 100) + "%");
      card.style.setProperty("--my", (py * 100) + "%");
      if (!animActive()) return;
      card.style.transform = "perspective(900px) rotateY(" + ((px - 0.5) * 6).toFixed(2) + "deg) rotateX(" + ((0.5 - py) * 6).toFixed(2) + "deg) translateY(-4px)";
    });
    card.addEventListener("pointerleave", function () { card.style.transform = ""; });
  });

  /* ---- Combined scroll handler -------------------------------------- */
  function onScroll() { onScrollHeader(); checkReveal(); checkCounters(); queueParallax(); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { checkReveal(); queueParallax(); }, { passive: true });

  /* ===================== TWEAKS PANEL ============================== */
  var twk = document.getElementById("twk");
  var twkHd = document.getElementById("twkHd");
  var twkX = document.getElementById("twkX");
  var twkDark = document.getElementById("twkDark");
  var twkMotion = document.getElementById("twkMotion");

  // host protocol
  window.addEventListener("message", function (e) {
    var t = e && e.data && e.data.type;
    if (t === "__activate_edit_mode") twk.classList.add("open");
    else if (t === "__deactivate_edit_mode") twk.classList.remove("open");
  });
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (err) {}
  function pushKeys() {
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { hero: store.hero, accent: store.accent, dark: store.theme === "dark", motion: store.motion === "on" } }, "*"); } catch (err) {}
  }
  twkX.addEventListener("click", function () {
    twk.classList.remove("open");
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (err) {}
  });

  // controls
  document.getElementById("segHero").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    applyHero(b.getAttribute("data-v")); pushKeys();
  });
  document.getElementById("swAccent").addEventListener("click", function (e) {
    var s = e.target.closest(".twk-sw"); if (!s) return;
    applyAccent(s.getAttribute("data-a")); pushKeys();
  });
  twkDark.addEventListener("click", function () { applyTheme(store.theme === "dark" ? "light" : "dark"); applyAccent(store.accent); pushKeys(); });
  twkDark.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); twkDark.click(); } });
  twkMotion.addEventListener("click", function () { applyMotion(!(store.motion === "on")); pushKeys(); });
  twkMotion.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); twkMotion.click(); } });

  // drag panel
  (function () {
    var dragging = false, ox = 0, oy = 0;
    twkHd.addEventListener("pointerdown", function (e) {
      if (e.target === twkX) return;
      dragging = true; var r = twk.getBoundingClientRect();
      ox = e.clientX - r.left; oy = e.clientY - r.top;
      twk.style.right = "auto"; twk.style.bottom = "auto"; twk.style.left = r.left + "px"; twk.style.top = r.top + "px";
      twkHd.setPointerCapture(e.pointerId);
    });
    twkHd.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      twk.style.left = Math.max(6, Math.min(window.innerWidth - twk.offsetWidth - 6, e.clientX - ox)) + "px";
      twk.style.top = Math.max(6, Math.min(window.innerHeight - 60, e.clientY - oy)) + "px";
    });
    twkHd.addEventListener("pointerup", function () { dragging = false; });
  })();

  /* ---- Header theme toggle ------------------------------------------ */
  document.getElementById("themeToggle").addEventListener("click", function () {
    applyTheme(store.theme === "dark" ? "light" : "dark"); applyAccent(store.accent); pushKeys();
  });

  /* ---- Mobile menu (simple reveal of nav) --------------------------- */
  var menuBtn = document.getElementById("menuBtn");
  if (menuBtn) menuBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView ? null : null;
    window.location.hash = "#services";
  });

  /* ---- Init ---------------------------------------------------------- */
  applyTheme(store.theme);
  applyAccent(store.accent);
  applyMotion(store.motion === "on");  // sets pref + syncAnim (anim stays off until detected)
  collectReveal();
  collectCounters();
  // Static-safe: show final counter values immediately (works even if the
  // host never advances animation frames).
  counters.forEach(function (c) { c.el.textContent = c.target + c.suf; c.done = true; });
  applyHero(store.hero);
  onScrollHeader();
  checkReveal();

  // Capability detect — turn motion on only if CSS transitions actually
  // advance (some hosts run rAF but freeze the transition/animation clock).
  function detectAnim(cb) {
    if (prefersReduced) { cb(false); return; }
    var probe = document.createElement("div");
    probe.style.cssText = "position:fixed;left:-9999px;top:0;width:8px;height:8px;opacity:0;transition:opacity .2s linear;pointer-events:none;";
    document.body.appendChild(probe);
    void probe.offsetWidth;
    probe.style.opacity = "1";
    var start = performance.now();
    (function check() {
      var op = parseFloat(getComputedStyle(probe).opacity);
      if (op > 0.02) { probe.remove(); cb(true); return; }
      if (performance.now() - start > 450) { probe.remove(); cb(false); return; }
      requestAnimationFrame(check);
    })();
  }
  detectAnim(function (ok) {
    if (!ok) return;
    animEnabled = true;
    syncAnim();
    checkReveal();
    counters.forEach(function (c) {
      if (c.el.offsetParent && c.el.getBoundingClientRect().top < window.innerHeight - 40) c.done = false;
    });
    checkCounters();
    queueParallax();
  });
})();
