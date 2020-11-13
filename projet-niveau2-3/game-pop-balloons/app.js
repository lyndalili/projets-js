let allBalloons= document.querySelectorAll(".balloon")

function balloonsHidden(event){
event.currentTarget.classList.add(`balloon-hidden`)
//event.currentTarget.setAttribute("src", `assets/pop.wav`)
}
for (let element of allBalloons){
    element.addEventListener("click",balloonsHidden)
}

//documentation pour ajouter le son 
//https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio