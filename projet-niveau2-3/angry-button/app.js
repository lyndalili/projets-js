"use strict"
let btnclick=document.querySelector(".btn-primary");
let clickcount= 0;
clickcount++
function numberClick(){
if (clickcount >0 && clickcount <= 3){
    alert("Tu ne sais pas lire ?")
    clickcount++
}else if  (clickcount >=4 && clickcount <=10) {
    alert ("Oh!! Arrête de cliquer")
    }

}
btnclick.addEventListener("click",numberClick)

