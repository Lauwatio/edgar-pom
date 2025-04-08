


<!DOCTYPE html>
<html lang="en">
<?php
$title = "PomKorn";
$descript = "";
include_once "../includes/components/head.php";
include "../includes/db/config.php"
?>
<body class="page-blindtest">
<?php
$stmt = $pdo->query("SELECT * FROM questions ORDER BY RAND() LIMIT 10");
$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Encodage en JSON
$jsonQuestions = json_encode($questions);
?>
    <div id="app"></div>

    <script>
        const questions = <?php echo $jsonQuestions; ?>;
    </script>
    <script src="./assets/scripts/blindtest.js"></script>
</body>
</html>
