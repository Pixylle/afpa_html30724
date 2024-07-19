

/*function sommearr(sum, number) {
    return sum + number;
}

let arr = [];
let numbre = parseFloat(window.prompt("Entrez votre nombre"));
let sum = 0;

while (!isNaN(numbre) && numbre !== 0) { 
    arr.push(numbre);
    sum = sommearr(sum, numbre);
    numbre = parseFloat(window.prompt("Entrez votre nombre")); 
}
document.getElementById("result").innerHTML = arr.length;
document.getElementById("somme").innerHTML = sum;
document.getElementById("moyenne").innerHTML = sum/arr.length;
console.log(arr)

*/
/*function message (){
    let inputElement=document.getElementById("votrenom");
    let Value = inputElement.value;
    console.log(Value);
    alert("Vous avez saisi" + " " + Value);
    
}
*/

/* Les événements ex2
let magnom=Math.floor(Math.random() *50);
console.log(magnom);
function verif(magnom)
{
 let num = document.getElementById("textBox1").value;
   if (num>magnom)
   {
    alert("Le Nombre magique est inferieur")
    
   }
   if (num<magnom)  
   {
    alert("Le Nombre magique est superieur")
   }
  
   if (num==magnom)
   {
    alert("Bravo! Vous avez gagné!!!")
   }
   
textBox1.value = " ";


}*/

function checkForm(f) {
    const emailRegex = /^[a-z0-9.-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$/;
    const postalCodeRegex = /^\d{5}$/;
    const textRegex =/^[a-z-]{1,}$/i;


    const email = f.elements['mail'].value;
    const postalCode = f.elements['cp'].value;
    const ville = f.elements['ville'].value;
    const personne = f.elements['personne'].value;

   
    if (!emailRegex.test(email)) {
        alert("Email non valide");
        return false;
    }
    if (!postalCodeRegex.test(postalCode)) {
        alert("Le code postal doit comporter 5 chiffres.");
        return false;
    }

    if (!textRegex.test(ville)) {
        alert("Saisir la valeur correcte");
        return false;
    }

    if (!textRegex.test(personne)) {
        alert("Saisir la valeur correcte");
        return false;
    }


    return true;
}




/*код Ману. Стопорит отправку формы до ее валидации)*/
/*
document.addEventListener('DOMContentLoaded', function () {
    // Получаем элемент формы по его идентификатору
    const formulaire = document.getElementById('monFormulaire');

    // Добавляем обработчик события 'submit' для формы
    formulaire.addEventListener('submit', function (e) {
        // Предотвращаем отправку формы до завершения валидации
        e.preventDefault();

        // Инициализируем переменную, которая будет отслеживать валидность формы
        let estValide = true;
        */
        // Вызываем функцию валидации для каждого поля и обновляем переменную estValide
        //estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById('nom'), 'Nom invalide.');
      //  estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById('prenom'), 'Prénom invalide.');
       // estValide &= validerChamp(/^\S+@\S+\.\S+$/, document.getElementById('email'), 'Email invalide.');
       // estValide &= validerChamp(/^\d{1,3}$/, document.getElementById('age'), 'Age invalide.');
       // estValide &= validerChamp(/.*/, document.getElementById('sexe'), ''); // Нет специфической регулярки для поля sexe
       // estValide &= validerChamp(/.+/ , document.getElementById('adresse'), 'Adresse invalide.');
       // estValide &= validerChamp(/^\d{5}$/, document.getElementById('cp'), 'Code Postal invalide.');
       // estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-\s]+$/, document.getElementById('ville'), 'Ville invalide.');
      //  estValide &= validerChamp(/^[a-zA-ZÀ-ÿ-\s]+$/, document.getElementById('pays'), 'Pays invalide.');
       // estValide &= validerChamp(/.*/, document.getElementById('profession'), ''); // Нет специфической регулярки для поля profession

        // Если все поля валидны, отправляем форму
     /*   if (estValide) {
            console.log("Formulaire valide, prêt à être soumis.");
            formulaire.submit();
        }
    });
});

*/