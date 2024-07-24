const rangeInputR = document.getElementById('RangeRed');
const rangeValueR = document.getElementById('rangeValueR');
const rangeInputG = document.getElementById('RangeGreen');
const rangeValueG = document.getElementById('rangeValueG');
const rangeInputB = document.getElementById('RangeBlue');
const rangeValueB = document.getElementById('rangeValueB');
const couleurDiv = document.getElementById('couleur');


function updCol() {
   const r = rangeInputR.value;
   const g = rangeInputG.value;
   const b = rangeInputB.value;

   rangeValueR.textContent = r;
   rangeValueG.textContent = g;
   rangeValueB.textContent = b;

   
   couleurDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

rangeInputR.addEventListener('input', updCol);
rangeInputG.addEventListener('input', updCol);
rangeInputB.addEventListener('input', updCol);


