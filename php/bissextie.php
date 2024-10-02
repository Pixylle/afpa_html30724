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
<style>
        td {
            border: 1px solid gray;
        }
        
        th {
            border: 1px solid gray;
            background-color: lightgray;
        }
        td:first-child {
            background-color: lightgray;
        }
        </style>
<table>
    <?php
$annebiss = array("janvier" => 31,
"fevrier" => 28,
"mars" => 31,
"avril" => 30,
"mai" => 31,
"juin" => 30,
"juillet" => 31,
"août" => 31,
"septembre" => 30,
"octobre" => 31,
"novembre" => 30,
"decembre" => 31,
);
asort($annebiss);

foreach($annebiss as $cle => $valeur) 
{ echo "<tr> <td> {$cle} </td><td>{$valeur}</td>";


}


?> 
</table>


</body>
</html>