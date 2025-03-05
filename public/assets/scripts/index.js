console.log("Made with 💛");

// Exemple d'import de fonctions.
// import { validateEmail } from "./utilis.js";

import { renderQuestion } from "./modules/getAllQuestions.js";

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
  renderQuestion();
};
