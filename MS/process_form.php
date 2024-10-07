<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $votrenom = htmlspecialchars($_POST['votrenom']);
    $votreprénom = htmlspecialchars($_POST['votreprénom']);
    $sexe = htmlspecialchars($_POST['Sexe']);
    $date = htmlspecialchars($_POST['date']);
    $cp = htmlspecialchars($_POST['CP']);
    $adresse = htmlspecialchars($_POST['Adresse']);
    $ville = htmlspecialchars($_POST['Ville']);
    $email = htmlspecialchars($_POST['email']);
    $demande = htmlspecialchars($_POST['demande']);
    $message = htmlspecialchars($_POST['message']);

    // Форматируем имя файла с текущей датой и временем
    $filename = date('Y-m-d-H-i-s') . '.txt';

    // Содержимое файла
    $content = "Nom: $votrenom\n";
    $content .= "Prénom: $votreprénom\n";
    $content .= "Sexe: $sexe\n";
    $content .= "Date de naissance: $date\n";
    $content .= "Code Postal: $cp\n";
    $content .= "Adresse: $adresse\n";
    $content .= "Ville: $ville\n";
    $content .= "Email: $email\n";
    $content .= "Demande: $demande\n";
    $content .= "Message:\n$message\n";
    $content .= "--------------------------------\n";

    // Сохраняем содержимое в файл
    file_put_contents($filename, $content, FILE_APPEND);

    // Перенаправляем пользователя на страницу успеха или выводим сообщение
    echo "Formulaire envoyé avec succès ! Vos données ont été enregistrées.";
} else {
    echo "Erreur";
}
?>