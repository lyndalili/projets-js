//les conditions en js//


/**
 * Créer un programme qui demande à l'utilisateur son âge et lui affiche s'il est majeur ou mineur
 */

"use strict";

let result= Number (prompt ( "ton age?"))

if (result <=18){
  alert( "tu es mineur")
}
else {
  alert("tu es majeur")
}


//**
 * Créer un programme qui demande à l'utilisateur son âge puis lui affiche à quelle étape de la vie il se trouve.
 * - Lorsque l'âge est strictement inférieur à 0, afficher "Pas encore né"
 * - Lorsque l'âge est inférieur ou égal à 12, afficher "Enfance"
 * - Lorsque l'âge est strictement inférieur à 18, afficher "Adolescence"
 * - Lorsque l'âge est supérieur ou égal à 18, afficher "Vie adulte"
 *//

let result= Number (prompt ( "ton age?"))

if (age <=0){
  alert( "tu es pas encore né")
}
  
else if (age <=14){
  alert( "enfant")
}
else if (age =>15){
  alert("adolescence")
}
   
    else if (age >=18){
  alert( "vie adulte")
    }



 /** Créer un programme qui demande à l'utilisateur de répondre par oui ou par non à ces 3 questions :
* Avez-vous votre billet d'avion ?
 * Êtes-vous en retard ?
 * Êtes-vous le pilote de l'avion ?
 *
 * Après avoir obtenu les réponses à ces questions, afficher à l'utilisateur l'un des deux messages suivant :
 * - Bienvenue à bord !
 * - Nous sommes désolé, vous ne pouvez pas monter à bord de l'avion.
 */  
//

"use strict";

let billet= (prompt ( " Avez-vous votre billet d'avion ?"))
let retard= ( prompt ( "Êtes-vous en retard ?"))
let pilote= ( prompt("Êtes-vous le pilote de l'avion ?"))

 if ( billet==="oui" && retard=== "non" ||  pilote === " oui" ){
   alert ( "Bienvenue à bord !")
 }
else {
  alert("Nous sommes désolé, vous ne pouvez pas monter à bord de l'avion.")


  /**
 * Créer un programme qui demande à l'utilisateur 2 nombres et lui affiche le plus grand des deux
 */
"use strict";
let v1= Number (prompt("quel est votre numero?"));
let v2= Number(prompt(" quel est votre autre numero?"))

if ( v1 > v2 ) {
   alert ( v1 )
}

else  {
   alert ( v2 )
}

/**
 * Créer un programme qui demande à l'utilisateur le temps qu'il fait puis lui affiche un conseil adapté
 */

"use strict";
let wether=  (prompt("quel temps fait-il?"));

if ("soleil"){
  alert( "bien s'hydrater!")
  }

if ("pluie"){
  alert ("ne pas oublier le parapluie!" )
}

if("froid" ){
  alert (" bien se couvrir!")
}

if ("neige"){
  alert (" pneus neige a privilegier")
}



/**
 * Créer un programme qui demande du texte à l'utilisateur puis lui affiche ce même texte mais à l'envers. Le programme doit afficher un message supplémentaire pour indiquer à l'utilisateur si le texte qu'il a entré est un palindrome ou non.
 */
let  m = prompt("commentaire",);

alert (m.split("").reverse().join(""));

let textreversed= (m.split("").reverse().join(""));

if (m === textreversed) 
    alert (m + ' est un palindrome');

else {
    alert (textreversed + ' n\'est pas un palindrome');
}



