let players = [];
let currentPlayerIndex = 0;
let currentQuestionIndex = 0;

const app = document.getElementById('app');

// Étape 1 : interface d’ajout des joueurs
function showPlayerSetup() {
  app.innerHTML = `
  <div class="page-header">
    <a href="index.php" class="back-btn">⏴</a>
    <div class="page-title">
      <h1>Blind Test</h1>
      <h2>PomKorn</h2>
    </div>
  </div>

  <div class="quiz-card">
    <h2>Joueurs</h2>
    <ul id="player-list" class="player-list"></ul>
    <form id="player-form">
      <input type="text" id="player-input" placeholder="Entrez le nom du joueur" required>
      <button type="submit" class="add-btn">+</button>
    </form>
    <button id="start-game" disabled class="start-btn">Jouer</button>
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
  <div class="quiz-card">
    <h2>${player.name}, c’est à toi de jouer !</h2>

    <div class="custom-player">
      <span id="play-btn" class="player-toggle"></span>
      <input type="range" id="seek-bar" value="0" min="0" step="1">
      <div class="time-info">
        <span id="current-time" class="time">0:00</span>
        <span class="time">/</span>
        <span id="duration" class="time">0:00</span>
      </div>
      <audio id="audio-player" src="${question.audio}"></audio>
    </div>

   <form id="question-form">
  <div class="answer-group">
    ${[question.choice_1, question.choice_2, question.choice_3].map((c, i) => `
      <label class="custom-radio">
        <input type="radio" name="answer" value="${i}" required>
        <span class="radio-box">${c}</span>
      </label>
    `).join('')}
  </div>
  <button type="submit" class="validate-btn">Valider</button>
</form>


  </div>
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
    playBtn.classList.add('playing');
  } else {
    audio.pause();
    playBtn.classList.remove('playing');
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
