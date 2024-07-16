
/*let nom
let prenom
nom = prompt("Saisissez votre nom")
prenom = prompt("Votre prénom")
alert("Vous etês" + " " + nom + " " + prenom)*/



/*let num1;
let num2;
let total;
num1 = prompt("Saisissez premièr nombre");
num2 = prompt("Saisissez deuxième nombre");
num1 = Number(num1);
num2 = Number(num2);
total = num1+num2;
alert("Le produit est égal à" + " " + total);*/



/*let num1;
let num2;
let total;
num1 = prompt("Saisissez premièr nombre");
num2 = prompt("Saisissez deuxième nombre");
total = num1*num2;
alert("Le produit est égal à" + " " + total);*/


/*
let cels;
let farenh;
cels = prompt("Entrez la température en degrés Celsius");
farenh = (cels*9/5) + 32;
alert("La température en degrés Fahrenheit est" + " " + farenh);*/

/*let usernumbr
usernumbr = prompt("Entrez votre nombre");
if (usernumbr%2 > 0)
{
    alert("Votre nombre est impair")

}
else {
    alert("Votre nombre est pair")
}*/


/*let userage
userage = prompt("Entrez votre age")

if (userage>=18)
{
    alert("Vous avez" + " " + userage + " ans et vous etês majeur")
}
if (userage<18&&userage>0)
{
    alert("Vous avez" + " " + userage + " ans et vous etês mineur")
}
else 
{
    alert("Mauvaise reponse")
} */

    //Calculateur

    /*let result
    let numb1 = prompt("Entrez premier nombre")
    let numb2 = prompt("Entrez deuxiem nombre")
    let oper = prompt("Sélectionnez l'action souhaitée")
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    switch (oper)

     { case "*":
        result=numb1*numb2
        alert("Le produit est égal à" + " " + result)
        break; 

        case "+":
        result=numb1+numb2
        alert("Le somme est égal à" + " " + result)
        break; 
        
     case "-": 
     
        result=numb1-numb2
        alert("La différence entre les nombres égale à" + " " + result)
        break; 
        
    case "/":
            if (numb2==0)
            { alert("Vous ne pouvez pas diviser par zéro")
               }
         
           else {
            
           result=numb1/numb2
           alert("Le résultat de la division de ces nombres sera" + " " + result)
        }   
        break;   
        
     default:  
     alert("Entrez un opérateur valide"); 
        
    }
     */


/*ex1 Boucles
let i=0
let list
let prenom = prompt ("Entrez votre prenom N1 ou Click sur Annuler pour arrêter le saisie")
while (prenom!=null&&prenom !== "")
{  
    if (i==0)
       {list=prenom;
       i++;
       prenom = prompt ("Entrez votre prenom N"+ (i+1) +"ou Click sur Annuler pour arrêter le saisie")
       }
   else {
     list=list+ " " + prenom;
     i++;
     prenom = prompt ("Entrez votre prenom N" +(i+1)+ "ou Click sur Annuler pour arrêter le saisie")
          }

     
 } 

 console.log(list)
 console.log("количесво людей в списке:" + i) */






 /*ex2 Boucles
 let N = prompt ("Entrez votre number")
 let inf = N
 let list 
 while (inf>1)
  {
    inf--;
    if (list==null)
        { list= inf;
  }
   else
    {list=list +" "+ inf
  }
}
  alert("les nombres inférieurs à " + N + ": " + list)
*/

 
  
 /*Boucles. ex3 Moyenne
 let moy
  let it=1
  let somme=0
  let numb = prompt ("Entrez nombre")
  numb = Number(numb)

  while (numb!=0&&numb!==null)
  { if (it==1)
       { 
      somme+=numb;
      it++;
      numb = prompt ("Entrez nombre");
      numb = Number(numb)
         }

   else {
       somme+=numb
       moy=somme/it;
       it++;
       alert("La somme egale à" + " " + somme + " " +"La moyenne egale à" + " " + moy )
       numb = prompt ("Entrez nombre")
       numb = Number(numb)
    } 

  }

*/

 /*Boucles. ex4 Tableau
let x=prompt("Entrez le nombre de multiples")
N=prompt("Entrez le nombre")
let  tableau=" ";
let resul
for (let i=1; i<=x; i++)
{ 
  resul=i*N;
  tableau+=i + "*" + N + "=" + resul + "\n";
 
}

alert(tableau)  */

/*Boucles. ex4 Voyelles
let mot=prompt("Entrez votre mot")
let i=mot.length
let compteur = 0
let it = 0 
let lettre
for (it=0;it<i;it++)
    { 
      lettre=mot.substring(it,it+1)
     
      if (lettre=="a"||lettre=="o"||lettre=="e"||lettre=="y"||lettre=="u"||lettre=="i")
        {
          compteur++;
        }
  }
alert("Le nombre de voyelles dans ce mot :" + compteur)


*/

/*let nom1=prompt("Entrez premier nombre")
let nom2=prompt("Entrez deuxieme nombre")
function myf(nom1,nom2)
{ result=nom1*nom2;
  

}
*/



/*
function produit(x, y) {
  let prod = x * y;
  let cube = x * x * x;
  
  afficheImg('src/img/papillon.jpg');
  document.getElementById("result").innerHTML = "Le cube de" + x + "est égale à"+ cube + "\n" + "Le produit de " + x + "et" + y + " " + "est égale à"+ prod

}


function afficheImg(image) {
  let imageElement = document.getElementById('papillon');
  
      imageElement.src = image;
  
}


let x = prompt("Entrez un nombre");
let y = prompt("Entrez un multiplicateur");

produit(x, y);

*/

/* ex1 fonctions
 function produit(x, y) {
  let prod = x * y;
  let cube = x * x * x;

 
  afficheImg('src/img/papillon.jpg');

  document.getElementById("result").innerHTML = "Le cube de " + x + " est égal à " + cube + "<br>" +
  "Le produit de " + x + " et " + y + " est égal à " + prod;

 
}


function afficheImg(image) {
  let с = document.getElementById('papillon');
  imageElement.src = image; 
}

let x = prompt("Entrez un nombre");
let y = prompt("Entrez un multiplicateur");

produit(x, y);
*/

/*ex 2 fonctions
let tap=prompt("Saisissez votre adresse au format " + "\n" + "Robert;dupont ;amiens ;80000");

strtok(tap,";", 3)

function strtok(str1, str2, n)
{ let donnee=str1.split(str2);
  let ville=donnee[n-1];
  document.getElementById("vill").innerHTML = ville;
  
}

*/

/*tablaeu
let n = prompt("Saisissez la taille d'un tableau");
let str1 = prompt("Saisissez les " + n + " valeurs, séparées par un point-virgule ;");
function strtok(str1, str2) {
    return str1.split(str2);
}

let mytab = strtok(str1, ";");

console.log(mytab);
let last=" ";
let count=0;
while(mytab.length >n)
{ last += mytab.pop();
  count++
}

if (count>0)
{
  alert("Vous avez introduit plus de valeurs que nécessaire. Les valeurs" + last + "n'ont pas été introduites dans le tableau.")
}

else {

}

document.getElementById("vill").innerHTML = mytab;
*/



