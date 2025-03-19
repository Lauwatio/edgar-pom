console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";

import { renderQuestions } from "./modules/getAllQuestions.js";

// console.log(renderQuestion());

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  let tableauJoueurs = [];
  let compteurJoueurs = 0;

  const player = document.getElementById("player");

  // crée un tableaux pour les joueurs
  function mettreAJourJoueurs() {
    const inputsPlayer = document.querySelectorAll(".player");

    inputsPlayer.forEach((input) => {
      input.addEventListener("change", (e) => {
        const nouveauNom = e.currentTarget.value;
        const idJoueur = e.currentTarget.dataset.joueur;

        let joueurModifie = false;

        tableauJoueurs = tableauJoueurs.map((joueur) => {
          if (joueur.id === parseInt(idJoueur)) {
            joueurModifie = true;
            return {
              ...joueur,
              nom: nouveauNom,
            };
          }
          return joueur;
        });

        if (!joueurModifie) {
          tableauJoueurs.push({ id: compteurJoueurs, nom: nouveauNom, pts: 0 });
        }

        if (tableauJoueurs.length > 0) {
          play.disabled = false;
        }
      });
    });
  }

  mettreAJourJoueurs();

  function startGame(joueurs) {
    renderQuestions(joueurs);
  }

  /* ajouter des joueurs */
  const add = document.getElementById("add");
  const list = document.getElementById("list");

  add?.addEventListener("click", function () {
    compteurJoueurs++;

    let input = document.createElement("input");
    input.classList.add("player");
    input.type = "text";
    input.dataset.joueur = compteurJoueurs;
    input.placeholder = "Entrez le nom du joueur";
    let li = document.createElement("li");
    li.append(input);
    list.append(li);

    mettreAJourJoueurs();
  });

  // cacher / montrer section joueurs / questions
  const players = document.querySelector(".players");
  const answers = document.querySelector(".answers");
  const play = document.getElementById("play");

  if (play) play.disabled = true;
  if (answers) answers.classList.add("none");
  if (players) players.classList.add("block");

  play?.addEventListener("click", function () {
    players.classList.replace("block", "none");
    answers.classList.replace("none", "block");

    startGame(tableauJoueurs);
  });
};
