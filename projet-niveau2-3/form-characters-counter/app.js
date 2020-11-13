let documentCard=document.querySelector(".mb-4")
let btn=document.querySelector(".btn-primary")
let valeurDuChampCaractere= document.forms.charactersCounterForm.elements.texte.value=""


function remplireChamp(e){
    documentCard.textContent= ("Ce texte contient"+" " + document.forms.charactersCounterForm.elements.texte.value.length + " " + "caractères") 

    e.preventDefault()
}
btn.addEventListener("click",remplireChamp)
