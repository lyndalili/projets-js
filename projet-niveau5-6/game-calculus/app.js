"use strict";
let forms=document.forms.calculusForm;
let documentCard1=document.querySelector(`.js-first-number`)
let documentCard2=document.querySelector(`.js-second-number`)
let champsSaisieNumber =document.forms.calculusForm.elements.userResponse.value
let documentCard=document.querySelector(".mb-4")
let nombreAleatoire= Math.floor(Math.random()*(10-5))+5
    let nombreAleatoire2= Math.floor(Math.random()*(10-5))+5

    documentCard1.textContent= (nombreAleatoire)
    documentCard2.textContent=(nombreAleatoire2)
function displayNumber(e){
    e.preventDefault()   
    
    let userResponse=Number (forms.userResponse.value)

  

if (userResponse==(nombreAleatoire+nombreAleatoire2)){
    documentCard.textContent =("bien joué!")
    nombreAleatoire= Math.floor(Math.random()*(10-5))+5
    nombreAleatoire2= Math.floor(Math.random()*(10-5))+5
    documentCard1.textContent= (nombreAleatoire)
    documentCard2.textContent=(nombreAleatoire2)

}else if(userResponse !=(nombreAleatoire+nombreAleatoire2)){
    documentCard.textContent =("Essaye encore !")
    
}
}
forms.addEventListener("submit",displayNumber)

