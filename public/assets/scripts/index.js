console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";

let tableau = [];

import { renderQuestion } from "./modules/getAllQuestions.js";

console.log(renderQuestion());

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  renderQuestion();
};


// crée un tableaux pour les joueurs

function mettreAJourJoueurs() {
  
  let list = document.querySelectorAll(".player");

  list.forEach((input, index) => {
      let joueurNom = input.value.trim();
      console.log(`${index}. ${joueurNom}`);
  });

  tableau = [];


  list.forEach((input) => {
      let joueurNom = input.value;
      tableau.push(joueurNom);
      
  });
  console.log(tableau);
}


/* ajouter des joueurs */

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

list.addEventListener("input", mettreAJourJoueurs);

// cacher / montrer section joueurs / questions

const players = document.querySelector(".players");
const answers = document.querySelector(".answers");
const play = document.getElementById("play");

answers.classList.add("none");
players.classList.add("block");

play.addEventListener("click", function(){

  players.classList.replace("block", "none");
    answers.classList.replace("none", "block");
});

//Fonctionnement questionnaire

const player = document.getElementById("player");

player.innerHTML = tableau[0];

let index = 0;

if (index >= tableau.length) {
  index = 0; // revenir au début si on atteint la fin
}
console.log("ça c'est joueur 1" + tableau[0]);
