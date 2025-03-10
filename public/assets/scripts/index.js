console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";



import { renderQuestion } from "./modules/getAllQuestions.js";

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

  let tableau = [];


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

if (!players || !answers || !play) {
  console.error("Un des éléments n'a pas été trouvé !");
}