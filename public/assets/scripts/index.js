console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";

import { renderQuestion } from "./modules/getAllQuestions.js";

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  renderQuestion();
};

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
