// Récupérer nos éléments du DOM
const enonce = document.getElementById("enonce");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

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
    first.innerHTML = `${questionAleatoire.reponse1}`;
    second.innerHTML = `${questionAleatoire.reponse2}`;
    third.innerHTML = `${questionAleatoire.reponse3}`;

};
