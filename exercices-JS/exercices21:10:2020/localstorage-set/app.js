"use strict";

// Dans cette variable, on demande à l'utilisateur son prénom.
let prenom = prompt("Comment tu t'appelles ?");

// Objectif : stocke le prénom le l'utilisateur dans le localStorage
localStorage.setItem('prenomdelutilistaeur',prenom);


