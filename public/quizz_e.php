<!DOCTYPE html>
<html lang="fr">
<?php
$title = "AfterPom Quizz";
$descript = "";
include_once "../includes/components/head_e.php";
include_once "../includes/components/header.php";
?>

<body>
        <?php include_once "../includes/components/header_jeu_afterpom.php" ?>
        <span class="yellowpom">POM</span>

        <main class="quizz-main">
                <h1>Quizz <br> AfterPom</h1>
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
                        <h3 id="enonce_e"></h3>
                        <button class="answer" id="first_e" data-question-number="1">
                        </button>
                        <button class="answer" id="second_e" data-question-number="2">
                        </button>
                        <button class="answer" id="third_e" data-question-number="3">
                        </button>
                </div>
        </main>

</body>

</html>