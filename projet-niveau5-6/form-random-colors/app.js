let forms= document.forms.colorForm;
let documentCard=document.querySelector(".js-color")
let arrayColors = ['white', 'black', 'red','green', 'blue','yellow', 'violet','orange','grey','brown', 'pink' ]



function colorAleatoire(e){
e.preventDefault() 
let colorsAll=Math.floor(Math.random()*arrayColors.length);
let colorsAleatoires=arrayColors[colorsAll]

documentCard.textContent=colorsAleatoires
}

forms.addEventListener("submit",colorAleatoire)