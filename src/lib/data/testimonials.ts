/**
 * Real client testimonials (names/titles per PRD Appendix B), with profile
 * photos migrated from the live site into /public/assets/testimonials/.
 * The first 6 are shown on the home page; all are available for reuse.
 */

export type Testimonial = {
  name: string;
  title: string;
  initials: string;
  quote: string;
  /** Path under /public, or undefined to fall back to the initials avatar. */
  image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Santosh Madrewar",
    title: "CEO, Borneo Hospitals",
    initials: "SM",
    image: "/assets/testimonials/madrewar.webp",
    quote:
      "The booking portal they built cut our front-desk calls in half. They understood the clinic workflow better than vendors twice their size.",
  },
  {
    name: "Anuja Brahma",
    title: "Principal, Seth Hirachand Mutha College",
    initials: "AB",
    image: "/assets/testimonials/brahma.webp",
    quote:
      "Our admissions portal handles 6,000 students without a hiccup. Documented, maintainable, and delivered on the date they promised.",
  },
  {
    name: "Rahul Ambegaokar",
    title: "Founder & CEO, GroundZero LLP",
    initials: "RA",
    image: "/assets/testimonials/ambegaokar.webp",
    quote:
      "We came for a WordPress refresh and left with a proper commerce platform. Checkout conversion is up 42% — the numbers speak.",
  },
  {
    name: "Dr Mohan Venkatesh Pulle",
    title: "Lung Surgeon",
    initials: "MP",
    image: "/assets/testimonials/pulle.jpg",
    quote:
      "Working with GigaWebZone was a game-changer for my practice. They understood the importance of a professional online presence and delivered a stunning website.",
  },
  {
    name: "Gauranga Das",
    title: "Director, Govardhan Ecovillage",
    initials: "GD",
    image: "/assets/testimonials/das.webp",
    quote:
      "I needed my site to reflect clarity, simplicity and purpose — and GigaWebZone brought that vision to life beautifully. Thoughtful, responsive and genuinely dedicated.",
  },
  {
    name: "Suneelkumar Singh",
    title: "Owner, MyLoanMantra",
    initials: "SS",
    image: "/assets/testimonials/singh.webp",
    quote:
      "We needed to simplify the complex journey to homeownership. GigaWebZone delivered a fantastic, user-friendly platform — a seamless experience and a professional image.",
  },
  {
    name: "Nagesh Jadhav",
    title: "Founder & CEO, Namita Education Foundation",
    initials: "NJ",
    image: "/assets/testimonials/jadhav.webp",
    quote:
      "They designed a clean, informative website that perfectly showcases our college's values. The online-learning features keep students engaged, and their SEO reached a wider audience.",
  },
  {
    name: "Mukesh Shah",
    title: "Energy Expert",
    initials: "MS",
    image: "/assets/testimonials/shah.webp",
    quote:
      "What stood out was their responsiveness and attention to detail — minor tweaks or major updates, handled with speed and professionalism. Gladly recommended.",
  },
];
