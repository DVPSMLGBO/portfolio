// Initialisation Lenis (scroll fluide)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP : animation des sections projets
gsap.registerPlugin(ScrollTrigger);

const projets = document.querySelectorAll(".projet");

projets.forEach((projet, i,link) => {
  const img = projet.querySelector("img");
  const text = projet.querySelector(".projet__info");
  const color = projet.dataset.color;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projet,
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
    },
  });

  tl.to("body", { backgroundColor: color, duration: 1.5, ease: "power2.inOut" })
    .fromTo(
      img,
      { clipPath: "inset(0 0 100% 0)", opacity: 0.6 },
      { clipPath: "inset(0)", opacity: 1, duration: 1.5, ease: "power1.out" },
      0
    )
    .fromTo(
      text,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      0.2
    );
});