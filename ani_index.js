document.addEventListener('DOMContentLoaded', () => {


  // Animation des boxes
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateX(' + (index % 2 === 0 ? -30 : 30) + 'px)';
    
    setTimeout(() => {
      box.style.transition = 'all 0.6s ease-out';
      box.style.opacity = '1';
      box.style.transform = 'translateX(0)';
    }, 700 + index * 120);
  });

  // Parallax effect au scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    const intro = document.querySelector('.intro');
    if (intro) {
      intro.style.transform = `translateY(${scrollPos * 0.3}px)`;
      intro.style.opacity = Math.max(0.3, 1 - scrollPos / 800);
    }

    // Parallax sur les cartes
    cards.forEach((card, index) => {
      const offset = scrollPos * (0.2 + index * 0.05);
      card.style.transform = `translateY(${offset}px) scale(1) rotateY(0)`;
    });
  });

  // Effet de glow au hover sur les cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))';
    });

    card.addEventListener('mouseleave', function() {
      this.style.filter = 'brightness(1)';
    });
  });
});