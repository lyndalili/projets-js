let checkList =document.querySelectorAll(".checklist-item")


function removeList(event){
   event.currentTarget.classList.toggle("checklist-item-checked")
}
for (let element of checkList){
element.addEventListener("click", removeList)
}
