"use strict";

//https://javascript.info/localstorage
// Objectif : Récupère dans cette variable le prénom actuellement stocké dans le localStorage

let prenomActuel=localStorage.getItem('prenomdelutilistaeur')

alert(prenomActuel);


"use strict";

// Dans cette variable, on demande à l'utilisateur son prénom.
let prenom = prompt("Comment tu t'appelles ?");

// Objectif : stocke le prénom le l'utilisateur dans le localStorage
localStorage.setItem('prenomdelutilistaeur',prenom);

"use strict";

// Objectif : Supprime le prénom actuellement stocké dans le localStorage
delete localStorage.prenomdelutilistaeur;

//visualiser les donnes stockes 
//https://developers.google.com/web/tools/chrome-devtools/storage/localstorage