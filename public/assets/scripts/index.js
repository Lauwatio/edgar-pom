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


ajouter.addEventListener("click", function () {
  let input = document.createElement("input");
  console.log(liste);
  input.classList.add("joueur");
  input.type = "text";
  input.placeholder = "Entrez le nom du joueur";
  liste.append(input);
});
