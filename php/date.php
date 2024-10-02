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
<b>Ex 1</b><br>
    <?php
echo date("W", strtotime("14-07-2019"));

?> 
<br><br><b>Ex 2</b><br>
<?php
// Текущая дата
$currentDate = new DateTime();
echo "Текущая дата: " . $currentDate->format('Y-m-d') . "<br>";  // Правильный вывод даты

// Дата окончания обучения (замените на свою дату)
$endDate = new DateTime('2024-10-11');
echo "Дата окончания: " . $endDate->format('Y-m-d') . "<br>";    // Вывод даты окончания

// Вычисляем разницу
$interval = $currentDate->diff($endDate);

// Выводим количество оставшихся дней
echo "Осталось " . $interval->days . " дней до окончания учебы.";
?>

<br><br><b>Ex 3 Comment déterminer si une année est bissextile ?</b><br>
<?php
$premierJour = new DateTime('2024-01-01');
$lastDay = new DateTime('2025-01-01');

$interval = $premierJour->diff($lastDay);
$days = $interval->days;
switch ($days){
    case "365":
       echo "L'année n'est pas bissextile";
       break;
    case "366":
        echo "L'année est bissextile";
        break; 
}

?>

<br><br><b>Ex 4 Montrez que la date du 32/17/2019 est erronée.</b><br>
<?php
$datePattern = "/^[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}$/";
$date = "32/17/2019";

if (preg_match($datePattern, $date))
{
    echo "Date ".$date." valide.<br>";
}
else
{
    echo "Date ".$date." erronée.<br>";
}


?>

<br><br><b>Ex 4 Affichez l'heure courante sous cette forme : 11h25.</b><br>
<?php
$heure = new DateTime();

echo $heure->format("H\hi");

?>
<br><br><b>Ex (5) Ajoutez 1 mois à la date courante.</b><br>
<?php
$dateNow = new DateTime();
$dateNow->modify('+1 month');
echo $dateNow->format('Y-m-d') . "\n";

?>

<br><br><b>Ex (6) Que s'est-il passé le 1000200000</b><br>
<?php
$timestamp = 1000200000;
echo date("Y-m-d H:i:s", $timestamp);
echo '<br><img src=https://news.store.rambler.ru/img/28c5b2c2bf2defd598eed8fba6db6339?img-format=auto&img-1-resize=height:350,fit:max&img-2-filter=sharpen>'
?>


</body>
</html>