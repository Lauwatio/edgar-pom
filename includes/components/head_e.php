<?php
$base_url = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]";
$actual_url = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>


<head>
  <!-- General metadatas -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($title) ? "$title | Edgar Play" : "Edgar Play" ?></title>
  <meta name="description" content="<?php echo isset($description) ? $description : "" ?>" />

  <!-- Favicon -->
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="16x16">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="32x32">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="57x57">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="76x76">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="96x96">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="128x128">
  <link href="assets/images/favicons/favicon-16.png" rel="apple-touch-icon">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="192x192">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="228x228">
  <link href="assets/images/favicons/favicon-16.png" rel="icon" sizes="512x512">

  <!-- Metadata Opengraph for Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<?php echo $actual_url ?>" />
  <meta property="og:title" content="<?php echo isset($title) ? "$title | Edgar Play" : "Edgar Play" ?>" />
  <meta property="og:site_name" content="<?php echo isset($title) ? "$title | Edgar Play" : "Edgar Play" ?>" />
  <meta property="og:description" content="<?php echo isset($description) ? $description : "" ?>" />
  <meta property="og:image"
    content="<?php echo isset($thumbnail_seo) ? $thumbnail_seo : "$base_url/assets/images/favicons/favicon-192.png" ?>" />

  <!-- Metadata for Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="<?php echo $actual_url ?>" />
  <meta property="twitter:title" content="<?php echo isset($title) ? "$title | Edgar Play" : "Edgar Play" ?>" />
  <meta property="twitter:description" content="<?php echo isset($description) ? $description : "" ?>" />
  <meta property="twitter:image"
    content="<?php echo isset($thumbnail_seo) ? $thumbnail_seo : "$base_url/assets/images/favicons/favicon-192.png" ?>" />

  <!-- Scripts and styles -->
  <script defer src="assets/scripts/index_e.js" type="module"></script>
  <link rel="stylesheet" href="assets/styles/main.css">
  <script src="https://kit.fontawesome.com/79fc45146d.js" crossorigin="anonymous"></script>

  <!-- Manifest for PWA -->
  <link rel="manifest" href="manifest.json">
</head>