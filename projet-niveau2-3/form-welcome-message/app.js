let btnSubmit= document.querySelector(".btn-primary")
let documentSpan= document.querySelector(".js-username")
let valeurDuChampfirstname= document.forms.welcome.elements.prenom.value="";

function remplaceContenu (e){
    documentSpan.textContent=document.forms.welcome.elements.prenom.value
   e.preventDefault()
}
btnSubmit.addEventListener("click",remplaceContenu)

//preventDefault()  == stoper le comportement pat defaut d'un formulaire la submition 