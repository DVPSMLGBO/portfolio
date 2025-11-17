
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  gestureDirection: "vertical",
  smoothTouch: true,
  touchMultiplier: 2
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Récupérer toutes les images des projets
const imgs = gsap.utils.toArray(".projet__img img");

// Couleurs de fond pour chaque projet (basées sur data-color)
const projets = document.querySelectorAll('.projet');
const bgColors = Array.from(projets).map(projet => {
  return projet.getAttribute('data-color') || '#ffffff';
});

// GSAP Animation avec Media Query
ScrollTrigger.matchMedia({
  // Animation pour Desktop
  "(min-width: 769px)": function () {
    imgs.forEach((img, index) => {
      const projet = img.closest('.projet');
      
      // Animation au scroll pour chaque projet
      gsap.timeline({
        scrollTrigger: {
          trigger: projet,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnter: () => {
            gsap.to("body", {
              backgroundColor: bgColors[index],
              duration: 0.8,
              ease: "power2.inOut"
            });
          },
          onEnterBack: () => {
            gsap.to("body", {
              backgroundColor: bgColors[index],
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        }
      })
      .from(img, {
        scale: 1.2,
        duration: 1,
        ease: "power2.out"
      })
      .to(img, {
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, 0);

      // Animation de l'info du projet
      gsap.from(projet.querySelector('.projet__info'), {
        scrollTrigger: {
          trigger: projet,
          start: "top 80%",
          end: "top 20%",
          scrub: 1
        },
        x: -100,
        opacity: 0,
        duration: 1
      });

      // Animation de l'image du projet
      gsap.from(projet.querySelector('.projet__img'), {
        scrollTrigger: {
          trigger: projet,
          start: "top 80%",
          end: "top 20%",
          scrub: 1
        },
        x: 100,
        opacity: 0,
        duration: 1
      });
    });
  },

  // Animation pour Mobile
  "(max-width: 768px)": function () {
    imgs.forEach((img, index) => {
      const projet = img.closest('.projet');
      
      // Animation simple pour mobile
      gsap.timeline({
        scrollTrigger: {
          trigger: projet,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to("body", {
              backgroundColor: bgColors[index],
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        }
      });

      // Animation fade-in pour mobile
      gsap.from(projet.querySelector('.projet__info'), {
        scrollTrigger: {
          trigger: projet,
          start: "top 90%",
          end: "top 60%",
          scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1
      });

      gsap.from(projet.querySelector('.projet__img'), {
        scrollTrigger: {
          trigger: projet,
          start: "top 90%",
          end: "top 60%",
          scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1
      });
    });
  }
});

// Animation hover sur les liens
const links = document.querySelectorAll('a.link');
links.forEach(link => {
  link.addEventListener('mouseenter', function() {
    gsap.to(this, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener('mouseleave', function() {
    gsap.to(this, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});