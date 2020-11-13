"use strict";
"use strict";
let forms = document.forms.checkListForm
let taches = forms.taches.value
let btn = document.querySelector(".btn")
let arrayChekList = []
let btnUpdateList = document.querySelector(".js-chick")
let ulList = document.querySelector(".js-list")
let btnCroix=document.querySelector(".btn-close")
let checkboxes= document.querySelector(".form-chek")
function choseCheckList(e) {
    e.preventDefault()
    arrayChekList.unshift(forms.taches.value)
    console.log(arrayChekList)
    createElement();
}


function createElement() {
   
    
    ulList.textContent="" // vider le ul pour ajouter les nouveau li 
    for (let taskName of arrayChekList) {
        let nouvelLi = document.createElement("li")
        ulList.appendChild(nouvelLi)
        nouvelLi.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")

        let nouvelLabel = document.createElement("label")
        nouvelLi.appendChild(nouvelLabel)//rajouter des li a la liste des ul 
    
        
        let nouvelinput = document.createElement("input")//cree un input 
        nouvelinput.classList.add("form-check-input", "mr-1")
        nouvelinput.setAttribute("type","checkbox")//chnager le input de text a chekbox
        nouvelinput.addEventListener('input', checktask)

        nouvelLabel.appendChild(nouvelinput)//ajouter linput au parent qui est le label 
        nouvelLabel.classList.add("flex-grow-1")

        let textnan= document.createTextNode(taskName)//ajouter du contenu text au label
        nouvelLabel.appendChild(textnan)
        

        

        let btnClose=document.createElement("button")//cree un btn 
        nouvelLi.appendChild(btnClose)//ajouter le btn dans le li
        btnClose.classList.add("btn-close", "flex-shrink-0")
//btnClose.setAttribute("type", "button")
//nouvelLi.appendChild(btnClose) ///mettre le boutton de type boutton pour ne pas quil senvoi le formulaire si on ajour un form au tour 

btnClose.addEventListener("click",deleteTasks )

    }


}
function deleteTasks(event){
    let tousLesLIi= Array.from(document.querySelectorAll("li"))
    let leli =event.currentTarget.closest("li")
    let positiondelatache=tousLesLIi.indexOf(leli)
    console.log(positiondelatache)
arrayChekList.splice(positiondelatache,1)
createElement()

}

function checktask(event){//sert a cibler la checkbok pour lui rajouter la class(decoration)
    console.dir(event.currentTarget.ckecked)
   if(event.currentTarget.checked===true){
    event.currentTarget.closest('li').classList.add (`text-decoration-line-through`);
   }else{ event.currentTarget.closest('li').classList.remove (`text-decoration-line-through`)

   }

}


btnCroix.addEventListener("click",deleteTasks)
btnUpdateList.addEventListener("click", createElement)
btn.addEventListener("click", choseCheckList)


//continuer quand on click sur checkbox une classe apparait 