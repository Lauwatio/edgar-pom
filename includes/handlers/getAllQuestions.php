<?php

include_once "../db/config.php";

$sql = "SELECT * FROM questions_pomkorn";
$stmt = $pdo->prepare($sql);

$stmt->execute();

$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');

echo json_encode($questions);

?>