<!DOCTYPE html>
<html lang="fr">
<?php
$title = "Page d'accueil";
$descript = "";
include_once "../includes/components/head.php";
?>

<body>
  <?php include_once "../includes/components/header.php" ?>
  <main>
    <span class="yellow">EDGAR<br>POM</span>
    <h1 class="pink">EDGAR<br>POM</h1>
    <span class="green">CIDRE<br>et JUS</span>
    <img src="./assets/images/vache.png" alt="Vache des highlands">

    <div>
      <section class="greenback">
        <h2>AfterPom</h2>
        <p>Pour les enfants !</p>
      </section>
      <section class="pinkback">
        <h2>PomKorn</h2>
        <p>Pour petits et grands !</p>
      </section>
    </div>
  </main>
  <?php include_once "../includes/components/footer.php" ?>
</body>

</html>