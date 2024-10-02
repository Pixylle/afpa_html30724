<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gourmango</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style3.css">
</head>
<body>

    <?php

function verif($password){
    $pattern = '/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/';
    return preg_match($pattern, $password);
   
}

$resultat = verif("TopSecret42");


if ($resultat) {
    echo "Пароль сложный";
} else {
    echo "Пароль слишком простой";
}
?> 





</body>
</html>