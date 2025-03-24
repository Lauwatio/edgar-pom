<?php

include_once "../db/config.php";

$sql = "SELECT * FROM questions_afterpom";
$stmt = $pdo->prepare($sql);

$stmt->execute();

$questions_e = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');

echo json_encode($questions_e);


?>