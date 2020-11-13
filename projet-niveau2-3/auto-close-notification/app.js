let afficherNotification = document.querySelectorAll (".notification")


function affichage(){
    
    
    for (let element of afficherNotification){
        element.remove("notification")
        } 
  
}
setTimeout(affichage, 5000)
