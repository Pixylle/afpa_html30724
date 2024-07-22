let x = prompt("Entrez votre number");
TableMultiplication(x)



function TableMultiplication(x) {
    var myTableau = [];  

    for (i=1; i<10; i++) {
        myTableau.push(x + "*" + i + "=" + x*i);  

    }
    alert(myTableau.join('\n'));



}