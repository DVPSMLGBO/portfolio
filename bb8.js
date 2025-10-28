// Récupération de l'élément checkbox
const toggle = document.querySelector(".bb8-toggle__checkbox");

// Variable en mémoire pour stocker le thème
let currentTheme = "dark";

// Écouteur d'événement pour le changement de thème
toggle.addEventListener("change", function() {
    document.body.classList.toggle("white-mode");
    
    if (document.body.classList.contains("white-mode")) {
        currentTheme = "white";
        console.log("Mode clair activé ✓");
    } else {
        currentTheme = "dark";
        console.log("Mode sombre activé ✓");
    }
});

console.log("Toggle BB8 initialisé ✓");