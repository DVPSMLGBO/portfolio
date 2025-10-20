const images = [
    './image/krokmou.jpg',
    './image/naiif.jpg',
    './image/creatif.jpg',
    './image/emerveille.jpg',
    './image/castle.jpg',
    './image/castle2.jpg',
];
const tailles =[
    { w: 150, h: 200, rotate: -8 },
    { w: 240, h: 180, rotate: 5 },
    { w: 200, h: 280, rotate: -12 },
    { w: 220, h: 140, rotate: 8 },
    { w: 210, h: 260, rotate: -5 },
    { w: 240, h: 160, rotate: 10 },
    { w: 190, h: 250, rotate: -10 },
    { w: 200, h: 140, rotate: 6 },
    { w: 170, h: 300, rotate: -7 }
];
const galerie = document.getElementById('galerie');
        const galerieWidth = galerie.offsetWidth;
        const galerieHeight = galerie.offsetHeight;

        images.forEach((src, index) => {
            const dessin = document.createElement('div');
            dessin.className = 'dessin';

            // Choisir une taille
            const taille = tailles[index % tailles.length];
            dessin.style.width = taille.w + 'px';
            dessin.style.height = taille.h + 'px';

            // Position aléatoire avec chevauchement
            const x = Math.random() * (galerieWidth - taille.w * 0.5) - taille.w * 0.25;
            const y = Math.random() * (galerieHeight - taille.h * 0.5) - taille.h * 0.25;
            
            dessin.style.left = x + 'px';
            dessin.style.top = y + 'px';

            // Rotation
            dessin.style.transform = `rotate(${taille.rotate}deg)`;

            // Z-index aléatoire pour l'ordre de superposition
            dessin.style.zIndex = Math.floor(Math.random() * 100);

            // Ajouter l'image
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Dessin créatif';
            
            dessin.appendChild(img);
            galerie.appendChild(dessin);
        });