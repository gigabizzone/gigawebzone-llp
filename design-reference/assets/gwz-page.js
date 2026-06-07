/* =========================================================================
   GigaWebZone — inner-page interactions (shared by all service/content pages)
   Theme persists via the same localStorage keys as the homepage.
   ========================================================================= */
(function () {
  "use strict";
  var root = document.documentElement;
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var store = {
    theme: localStorage.getItem("gwz-theme") || "light",
    accent: localStorage.getItem("gwz-accent") || "#4d52e3",
  };
  var animEnabled = false;
  function animActive() { return animEnabled && !prefersReduced; }
  function syncAnim() { root.classList.toggle("anim", animActive()); }

  function hexToRgb(h) {
    h = h.replace("#", "");
    if (h.length === 3) h = h.split("").map(function (c) { return c + c; }).join("");
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  }
  function darken(hex, a) { return "rgb(" + hexToRgb(hex).map(function (v){return Math.max(0,Math.round(v*(1-a)));}).join(",") + ")"; }
  function lighten(hex, a) { return "rgb(" + hexToRgb(hex).map(function (v){return Math.min(255,Math.round(v+(255-v)*a));}).join(",") + ")"; }

  /* Instant theme/accent commit (transitions disabled during swap so colours
     apply even when the host freezes the transition clock). */
  var _unfreeze;
  function commitInstant() {
    void document.documentElement.offsetWidth;
    clearTimeout(_unfreeze);
    _unfreeze = setTimeout(function () { root.classList.remove("theme-switching"); }, 60);
  }
  function applyTheme(t) {
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", t);
    store.theme = t;
    localStorage.setItem("gwz-theme", t);
    commitInstant();
  }
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
    commitInstant();
  }

  /* Header scrolled state */
  var header = document.getElementById("header");
  function onScrollHeader() { if (header) header.classList.toggle("scrolled", window.scrollY > 12); }

  /* Reveal on scroll */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function checkReveal() {
    for (var i = revealEls.length - 1; i >= 0; i--) {
      var el = revealEls[i];
      if (el.offsetParent === null) continue;
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 60 && r.bottom > 0) { el.classList.add("in"); revealEls.splice(i, 1); }
    }
  }

  /* Counters */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]")).map(function (el) {
    return { el: el, done: false, target: parseFloat(el.getAttribute("data-count")), suf: el.getAttribute("data-suffix") || "" };
  });
  counters.forEach(function (c) { c.el.textContent = c.target + c.suf; });
  function animateCount(c) {
    var dur = 1400, t0 = performance.now();
    function step(now) {
      var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      c.el.textContent = Math.round(c.target * e) + c.suf;
      if (p < 1) requestAnimationFrame(step); else c.el.textContent = c.target + c.suf;
    }
    requestAnimationFrame(step);
  }
  function checkCounters() {
    counters.forEach(function (c) {
      if (c.done || c.el.offsetParent === null) return;
      var r = c.el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) { c.done = true; if (animActive()) animateCount(c); }
    });
  }

  /* Pointer parallax (any [data-parallax]) */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var pointer = { x: 0, y: 0 }, rafPending = false;
  function updateParallax() {
    rafPending = false;
    if (!animActive()) return;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var dx = (pointer.x - cx) / cx, dy = (pointer.y - cy) / cy;
    parallaxEls.forEach(function (el) {
      var f = parseFloat(el.getAttribute("data-parallax")) * 100;
      el.style.transform = "translate3d(" + (dx*f).toFixed(1) + "px," + (dy*f).toFixed(1) + "px,0)";
    });
  }
  function queueParallax() { if (!rafPending) { rafPending = true; requestAnimationFrame(updateParallax); } }
  window.addEventListener("pointermove", function (e) { pointer.x = e.clientX; pointer.y = e.clientY; queueParallax(); }, { passive: true });

  /* Card tilt */
  document.querySelectorAll(".tilt").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", (px*100) + "%");
      card.style.setProperty("--my", (py*100) + "%");
      if (!animActive()) return;
      card.style.transform = "perspective(900px) rotateY(" + ((px-0.5)*6).toFixed(2) + "deg) rotateX(" + ((0.5-py)*6).toFixed(2) + "deg) translateY(-4px)";
    });
    card.addEventListener("pointerleave", function () { card.style.transform = ""; });
  });

  /* FAQ accordion (display toggle — no transition dependency) */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      // optional: close siblings for a clean accordion
      var parent = item.parentElement;
      parent.querySelectorAll(".faq-item.open").forEach(function (o) { if (o !== item) o.classList.remove("open"); });
      item.classList.toggle("open", !isOpen);
      q.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* Theme toggle button */
  var tt = document.getElementById("themeToggle");
  if (tt) tt.addEventListener("click", function () { applyTheme(store.theme === "dark" ? "light" : "dark"); applyAccent(store.accent); });

  /* Combined scroll */
  function onScroll() { onScrollHeader(); checkReveal(); checkCounters(); queueParallax(); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { checkReveal(); queueParallax(); }, { passive: true });

  /* Init */
  applyTheme(store.theme);
  applyAccent(store.accent);
  onScrollHeader();
  checkReveal();
  checkCounters();

  /* Capability detect — turn motion on only if CSS transitions actually
     advance here. Some hosts run rAF but freeze the transition/animation
     clock; in that case we must stay in the visible base state. */
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
    counters.forEach(function (c) { if (c.el.offsetParent && c.el.getBoundingClientRect().top < window.innerHeight - 40) { c.done = false; } });
    checkCounters();
    queueParallax();
  });
})();
