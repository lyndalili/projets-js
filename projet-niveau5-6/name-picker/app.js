"use strict";
let forms=document.forms.ageCalculatorForm;
let btn=document.querySelector(".btn")
let divCard=document.querySelector(".js-result")
let arrayFisrtName= []

function choseFirstName(e){
    e.preventDefault()
    arrayFisrtName.unshift(forms.firstname.value)
console.log(arrayFisrtName)
}

function displayalAatoire(){
   
    let nombreAleatoire= arrayFisrtName [Math.floor(Math.random()*arrayFisrtName.length)]
   
    divCard.textContent=nombreAleatoire
}
btn.addEventListener("click",displayalAatoire)
forms.addEventListener("submit",choseFirstName)
