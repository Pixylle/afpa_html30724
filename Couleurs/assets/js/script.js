
function Changecoul(butt) {
     var chang=document.getElementById("couleur");
    chang.className = "";
    chang.classList.add(butt.className)
 console.log(chang.className)
}