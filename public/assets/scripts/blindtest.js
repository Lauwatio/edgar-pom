let players = [];
let currentPlayerIndex = 0;
let currentQuestionIndex = 0;

const app = document.getElementById('app');

// Étape 1 : interface d’ajout des joueurs
function showPlayerSetup() {
  app.innerHTML = `
    <div id="setup">
      <h2>Ajouter les joueurs</h2>
      <form id="player-form">
        <input type="text" id="player-input" placeholder="Pseudo joueur" required>
        <button type="submit">Ajouter</button>
      </form>
      <ul id="player-list"></ul>
      <button id="start-game" disabled>Démarrer la partie</button>
    </div>
  `;

  const form = document.getElementById('player-form');
  const input = document.getElementById('player-input');
  const list = document.getElementById('player-list');
  const startButton = document.getElementById('start-game');

  form.onsubmit = (e) => {
    e.preventDefault();
    const pseudo = input.value.trim();
    if (pseudo) {
      players.push({ name: pseudo, score: 0 });
      const li = document.createElement('li');
      li.textContent = pseudo;
      list.appendChild(li);
      input.value = '';
      if (players.length > 0) startButton.disabled = false;
    }
  };

  startButton.onclick = () => {
    showTurn();
  };
}

// Étape 2 : tour d’un joueur
function showTurn() {
  const player = players[currentPlayerIndex];
  const question = questions[currentQuestionIndex];

  app.innerHTML = `
    <h2>${player.name}, c’est à toi de jouer !</h2>
    <audio controls autoplay>
        <source src="${question.audio}" type="audio/mpeg">
        Ton navigateur ne supporte pas l'audio.
    </audio>
    <form id="question-form">
      ${[question.choice_1, question.choice_2, question.choice_3].map((c, i) => `
        <label>
          <input type="radio" name="answer" value="${i}" required> ${c}
        </label><br>
      `).join('')}
      <button type="submit">Valider</button>
    </form>
  `;

  document.getElementById('question-form').onsubmit = (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');
    const answer = parseInt(selected.value);
    const correct = question.correct_answer;

    if (answer === correct) {
      players[currentPlayerIndex].score++;
    }

    showAnswerFeedback(answer, correct);
  };
}

// Étape 3 : feedback de la réponse
function showAnswerFeedback(userAnswer, correctAnswer) {
  const question = questions[currentQuestionIndex];
  const correctText = [question.choice_1, question.choice_2, question.choice_3][correctAnswer];

  const feedbackHTML = `
    <p><strong>Bonne réponse :</strong> ${correctText}</p>
    <button id="next-turn">Continuer</button>
  `;
  app.innerHTML += feedbackHTML;

  document.getElementById('next-turn').onclick = () => {
    currentPlayerIndex++;

    if (currentPlayerIndex >= players.length) {
      currentPlayerIndex = 0;
      currentQuestionIndex++;
    }

    if (currentQuestionIndex >= questions.length) {
      showFinalScore();
    } else {
      showTurn();
    }
  };
}

// Étape 4 : score final
function showFinalScore() {
  app.innerHTML = `<h2>Fin du jeu 🎉</h2>`;
  players.sort((a, b) => b.score - a.score).forEach(player => {
    app.innerHTML += `<p>${player.name} : ${player.score} / ${questions.length}</p>`;
  });
  app.innerHTML += `<button onclick="location.reload()">Rejouer</button>`;
}

// Lancer le setup des joueurs dès le chargement
showPlayerSetup();
