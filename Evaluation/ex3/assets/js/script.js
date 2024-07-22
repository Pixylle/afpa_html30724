var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function displayArray() {
    let arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.innerHTML = tab.join('\n');
}

let nom=prompt("Entrez le prenom");
remove(nom);


function remove(nom) {
    let index = tab.indexOf(nom);

    if (index !== -1) {
        for (let i = index; i < tab.length - 1; i++) {
            tab[i] = tab[i + 1];
        }
        tab[tab.length - 1] = ""; 
       alert(`Le prenom ${nom} était supprimé`);
       alert
    } else {
        alert(`Erreur: le prenom ${nom} n'était pas trouvé.`);
    }
    displayArray(tab.join('\n'));
}

