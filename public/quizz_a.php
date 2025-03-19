<!DOCTYPE html>
<html lang="fr">
<?php
$title = "PomKorn Quizz";
$descript = "";
include_once "../includes/components/head.php";
include_once "../includes/components/header.php";
?>

<body>
        <?php include_once "../includes/components/header_jeu_pomkorn.php" ?>
        <span class="yellowpom">POM</span>

        <main class="quizz-main">
                <h1>Quizz <br> PomKorn</h1>
                <div class="players">
                        <h2>Joueurs</h2>
                        <ul id="list">
                                <li>
                                        <input class="player" data-joueur="0" type="text"
                                                placeholder="Entrez le nom du joueur">
                                </li>
                        </ul>
                        <button id="add">+</button>
                        <button id="play">Jouer</button>
                </div>
                <div class="answers">
                        <h2>
                                <span>Tour de</span>
                                <span id="player"></span>
                        </h2>
                        <h3 id="enonce"></h3>
                        <button class="answer" id="first" data-question-number="1">
                        </button>
                        <button class="answer" id="second" data-question-number="2">
                        </button>
                        <button class="answer" id="third" data-question-number="3">
                        </button>
                </div>
        </main>

</body>

</html>