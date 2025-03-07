<!DOCTYPE html>
<html lang="fr">
<?php
$title = "PomKorn Quizz";
$descript = "";
include_once "../includes/components/head.php";
?>

<body>
  <?php include_once "../includes/components/header.php" ?>
  <h3 class="yellowpom">POM</h3>

  <main class="quizz-main">
    <h1>Quizz PomKorn</h1>

    <figcaption class="joueurs">
        <h3>Joueurs</h3>
        <input class="joueur" type="text">
        <button class="joueur">+</button>
    </figcaption>

    <figcaption class="reponses">
        <h3>Tour de ...</h3>
        <h2>Enoncé question</h2>
        <button class="reponse">
                <p>Réponse 1</p>
        </button>
        <button class="reponse">
                <p>Réponse 2</p>
        </button>
        <button class="reponse">
                <p>Réponse 3</p>
        </button>
        
        
</figcaption>
  </main>

</body>

</html>