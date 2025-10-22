 const images = [
            './dessin/hand.jpg',
            './dessin/Wakfu.jpg',
            './dessin/katara.jpg',
            './dessin/numHand.jpg',
            './dessin/krokmou.jpg',
            './dessin/semi-realisme.jpg',
            './dessin/girl.jpg',
            './dessin/girl2.jpg',
            './dessin/girl3.jpg',
            './dessin/girl4.jpg',
            './dessin/hand2.jpg',
            './dessin/hinata.jpg',
            './dessin/eyes.jpg',
            './dessin/jinx.jpg',
            './dessin/jim.jpg',
            './dessin/jim2.jpg',
            './dessin/vaneloppe.jpg',
            './dessin/roxanne.jpg',
            './dessin/kwami.jpg',
            './dessin/raiponce.jpg',
            './dessin/anatomie.jpg',
            './dessin/forshortning.jpg',
            './dessin/gesture.jpg',
        ];

        const tailles = [
            { w: 180, h: 240, rotate: -8 },
            { w: 280, h: 210, rotate: 5 },
            { w: 240, h: 320, rotate: -12 },
            { w: 260, h: 180, rotate: 8 },
            { w: 250, h: 300, rotate: -5 },
            { w: 280, h: 200, rotate: 10 },
            { w: 220, h: 280, rotate: -10 },
            { w: 240, h: 180, rotate: 6 },
            { w: 200, h: 340, rotate: -7 }
        ];

        const galerie = document.getElementById('galerie');
        const galerieWidth = galerie.offsetWidth;
        const galerieHeight = galerie.offsetHeight;

        // Fonction pour vérifier si deux rectangles se chevauchent trop
        function checkOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
            const overlapX = Math.max(0, Math.min(x1 + w1, x2 + w2) - Math.max(x1, x2));
            const overlapY = Math.max(0, Math.min(y1 + h1, y2 + h2) - Math.max(y1, y2));
            const overlapArea = overlapX * overlapY;
            const minArea = Math.min(w1 * h1, w2 * h2);
            return (overlapArea / minArea) > 0.3;
        }

        const positions = [];

        images.forEach((src, index) => {
            setTimeout(() => {
                const dessin = document.createElement('div');
                dessin.className = 'dessin';
                
                const taille = tailles[index % tailles.length];
                dessin.style.width = taille.w + 'px';
                dessin.style.height = taille.h + 'px';
                
                let x, y, attempts = 0;
                let validPosition = false;
                
                while (!validPosition && attempts < 50) {
                    x = Math.random() * (galerieWidth - taille.w);
                    y = Math.random() * (galerieHeight - taille.h);
                    
                    validPosition = true;
                    for (let pos of positions) {
                        if (checkOverlap(x, y, taille.w, taille.h, pos.x, pos.y, pos.w, pos.h)) {
                            validPosition = false;
                            break;
                        }
                    }
                    attempts++;
                }
                
                positions.push({ x, y, w: taille.w, h: taille.h });
               
                dessin.style.left = x + 'px';
                dessin.style.top = y + 'px';
                
                const rotateValue = taille.rotate;
                dessin.style.animationDelay = '0s';
                dessin.style.zIndex = Math.floor(Math.random() * 100);
                
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Dessin créatif';
               
                dessin.appendChild(img);
                galerie.appendChild(dessin);
                
                setTimeout(() => {
                    dessin.style.transform = `rotate(${rotateValue}deg)`;
                }, 800);
                
            }, index * 100);
        });