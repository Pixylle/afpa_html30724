document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById('monFormulaire');

    formulaire.addEventListener('submit', function (e) {
        e.preventDefault();

        let estValide = true;

        estValide = validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById('votrenom'), 'Nom invalide.') && estValide;
        estValide = validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById('votreprénom'), 'Prénom invalide.') && estValide;
        estValide = validerChamp(/^\S+@\S+\.\S+$/, document.getElementById('email'), 'Email invalide.') && estValide;
        estValide = validerChamp(/.+/, document.getElementById('Adresse'), 'Adresse invalide.') && estValide;
        estValide = validerChamp(/^[0-9]{5}$/, document.getElementById('CP'), 'Code Postal invalide.') && estValide;
        estValide = validerChamp(/^[a-zA-ZÀ-ÿ-\s]+$/, document.getElementById('Ville'), 'Ville invalide.') && estValide;

        if (estValide) {
            console.log("Formulaire valide, prêt à être soumis.");
            formulaire.submit();
        }
    });
});

function validerChamp(regex, champ, messageErreur) {
    const valeur = champ.value;
    if (!regex.test(valeur)) {
        alert(messageErreur);
        champ.focus();
        return false;
    }
    return true;
}