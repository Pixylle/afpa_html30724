
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
 let list
 while (N>1)
  {
    N--;
    list=list +" "+ N
  }
  alert("les nombres inférieurs à N:" + list)*/


 
  
  let moy
  let it=0
  let somme
  let numb = prompt ("Entrez nombre")
  somme=numb
  numb = Number(numb)
  somme= Number(somme)
  it++;
  while (numb!=0&&numb !== "")
  { numb = prompt ("Entrez nombre")
    it++;
    somme==somme+numb
    moy=somme/it;
    alert("La somme egale à" + " " + somme + "\n" +"La moyenne egale à" + " " + moy )
    

  }

   