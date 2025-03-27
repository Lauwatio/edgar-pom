<?php

include_once "../db/config.php";

$sql = "SELECT * FROM defis_filme_toi";
$stmt = $pdo->prepare($sql);

$stmt->execute();

$defis = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');

echo json_encode($defis);


?>