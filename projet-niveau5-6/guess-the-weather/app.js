"use strict";
let forms = document.forms.weatherForm
let ville = ['paris', 'lyon', 'lille', 'marsailles', 'nice', 'toulouse', 'nantes', 'Montpellier', 'Strasbourg', 'Bordeaux', 'Rennes', 'Toulon', 'Le Havre', 'Grenoble', 'Dijon','Reims','Angers','Limoges','Le Mans','Clermont-Ferrand','Brest','Aix-en-Provence','Tours','Amiens','Perpignan','Metz','Orléans','Nancy','Mulhouse','Caen','Dunkerque','Avignon',]
let documentCard = document.querySelector(".js-city")


let villeAll = Math.floor(Math.random() * ville.length);
let villeAleatoire = ville[villeAll]
documentCard.textContent = villeAleatoire




function loadMeteo(e) {
    e.preventDefault()
    let request = new XMLHttpRequest()
    let userTemperature = Number(forms.userTemperature.value)

    request.open('get', 'http://api.openweathermap.org/data/2.5/weather?q=' + villeAleatoire + '&lang=fr&appid=4568060360061c2a47d0739765e60402&units=metric');
    request.send();
    request.addEventListener('load', function () {
        if (request.status === 200) {
            console.log(request.response)

            let donneesMeteo = JSON.parse(request.response)
            
            console.log(donneesMeteo)
            console.log(Math.floor(donneesMeteo.main.temp))
            let temperatureVille =(Math.floor(donneesMeteo.main.temp))


            if (userTemperature === temperatureVille) {
                alert('Tu as trouvé 2 secondes après')
                villeAll = Math.floor(Math.random() * ville.length);
                villeAleatoire = ville[villeAll]
                documentCard.textContent = villeAleatoire//generer une autre ville aleatoire apres avoir trouver la bonne reponse 
               
               

            } else if (userTemperature < temperatureVille) {
                alert("Il fait plus chaud !")
            } else if (userTemperature > temperatureVille) {
                alert("Il faut plus froid !")
            }
            userTemperature = Number(forms.userTemperature.value="")//vider le champs de l'input
        }
    })
}
forms.addEventListener("submit", loadMeteo)
