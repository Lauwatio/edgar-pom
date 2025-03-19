// Récupérer nos éléments du DOM
const enonce = document.getElementById("enonce");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const player = document.getElementById("player");

const questionWrapper = document.querySelector(".answers");

export const getAllQuestions = async () => {
  const response = await fetch("../includes/handlers/getAllQuestions.php");
  const questions = await response.json();
  return questions;
};

export const renderQuestions = async (joueurs) => {
  const questions = await getAllQuestions();
  const randomQuestions = [];

  for (let index = 0; index < 10; index++) {
    if (questions.length === 0) break;

    const randomIndex = Math.floor(Math.random() * questions.length);
    randomQuestions.push(questions.splice(randomIndex, 1)[0]);
  }

  gestionPartie(randomQuestions, joueurs);

  enonce.innerText = `Question : ${randomQuestions[0].question}`;
  first.innerText = `${randomQuestions[0].reponse1}`;
  second.innerText = `${randomQuestions[0].reponse2}`;
  third.innerText = `${randomQuestions[0].reponse3}`;
};

const gestionPartie = (questions, joueurs) => {
  let compteurQuestion = 0;
  let compteurJoueur = 0;
  let joueursRestants = joueurs.length;
  let questionActuelle = questions[compteurQuestion];

  let joueurActuel = joueurs[compteurJoueur];
  player.innerText = joueurActuel.nom;

  questionWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-answer")) return;
    if (!e.target.hasAttribute("data-question-number")) return;

    const nombreQuestion = parseInt(e.target.dataset.questionNumber);

    if (questionActuelle.num_rep === nombreQuestion) {
      console.log("C'est gagné !");
      joueurActuel.pts++;
    } else {
      console.log("Mauvaise réponse !");
    }

    // Passer au joueur suivant
    compteurJoueur++;
    joueursRestants--;

    console.log(joueursRestants);

    if (joueursRestants === 0) {
      // Afficher la réponse après que tous les joueurs ont répondu
      const bonneReponse = Object.entries(questionActuelle).find(([key]) =>
        key.includes(questionActuelle.num_rep.toString())
      )?.[1];

      questionWrapper.innerHTML = `
        <p class="result">La bonne réponse : ${bonneReponse}</p>
        <p class="paragraph-answer">${questionActuelle.explication}</p>
        <button type="button" class="button-answer">Question suivante</button>
      `;

      compteurJoueur = 0;
      joueursRestants = joueurs.length;
      compteurQuestion++;

      const buttonAnswer = document.querySelector(".button-answer");

      buttonAnswer?.addEventListener("click", () => {
        if (compteurQuestion < questions.length) {
          questionActuelle = questions[compteurQuestion];

          setTimeout(() => {
            questionWrapper.innerHTML = `
              <h2>Tour de <span id='player'>${joueurs[compteurJoueur].nom}</span></h2>
              <h3 id='enonce'>${questionActuelle.question}</h3>
              <button class='answer' id='first' data-question-number='1'>${questionActuelle.reponse1}</button>
              <button class='answer' id='second' data-question-number='2'>${questionActuelle.reponse2}</button>
              <button class='answer' id='third' data-question-number='3'>${questionActuelle.reponse3}</button>
            `;
            player.innerText = joueurs[compteurJoueur].nom;
          }, 500);
        } else {
          console.log("Partie finito !");
        }
      });
    } else {
      const player = document.getElementById("player");

      joueurActuel = joueurs[compteurJoueur];

      player.innerText = joueurActuel.nom;
    }
  });
};

// Récupérer les questions
// J'écoute l'evenement
// Je regarde le numéro qui ressort
// Je compare avec la question actuelle
// Ajoute +1 ou 0 à la personne actuelle
// A la fin, afficher résultat
// Joueur suivant
