console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";

import { renderQuestion } from "./modules/getAllQuestions.js";

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  renderQuestion();
};

function mettreAJourJoueurs() {
  
  let list = document.querySelectorAll(".player");

  list.forEach((input, index) => {
      let joueurNom = input.value.trim();
      console.log(`${index}. ${joueurNom}`);
  });

  let tableau = []; // Réinitialise le tableau


  list.forEach((input) => {
      let joueurNom = input.value;
      tableau.push(joueurNom); // Ajoute au tableau
      
  });
  console.log(tableau);
}


const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", function () {
  let input = document.createElement("input");
  console.log(list);
  input.classList.add("player");
  input.type = "text";
  input.placeholder = "Entrez le nom du joueur";
  list.append(input);
});

mettreAJourJoueurs();

// Met à jour en temps réel lorsque l'utilisateur tape
list.addEventListener("input", mettreAJourJoueurs);

const players = document.getElementById("players");
const answers = document.getElementById("answers");

play.addEventListener("click", function(){

  players.classList.add("none");
  answers.classList.add("block");
});