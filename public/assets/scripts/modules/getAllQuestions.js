// Récupérer nos éléments du DOM
const wrapper = document.querySelector(".questions-wrapper");

export const getAllQuestions = async () => {
  const response = await fetch("../includes/handlers/getAllQuestions.php");
  const questions = await response.json();
  return questions;
};

export const renderQuestion = async () => {
  const questions = await getAllQuestions();

  questions.forEach((question) => {
    wrapper.innerHTML += `<li>id: ${question.id} - question : ${question.question}<li>`;
  });
};
