<!DOCTYPE html>
<html lang="fr">
<?php
$title = "Page d'accueil";
$descript = "";
include_once "../includes/components/head.php";
?>

<body id="body-home">
  
  <main class="home">
    <span class="yellow">EDGAR<br>POM</span>
    <h1 class="pink">EDGAR<br>POM</h1>
    <span class="green">CIDRE<br>et JUS</span>
    <img class="home-image" src="./assets/images/vache.png" alt="Vache des highlands">

    <div class="home-menu">
      <div class="greenback">
        <h2>AfterPom <i class="fa-solid fa-dice"></i></h2>
        <p>Pour les enfants !</p>
        <figcaption class="wrap">
        <a class="jeu greencase" href="./quizz_e.php">
                <p>Quizz</p>
        </a>
        <a class="jeu greencase" href="">
                <p>Blind Test</p>
        </a>
        
      </figcaption>
      </div>
      <div class="pinkback">
        <h2>PomKorn <i class="fa-solid fa-dice"></i></h2>
        <p>Pour petits et grands !</p>
        <figcaption class="wrap">
                        <a class="jeu pinkcase" href="./quizz_a.php">
                                <p>Quizz</p>
                        </a>
                        <a class="jeu greencase" href="./blindtest.php">
                                <p>Blind Test</p>
                        </a>
                        <a class="jeu greencase" href="./defis.php">
                                <p>Défi filmez vous !</p>
                        </a>
                </f>
      </div>
      <a href="https://open.spotify.com/playlist/3WX781fjXwCbN2WKaQBMzY?si=7cqJ7Us4TcuRa0zxOifOEg" class="playlist">
        <h2>Pomlist <i class="fa-solid fa-music"></i></h2>
        <p>Sur Spotify <i class="fa-brands fa-spotify"></i></p>
      </a>
    </div>
  </main>
  
</body>

</html>