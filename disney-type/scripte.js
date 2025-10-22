function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score} / ${nbMotsProposes}`;
  spanScore.innerHTML = affichageScore;
  console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerHTML = proposition;
}

function lancerJeu() {
  // Initialisations
  let i = 0;
  let listePropositions = listeMots;
  let score = 0;
  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");

  // Gestion du choix entre mots et phrases
  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      if (event.target.value === "1") {
        listePropositions = listeMots;
      } else {
        listePropositions = listePhrases;
      }
      i = 0;
      score = 0;
      btnValiderMot.disabled = false;
      afficherProposition(listePropositions[i]);
      afficherResultat(score, listePropositions.length);
    });
  }

  // Première proposition
  afficherProposition(listePropositions[i]);
  afficherResultat(score, listePropositions.length);

  // Gestion du clic sur le bouton "Valider"
  btnValiderMot.addEventListener("click", () => {
    if (inputEcriture.value === listePropositions[i]) {
      score++;
    }
    i++;
    afficherResultat(score, listePropositions.length);
    inputEcriture.value = "";

    if (listePropositions[i] === undefined) {
      afficherProposition("Le jeu est fini ");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listePropositions[i]);
    }
  });
}
