// Récupérer nos éléments du DOM
const enonce = document.getElementById("enonce");

export const getAllQuestions = async () => {
  const response = await fetch("../includes/handlers/getAllQuestions.php");
  const questions = await response.json();
  return questions;
};

export const renderQuestion = async () => {
  const questions = await getAllQuestions();

  const randomIndex = Math.floor(Math.random() * questions.length);
    const questionAleatoire = questions[randomIndex];

    enonce.innerHTML = `Question : ${questionAleatoire.question}`;
};
