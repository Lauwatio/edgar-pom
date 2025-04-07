<!DOCTYPE html>
<html lang="fr">
<?php
$title = "PomKorn";
$descript = "";
include_once "../includes/components/head.php";
?>

<body>
        <?php include_once "../includes/components/header.php" ?>
        <h3 class="yellowpom">POM</h3>
        <main>
                <h1>PomKorn</h1>
                <p>Faites pétiller votre soirée !</p>
                <div class="wrap">
                        <a class="jeu pinkcase" href="./quizz_a.php">
                                <p>Quizz</p>
                        </a>
                        <a class="jeu greencase" href="./blindtest.php">
                                <p>Blind Test</p>
                        </a>
                        <a class="jeu greencase" href="./defis.php">
                                <p>Défi filmez vous !</p>
                        </a>
                        <a class="jeu pinkcase" href="">
                                <p>Quizz</p>
                        </a>

                </div>
        </main>
        <?php include_once "../includes/components/footer.php" ?>
</body>

</html>