console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";

import { renderQuestion } from "./modules/getAllQuestions.js";

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  renderQuestion();
};

const ajouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");
let input = document.createElement("input");

ajouter.addEventListener("click", function () {
  console.log(liste);
  liste.append(input);
  input.classList.add("joueur");
  input.type = "text";
  input.placeholder = "Entrez le nom du joueur";
});
