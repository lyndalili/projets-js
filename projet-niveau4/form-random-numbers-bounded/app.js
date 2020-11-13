"use strict";
let btn=document.forms.tempConverterForm;
let documentCard= document.querySelector (".alert-success")

let valeurDuChampMinimum= document.forms.tempConverterForm.elements.minimum.value=""; 

let valeurDuChampMaximum= document.forms.tempConverterForm.elements.maximum.value=""; 

function genererNumberAleatoire(e){
    e.preventDefault() 
    let valeurDuChampMinimum= document.forms.tempConverterForm.elements.minimum.value; 

    let valeurDuChampMaximum= document.forms.tempConverterForm.elements.maximum.value; 
    

    documentCard.textContent = Math.floor(Math.random()*(valeurDuChampMaximum-valeurDuChampMinimum))+valeurDuChampMinimum
}

btn.addEventListener("submit",genererNumberAleatoire)