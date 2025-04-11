// Récupérer nos éléments du DOM
const enonce_e = document.getElementById("enonce_e");
const first_e = document.getElementById("first_e");
const second_e = document.getElementById("second_e");
const third_e = document.getElementById("third_e");
const player = document.getElementById("player");

const questionWrapper = document.querySelector(".answers");

export const getAllQuestions = async () => {
  const response = await fetch("../includes/handlers/getAllQuestions_e.php");
  const questions = await response.json();
  return questions;
};

export const renderQuestions_e = async (joueurs_e) => {
  const questions = await getAllQuestions();
  const randomQuestions = [];

  for (let index = 0; index < 2; index++) {
    if (questions.length === 0) break;

    const randomIndex = Math.floor(Math.random() * questions.length);
    randomQuestions.push(questions.splice(randomIndex, 1)[0]);
  }

  gestionPartie(randomQuestions, joueurs_e);

  enonce_e.innerText = `Question : ${randomQuestions[0].question}`;
  first_e.innerText = `${randomQuestions[0].reponse1}`;
  second_e.innerText = `${randomQuestions[0].reponse2}`;
  third_e.innerText = `${randomQuestions[0].reponse3}`;
};

const gestionPartie = (questions, joueurs_e) => {
  let compteurQuestion = 0;
  let compteurJoueur = 0;
  let joueursRestants = joueurs_e.length;
  let questionActuelle = questions[compteurQuestion];

  player.innerText = joueurs_e[compteurJoueur].nom;

  questionWrapper.addEventListener("click", (e) => {
    let joueurActuel = joueurs_e[compteurJoueur];

    if (e.target.classList.contains("button-answer")) return;
    if (!e.target.hasAttribute("data-question-number")) return;

    const nombreQuestion = parseInt(e.target.dataset.questionNumber);

    if (questionActuelle.num_rep === nombreQuestion) {
      console.log("C'est gagné !");
      console.log(joueurActuel, "win question");
      joueurActuel.pts++;
    } else {
      console.log("Mauvaise réponse !");
    }

    // Passer au joueur suivant
    compteurJoueur++;
    joueursRestants--;

    if (joueursRestants === 0) {
      // Afficher la réponse après que tous les joueurs ont répondu
      const bonneReponse = Object.entries(questionActuelle).find(([key]) =>
        key.includes(questionActuelle.num_rep.toString())
      )?.[1];

      questionWrapper.innerHTML = `
        <p class="result">La bonne réponse était:<br> ${bonneReponse}</p>
        <p class="paragraph-answer">${questionActuelle.explication}</p>
        <button type="button" class="button-answer">Suite</button>
      `;

      compteurJoueur = 0;
      joueursRestants = joueurs_e.length;
      compteurQuestion++;

      const buttonAnswer = document.querySelector(".button-answer");

      buttonAnswer?.addEventListener("click", () => {
        if (compteurQuestion < questions.length) {
          questionActuelle = questions[compteurQuestion];

          setTimeout(() => {
            questionWrapper.innerHTML = `
              <h2>Tour de <span id='player'>${joueurs_e[compteurJoueur].nom}</span></h2>
              <h3 id='enonce_e'>${questionActuelle.question}</h3>
              <button class='answer' id='first_e' data-question-number='1'>${questionActuelle.reponse1}</button>
              <button class='answer' id='second_e' data-question-number='2'>${questionActuelle.reponse2}</button>
              <button class='answer' id='third_e' data-question-number='3'>${questionActuelle.reponse3}</button>
            `;
            player.innerText = joueurs_e[compteurJoueur].nom;
          }, 500);
        } else {
          console.log("Partie finito !");

          const classement = joueurs_e.map((joueur) => {
            return {
              nom: joueur.nom,
              pts: joueur.pts,
            };
          });

          const shortClassement = classement.sort((a, b) => b.pts - a.pts); // Tri décroissant

          questionWrapper.innerHTML = `
              <h2>Fin de la partie !</h2>
              <h3>Classement :</h3>
              <div class="relative">
                <ul class="classement">
                ${shortClassement
                  .map(
                    (joueur) =>
                      `<li class="relative">${joueur.nom}<br>${joueur.pts} pts</li>`
                  )
                  .join("")}
                </ul>
                <img src="./assets/images/podium.png" alt="Podium">
              </div>

              <a href="./index.php" class="button-home">Accueil</a>
            `;
        }
      });
    } else {
      const player = document.getElementById("player");

      joueurActuel = joueurs_e[compteurJoueur];
      console.log(joueurActuel, "next player");
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
