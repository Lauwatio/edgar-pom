<?php

function loadEnvVariables($fileEnv)
{
  if (!file_exists($fileEnv)) {
    throw new Exception("Le fichier .env n'existe pas.");
  }

  $lines = file($fileEnv, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0) {
      continue;
    }

    list($name, $value) = explode('=', $line, 2);
    $name = trim($name);
    $value = trim($value);

    if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
      putenv("$name=$value");
      $_ENV[$name] = $value;
      $_SERVER[$name] = $value;
    }
  }
}

// Utilisation de la fonction
loadEnvVariables(__DIR__ . '/.env');

// Exemple d'accès à une variable d'environnement
$dbHost = getenv('DB_HOST');
$dbUser = getenv('DB_USER');
$dbPass = getenv('DB_PASS');
$dbName = getenv('DB_NAME');

// Connexion à la base de données
$dsn = "mysql:host=$dbHost;dbname=$dbName;charset=utf8";
try {
  $pdo = new PDO($dsn, $dbUser, $dbPass);

  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // Configuration supplémentaire de PDO si nécessaire
} catch (PDOException $e) {
  echo 'Connexion échouée : ' . $e->getMessage();
}
