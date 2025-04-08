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


let answersThisRound = []; // pour stocker les réponses à cette question


function showTurn() {
  const player = players[currentPlayerIndex];
  const question = questions[currentQuestionIndex];

  app.innerHTML = `
    <h2>${player.name}, c’est à toi de jouer !</h2>
    <div class="custom-player">
  <div class="player-controls">
   <input type="range" id="seek-bar" value="0" min="0" step="1">
  <audio id="audio-player" src="${question.audio}"></audio>
    <div class="time-info">
      <span id="current-time">0:00</span> / <span id="duration">0:00</span>
    </div>
    <button id="play-btn">▶️</button>
  </div>
  
</div>



    <form id="question-form">
      ${[question.choice_1, question.choice_2, question.choice_3].map((c, i) => `
        <label>
          <input type="radio" name="answer" value="${i}" required> ${c}
        </label><br>
      `).join('')}
      <button type="submit">Valider</button>
    </form>
  `;
  const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const seekBar = document.getElementById('seek-bar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

// Charge durée totale une fois l'audio prêt
audio.onloadedmetadata = () => {
  seekBar.max = Math.floor(audio.duration);
  duration.textContent = formatTime(audio.duration);
};

// Play / Pause toggle
playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
};

// Met à jour la barre et le temps
audio.ontimeupdate = () => {
  seekBar.value = Math.floor(audio.currentTime);
  currentTime.textContent = formatTime(audio.currentTime);
};

// Navigation manuelle dans la barre
seekBar.oninput = () => {
  audio.currentTime = seekBar.value;
};

// Formatage du temps mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}


  document.getElementById('question-form').onsubmit = (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');
    const answer = parseInt(selected.value);
    answersThisRound.push({ playerIndex: currentPlayerIndex, answer });

    currentPlayerIndex++;

    if (currentPlayerIndex < players.length) {
      showTurn(); // joueur suivant
    } else {
      showAnswerFeedback(); // tous les joueurs ont répondu
    }
  };
}

function showAnswerFeedback() {
  const question = questions[currentQuestionIndex];
  const correct = question.correct_answer;
  const correctText = [question.choice_1, question.choice_2, question.choice_3][correct];

  let resultHTML = `<h3>Bonne réponse : ${correctText}</h3>`;

  // Met à jour les scores et affiche qui a bien répondu
  answersThisRound.forEach(entry => {
    const player = players[entry.playerIndex];
    const isCorrect = entry.answer === correct;
    if (isCorrect) {
      player.score++;
    }
    resultHTML += `<p>${player.name} : ${isCorrect ? "✅ Bonne réponse !" : "❌ Faux"}</p>`;
  });

  resultHTML += `<button id="next-question">Question suivante</button>`;
  app.innerHTML = resultHTML;

  document.getElementById('next-question').onclick = () => {
    currentPlayerIndex = 0;
    currentQuestionIndex++;
    answersThisRound = [];

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
