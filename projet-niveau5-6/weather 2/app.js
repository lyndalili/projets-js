//cours :https://www.w3schools.com/js/js_ajax_http.asp
//generer une adresse email: https://temp-mail.org/
//site meteao : https://openweathermap.org/current#data

let form = document.forms.weatherForm;
let documentCard = document.forms.weatherForm.elements.userCity.value
let usercity = form.userCity.value;
let cardTemperature = document.querySelector(".js-temperature")
let cardNameCity = document.querySelector(".js-city")
let tempsQilFait = document.querySelector(".js-info")
let tempsQilFaitDescription = document.querySelector(".js-info-description")
let tempsQilFaitIcone = document.querySelector(".js-pic")
let vent = document.querySelector(".js-wind-speed")
let humidite = document.querySelector(".js-humidity")
let precipitations = document.querySelector(".js-rain")
let neige=document.querySelector(".js-snow")
let date = document.querySelector(".js-date")
let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

let traductionFr= {
  clouds: "nuageux",
  clear: "ensoleillé",
  Rain: "pluie",
  Snow: "neige",
}

function loadMeteo(e) {
    e.preventDefault()
    let request = new XMLHttpRequest()
    let usercity = form.userCity.value;
    request.open('get', 'http://api.openweathermap.org/data/2.5/weather?q=' + usercity + '&lang=fr&appid=4568060360061c2a47d0739765e60402&units=metric');

    request.send();
    request.addEventListener('load', function () {
        let displaydate = new Date()
        let x = days[displaydate.getDay()]
        date.textContent = x + "," + displaydate.getHours() + "h" + displaydate.getMinutes();

        if (request.status === 200) {
            console.log(request.response) 


            let donneesMeteo = JSON.parse(request.response)
            cardTemperature.textContent = (Math.floor(donneesMeteo.main.temp))
            cardNameCity.textContent = donneesMeteo.name
            tempsQilFait.textContent = donneesMeteo.weather[0].main.traductionFr
            tempsQilFaitDescription.textContent = donneesMeteo.weather[0].description
            tempsQilFaitIcone.setAttribute("src", 'http://openweathermap.org/img/wn/' + donneesMeteo.weather[0].icon + '@2x.png')
            vent.textContent = donneesMeteo.wind.speed
            humidite.textContent = donneesMeteo.main.humidity
            
            
            if (donneesMeteo.hasOwnProperty("rain")) {

              precipitations.textContent = donneesMeteo.snow["1h"]
              neige.textContent = donneesMeteo.rain["1h"]
                console.log(donneesMeteo)

            }else {
                precipitations.textContent = (0)
                neige.textContent = (0)
                console.log(donneesMeteo)
            }
        } else {

            
            alert(" erreur!")
        }
    });
}

form.addEventListener("submit", loadMeteo)



/* wordpress boutstrap
let request= new XMLHttpRequest();//cree un requete
requestAnimationFrame.open('GET? 'http://adresse site') //configurer
{city}=la valeur du champs du formulaire 
{appi key}= mettre identiffiant

request.send(); //envoyer la fonction

//la reponse mettre un ecouteur devenement pour lafficher sur notre site 
request.addEventListener('load', mettreajourlameteo)//precesier quelle fonction on veut excuter lorsque la reponse nous parvient 
function mettreajourlameteo(){
  if (request.status===200){ //
    console.log(request.reponse)
  }else {
    alert ("erreur ")
  }
  
}*/