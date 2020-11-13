let btn=document.querySelector(".btn-primary")
let valeurDuChamAge=document.forms.welcome.elements.age.value=""
let documentCard=document.querySelector(".mb-4")

function displayAge(e){
    e.preventDefault()  
    if (valeurDuChamAge <18){
    documentCard.textContent="tu es mineur!"
    
}else if (valeurDuChamAge >18){
documentCard.textContent="tu es majeur!"
}

}

btn.addEventListener("click",displayAge)