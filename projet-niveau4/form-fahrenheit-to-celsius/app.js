/*let formsend=document.forms.tempConverterForm;
let fahrenheit=document.forms.tempConverterForm.elements.fahrenheit.value;

let documentCard=document.forms.tempConverterForm.elements.tempCelsius;

function convertisseurTemperature(e){
    e.preventDefault()

    let fahrenheit=document.forms.tempConverterForm.elements.fahrenheit.value;
   
documentCard.value=(fahrenheit - 32) * 5/9;
}
formsend.addEventListener("submit",convertisseurTemperature)
*/





let fahrenheit=document.querySelector(".input-group")

function convertfahrenheitToCelsus(){
    console.log(this.value)
}
fahrenheit.addEventListener("keyup",convertfahrenheitToCelsus)
//https://www.youtube.com/watch?v=8YPFZMzGiJU