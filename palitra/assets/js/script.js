
const InprangeR=document.getElementById("RangeRed");
const InpvalR=document.getElementById("rangeValueR");
const InprangeG=document.getElementById("RangeGreen");
const InpvalG=document.getElementById("rangeValueG");
const InprangeB=document.getElementById("RangeBlue");
const InpvalB=document.getElementById("rangeValueB");
const divcoul=document.getElementById("couleur");


function Changecol (){
const r = InprangeR.value;
const g = InprangeG.value;
const b = InprangeB.value;

divcoul.style.backgroundColor =`rgb(${r},${g},${b})`;

InpvalR.textContent= r;
InpvalG.textContent = g;
InpvalB.textContent = b;

}

InprangeR.addEventListener('input',Changecol);
InprangeG.addEventListener('input',Changecol);
InprangeB.addEventListener('input',Changecol);