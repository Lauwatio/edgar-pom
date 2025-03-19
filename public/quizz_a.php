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
  <h3 class="yellowpom">POM</h3>

  <main class="quizz-main">
    <h1>Quizz <br> PomKorn</h1>

    <figcaption class="players">
        <h3>Joueurs</h3>
        <ul id="list">
        <input class="player" type="text" placeholder="Entrez le nom du joueur">

        </ul>
        <button id="add">+</button>
        <button id="play" >Jouer</button>
    </figcaption>
    

    <figcaption class="answers">
        <h3>Tour de 
                <p id="player"></p>
        </h3>
        <h2 id="enonce"></h2>
        <button class="answer">
                <p id="first"></p>
        </button>
        <button class="answer">
                <p id="second"></p>
        </button>
        <button class="answer">
                <p id="third"></p>
        </button>
        
        
</figcaption>
  </main>

</body>

</html>