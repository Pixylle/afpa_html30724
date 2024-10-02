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
<table>
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
    <?php
    function multiply ($x, $y){
        for ($i=0; $i<=$y; $i++){
            echo "<th>{$i}</th>";
        }
        for ($row = 1; $row<=$x; $row++) {
            echo "<tr>";
            for ($col=0; $col<=$y; $col++) {
                echo "<td>";
                if ($col==0) {
                    echo "<b>{$row}</b>"; 
                }
                else {
                    echo $col*$row; 
                }
                echo "</td>";
            }
            echo "</tr>";
        }
    }
    multiply (9, 9); 
    ?> 
</table>


</body>
</html>