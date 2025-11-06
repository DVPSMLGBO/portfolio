// bb8.js - Gestion du changement de thème
document.addEventListener('DOMContentLoaded', function() {
    const bb8 = document.getElementById('bb8');
    const body = document.body;
    const html = document.documentElement;

    // Fonction pour activer le mode blanc
    const enableWhiteMode = () => {
        body.classList.add('white-mode-theme');
        html.classList.add('white-mode-theme');
        localStorage.setItem('whiteMode', 'enabled');
        bb8.checked = true;
    };

    // Fonction pour désactiver le mode blanc (revenir au mode sombre)
    const disableWhiteMode = () => {
        body.classList.remove('white-mode-theme');
        html.classList.remove('white-mode-theme');
        localStorage.setItem('whiteMode', 'disabled');
        bb8.checked = false;
    };

    // Vérifier l'état au chargement de la page
    let whiteMode = localStorage.getItem('whiteMode');
    if (whiteMode === 'enabled') {
        enableWhiteMode();
    }

    // Écouter les changements sur la checkbox
    bb8.addEventListener('change', function() {
        let whiteMode = localStorage.getItem('whiteMode');
        if (whiteMode !== 'enabled') {
            enableWhiteMode();
        } else {
            disableWhiteMode();
        }
    });
});