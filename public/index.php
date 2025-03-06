<!DOCTYPE html>
<html lang="fr">
<?php
$title = "Page d'accueil";
$descript = "";
include_once "../includes/components/head.php";
?>

<body>
  
  <main>
    <span class="yellow">EDGAR<br>POM</span>
    <h1 class="pink">EDGAR<br>POM</h1>
    <span class="green">CIDRE<br>et JUS</span>
    <img src="./assets/images/vache.png" alt="Vache des highlands">

    <div>
      <a href="./enfant.php" class="greenback">
        <h2>AfterPom</h2>
        <p>Pour les enfants !</p>
      </a>
      <a href="./adulte.php" class="pinkback">
        <h2>PomKorn</h2>
        <p>Pour petits et grands !</p>
      </a>
    </div>
  </main>
  
</body>

</html>