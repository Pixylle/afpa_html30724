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
 //On déclare une variable dont la valeur (contenu) sera écrite dans le fichier
 $myVar = "Bonjour le monde";

 //Ouverture en écriture seule 
$fp = fopen("essai.txt", "a"); 

 //Ecriture du contenu ($myVar) 
fputs($fp, $myVar); 

//Fermeture du fichier  
fclose($fp); 

$donnee = file('liens.txt');
foreach ($donnee as $lien){
    echo "{$lien}</br>";
}


?>

</body>
</html>