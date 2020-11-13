
let btn=document.querySelectorAll(".btn-notification")

function removeclass(event){
    event.currentTarget.closest(".notification").remove("notification")
}
    
  
    for (let element of btn){
        element.addEventListener("click",removeclass)
        }  


