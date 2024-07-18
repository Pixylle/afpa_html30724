

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




