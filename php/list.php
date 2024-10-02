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
        .td {
            border: 1px solid gray;
        }
        </style>
 <table class="table table-dark table-striped">
    <th>Surname</th>
    <th>Firstname</th>
    <th>Email</th>
    <th>Phone</th>
    <th>City</th>
    <th>State</th>
 <?php
$list =  file('https://ncode.amorce.org/customers.csv');
foreach ($list as $utilisateur)
{ 
    $donne = explode(',', $utilisateur);
    echo "<tr>";
    foreach ($donne as $unit)
    {
        echo "<td>{$unit}</td>";
    }
    echo "</tr>";

}



?>
</table>   
</body>
</html>