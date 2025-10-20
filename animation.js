// Animation des inputs au focus
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    // Animation au focus
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 0 0 4px rgba(110, 110, 110, 0.2)';
        this.style.borderColor = '#929292ff';
    });

    // Animation au blur
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.05)';
        this.style.borderColor = '#ccc';
    });

    // Animation au typing
    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.style.borderColor = '#8d8d8dff';
        } else {
            this.style.borderColor = '#ccc';
        }
    });
});

// Animation du bouton play
const playBtn = document.querySelector('.play-btn');

if (playBtn) {
    playBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 30px rgba(136, 136, 136, 0.4)';
    });

    playBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });

    // Animation de rotation du SVG au survol
    const svg = playBtn.querySelector('svg');
    playBtn.addEventListener('mouseenter', function() {
        svg.style.animation = 'rotateSvg 0.6s ease';
    });
}

// Animation du texte "OU"
const contactText = document.querySelector('.contact-text');

if (contactText) {
    contactText.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    contactText.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Animation du lien email
const emailLink = document.querySelector('.right-section a');

if (emailLink) {
    emailLink.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'all 0.3s ease';
        this.style.textDecoration = 'underline';
    });

    emailLink.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.textDecoration = 'none';
    });
}

// Animation du titre du formulaire
const titre = document.querySelector('.titre_form');

if (titre) {
    titre.style.animation = 'slideInDown 0.8s ease-out';
}

// Animation au chargement de la page
window.addEventListener('load', function() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });

    const rightSection = document.querySelector('.right-section');
    if (rightSection) {
        rightSection.style.animation = 'fadeInRight 0.8s ease-out';
    }
});

// Animation de l'icône de validation lors de la soumission
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        // Vous pouvez ajouter une validation ici
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    input.style.animation = 'none';
                }, 500);
            }
        });
    });
}

// Animation du bouton play au clic
if (playBtn) {
    playBtn.addEventListener('click', function() {
        this.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
            this.style.animation = 'none';
        }, 600);
    });
}

// Animation de la décoration qui suit la souris
const decoration = document.querySelector('.decoration');
let mouseX = 0;
let mouseY = 0;
let decorationX = 0;
let decorationY = 0;

if (decoration) {
    // Mettre à jour la position de la souris
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation fluide continue
    function updateDecorationPosition() {
        // Mouvement doux vers la position de la souris
        decorationX += (mouseX - window.innerWidth / 2 - decorationX) * 0.02;
        decorationY += (mouseY - window.innerHeight / 2 - decorationY) * 0.02;

        decoration.style.transform = `translate(${decorationX * 0.1}px, ${decorationY * 0.1}px)`;
        
        requestAnimationFrame(updateDecorationPosition);
    }

    updateDecorationPosition();
}

// Ajouter les animations CSS dynamiquement
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    @keyframes pulse {
        0% { 
            transform: scale(1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        50% { 
            transform: scale(1.15);
            box-shadow: 0 0 30px rgba(129, 129, 129, 0.6);
        }
        100% { 
            transform: scale(1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
    }

    @keyframes rotateSvg {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);