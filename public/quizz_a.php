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
        <button id="add" class="player">+</button>
        <button id="play" >Jouer</button>
    </figcaption>
    

    <figcaption class="answers">
        <h3>Tour de 
                <p id="player">
                </p>
        </h3>
        <h2>Enoncé question</h2>
        <button class="answer">
                <p>Réponse 1</p>
        </button>
        <button class="answer">
                <p>Réponse 2</p>
        </button>
        <button class="answer">
                <p>Réponse 3</p>
        </button>
        
        
</figcaption>
  </main>

</body>

</html>