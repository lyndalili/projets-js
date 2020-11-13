"use strict";

// Dans cette variable se trouve la date actuelle
let dateActuelle = new Date();
let dateLocale = dateActuelle.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});

// Récupère dans la variable `heures` l'heure de la `dateActuelle`
let heures=dateActuelle.getHours()

// Vérifie dans la console que la variable `heures` contient bien l'heure de la `dateActuelle`
console.log(dateActuelle);
console.log(heures);

//http://www.trucsweb.com/tutoriels/javascript/tw276/