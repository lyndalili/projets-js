let forms=document.forms.ageCalculatorForm;

let documentCard=document.querySelector(".mb-4")

function displayAge(e){
    e.preventDefault() 
   
    let varBirthYear=forms.birthyear.value
    let dateActuelle = new Date()
    let annee= dateActuelle.getFullYear()
    let diff = annee - varBirthYear;
    new Date(diff);
    if ( varBirthYear < 0 || varBirthYear> annee) {
        documentCard.textContent = ('Âge incorrect !') 
        documentCard.classList.add(`alert-danger`)

    } else { ( varBirthYear > 0 || varBirthYear < annee)
        documentCard.textContent = ('tu as '+ " "+ diff) 
        documentCard.classList.remove(`alert-danger`)
}
}
forms.addEventListener("submit",displayAge )
 

