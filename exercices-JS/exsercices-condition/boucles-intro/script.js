//les boucles 

"use strict";
console.log
console.log
console.log
console.log
console.log
console.log
console.log
console.log
console.log
console.log

//au lieu de recrire plusieur fois on utilise une boucle 
for ( let i=0; i<10000; i++){
    console.log("bonjour");
}
 

"Nb" fonctionnement de la fonction for 
// le fonctionnement d'un for on debut par cree une variable i=0 le code dans les accolades s'excute 10000 fois i++ cest une accrementation , dans le cas ou  i est plus petit que 10000 il va continuer a sexcuter 
//dans le cas ou on veut faire afficher des numero on met console.log (i);

//si on veut aller jusqu'a 10000 on ecrit  for ( let i=0; i<=10000; i++){   console.log("hello");}

//initialisation let i=0
//verification de la condition  (i<10000) genre [i] si il est toujours inferieur a 10000
//si la consition est verifier execution du code   console.log("hello");
//une fois le code est verifier ca va incrementer  [i]
// reverifie la condition en excutant i en boucle tant quil est pas superieur a 10000



//excercices
/**
 * Créer un programme qui demande à l'utilisateur un nombre puis compte de 1 en 1 jusqu'à ce nombre.
 * Par exemple, quand l'utilisateur tape 3, effectuer une alerte qui dit "1" puis une alerte qui dit "2" puis une alerte qui dit "3"
 */

let calcul= Number (prompt("quel est ton chiffre?"));
for (let i=0 ; i <=calcul ; i++ ){
    alert (i);
}


/**
 * Créer un programme qui demande à l'utilisateur un nombre de départ et un nombre d'arrivée puis compte de 1 en 1 du nombre de départ jusqu'au nombre d'arrivé.
 * Par exemple, quand l'utilisateur tape 100 et 103, effectuer une alerte qui dit "100" puis une alerte qui dit "101" puis une alerte qui dit "102"
 */

let nmbrdepart= Number(prompt("nombre de depart?"));
let nmbrarriver=Number(prompt("nombre de d'arriver?"));

for (let i= nmbrdepart; i <=nmbrarriver; i++){
alert (i);
}

/**
 * Créer un programme qui demande un nombre puis affiche dans la console la table de multiplication correspondante (jusqu'à 10)
 * Par exemple, si l'utilisateur tape 5, afficher :
 * 0 x 5 = 0
 * 1 x 5 = 5
 * 2 x 5 = 10
 * 3 x 5 = 15
 * 4 x 5 = 20
 * 5 x 5 = 25
 * 6 x 5 = 30
 * 7 x 5 = 35
 * 8 x 5 = 40
 * 9 x 5 = 45
 * 10 x 5 = 50
 */


let multiplication  = Number (prompt("Entrer un chiffre"));
for (let i = 0; i <= 10; i++) {
alert (multiplication + " x " + i + " = "+ multiplication*i);
}

/**
 * Créer un programme qui permet à l'utilisateur d'obtenir des nombres aléatoires.
 * Par exemple, quand l'utilisateur demande 3 nombres aléatoires, le programme lui affiche 5, 20, 11 (trois nombres générés aléatoirement)
 */
let nmbrrandom= Number(prompt("donnez un nombre?"));
for(var i = 0; i < nmbrrandom; i ++){
alert ( Math.floor(Math.random() *50));
}

/**
 * Créer un programme qui demande à l'utilisateur 5 nombres puis lui affiche le nombre le plus grand.
 * Scénarios :
 * - Quand l'utilisateur tape les nombres 3 5 -10 9 5, le programme lui affiche 9
 */

let nmbr= Number(prompt("1er nombre?"));
let nmbr1= Number(prompt("2e nombre?"));
let nmbr2=Number(prompt("3e nombre?"));
let nmbr3= Number(prompt("4e nombre?"));
let nmbr4=Number(prompt("5 nombre?"));
{
alert (Math.max(nmbr, nmbr1,nmbr2,nmbr3, nmbr4));
}


/**
 * Créer un programme qui demande à l'utilisateur 5 nombres puis lui affiche le nombre le plus petit.
 * Scénarios :
 * - Quand l'utilisateur tape les nombres 3 5 -10 9 5, le programme lui affiche -10
 */

let nmbr= Number(prompt("1er nombre?"));
let nmbr1= Number(prompt("2e nombre?"));
let nmbr2=Number(prompt("3e nombre?"));
let nmbr3= Number(prompt("4e nombre?"));
let nmbr4=Number(prompt("5 nombre?"));
{
alert (Math.min(nmbr, nmbr1,nmbr2,nmbr3, nmbr4));
}


/**
 * Voici un tableau contenant des noms de couleur. À l'aide d'une boucle, afficher dans la console le nom de chaque couleur.
 */

const colors = ['rouge', 'bleu', 'vert', 'orange', 'violet', 'jaune'];


const colors = ['rouge', 'bleu', 'vert', 'orange', 'violet', 'jaune'];
for (const color of colors){
    alert(color);
}

/**
 * Voici un tableau contenant des noms de couleur. À l'aide d'une boucle, afficher dans la console le nombre de lettres que comporte chaque couleur :
 * La couleur rouge comporte 5 lettres
 * La couleur bleu comporte 4 lettres
 * ...
 */

const colors = ['rouge', 'bleu', 'vert', 'orange', 'violet', 'jaune'];

const colors = ['rouge', 'bleu', 'vert', 'orange', 'violet', 'jaune'];

const arrayLength = colors.length;
console.log (arrayLength)
for (var i = 0; i < arrayLength; i++) {
    alert (colors[i].length);
}

/**
 * Voici un tableau contenant les noms des planètes du système solaire. À l'aide d'une boucle, afficher dans la console le nom de chaque planète ainsi que sa position.
 * Exemple :
 * La planète Mercure est en position 0
 * La planète Vénus est en position 1
 * La planète Terre est en position 2
 * La planète Mars est en position 3
 * ...
 */


const colors = ['Mercure', 'Vénus', 'Terre', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune'];

for (i=0; i<colors.length;i++){
console.log(i);}




/**
 * Créer un programme qui permet à l'utilisateur de connaître les x premières lettres de l'alphabet
 * Scénarios :
 * - Quand l'utilisateur tape 5, le programme affiche a puis b puis c puis d puis e puis f
 * - Quand l'utilisateur tape 30, le programme lui affiche une erreur lui indiquant qu'il n'y a que 26 lettres dans l'alphabet
 * - Quand l'utilisateur tape un nombre négatif, le programme lui affiche une erreur lui indiquant qu'il faut donner un nombre positif compris entre 1 et 26
 * - - Quand l'utilisateur tape 0, le programme lui affiche une erreur lui indiquant qu'il faut donner un nombre positif compris entre 1 et 26
 */



const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let namberOfLetter= Number (prompt ("donne moi un numero"));

 if (namberOfLetter > 26 ){
    alert ("erreur 'il n'y a que 26 lettres dans l'alphabet'")
}
 if (namberOfLetter <=0 ){
    alert ("il faut donner un nombre positif compris entre 1 et 26")

}

else {
 for (i=0; i<namberOfLetter;i++){
 alert(alphabet[i]);
}
}


// le fonctionnement d'un for on debut par cree une variable i=0 le code dans les accolades s'excute 10000 fois i++ cest une accrementation , dans le cas ou  i est plus petit que 10000 il va continuer a sexcuter 
//dans le cas ou on veut faire afficher des numero on met console.log (i);

//si on veut aller jusqu'a 10000 on ecrit  for ( let i=0; i<=10000; i++){   console.log("hello");}

//initialisation let i=0
//verification de la condition  (i<10000) genre [i] si il est toujours inferieur a 10000
//si la consition est verifier execution du code   console.log("hello");
//une fois le code est verifier ca va incrementer  [i]
// reverifie la condition en excutant i en boucle tant quil est pas superieur a 10000



/**
 * Créer un programme qui permet d'obtenir de l'aide concernant l'utilisation des commandes de git. L'utilisateur doit pouvoir taper le nom d'une commande git, puis le programme lui affiche un message qui lui explique la commande.
 *
 * Par exemple :
 * - Quand l'utilisateur tape "git commit", le programme affiche "Cette commande permet d'effectuer un commit"
 * - Quand l'utilisateur tape une commande qui n'existe pas, le programme affiche "Oop's, je ne connais pas cette commande !"
 * 
 */




let git= (prompt("qu'elle est la commande git que vous cherchez?")); 


 if (git==="git configt"){
    alert("cette commande s'utilise pour configurer les préférences de l’utilisateur : son mail, l’algorithme utilisé pour diff, le nom d’utilisateur et le format de fichier etc. Par exemple, la commande suivante peut être utilisée pour définir le mail d’un utilisateur")
}

else if (git==="git init"){
    alert("Cette commande est utilisée pour créer un nouveau dépôt GIT" )
}

else if (git==="Git add"){
    alert("La commande git add peut être utilisée pour ajouter des fichiers à l’index. Par exemple, la commande suivante ajoutera un fichier nommé temp.txt dans le répertoire local de l’index" )
}

else if (git==="git clone"){
    alert("La commande git clone est utilisée pour la vérification des dépôts. Si le dépôt se trouve sur un serveur distant, utilisez" )
}
else if (git=== "git-commit"){
    alert("Cette commande permet d'effectuer un commit")
}

else if (git==="git status"){
    alert("La commande git status affiche la liste des fichiers modifiés ainsi que les fichiers qui doivent encore être ajoutés ou validés.")
}


else if (git==="git push"){
alert("Git push est une autre commandes GIT de base. Un simple push envoie les modifications locales apportées à la branche principale associée")
}

else if (git==="git chekout"){
    
   alert(" La commande git checkout peut être utilisée pour créer des branches ou pour basculer entre elles. Par exemple nous allons créer une branche")
}
else if (git==="git remote"){
alert ("La commande git remote permet à un utilisateur de se connecter à un dépôt distant. La commande suivante répertorie les dépôts distants actuellement configurés")
}

else if (git==="git pull"){
alert ("Pour fusionner toutes les modifications présentes sur le dépôt distant dans le répertoire de travail local, la commande pull est utilisée. ")}


else {
alert ("Oop's, je ne connais pas cette commande !")}



/**
 * À l'aide d'une boucle, afficher dans la console le nom de chaque fruit
 */

const fruits = ['Orange', 'Mangue', 'Clémentine', 'Kiwi', 'Banane', 'Pasteque', 'Fraise'];
for (i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}


 /**
 * À l'aide d'une boucle, afficher EN MAJUSCULES dans la console le nom de chaque fruit
 */
const fruits = ['Orange', 'Mangue', 'Clémentine', 'Kiwi', 'Banane', 'Pasteque', 'Fraise'];
for (i=0; i<fruits.length ;  i++){
    console.log(fruits[i].toUpperCase());
}


/**
 * À l'aide d'une boucle, afficher dans la console le nom de chaque fruit à l'envers !
 */

const fruits = ['Orange', 'Mangue', 'Clémentine', 'Kiwi', 'Banane', 'Pasteque', 'Fraise'];
for (i=0; i<fruits.length ;  i++){
    console.log(fruits[i].split("").reverse().join(""))
}

/**
 * À l'aide d'une boucle, afficher dans la console le nom de chaque language
 */

const languages = ['Javascript', 'HTML', 'CSS', 'Java', 'PHP', 'C#', 'Python'];
for (i=0; i<languages.length;  i++){
    console.log(languages[i])
}


/**
 * À l'aide d'une boucle, afficher dans la console le nom de chaque language, à condition qu'il contienne plus de 3 lettres
 */
const languages = ['Javascript', 'HTML', 'CSS', 'Java', 'PHP', 'C#', 'Python'];
for (i=0; i<languages.length;  i++){
    if (languages[i].length >3){
        console.log(languages[i]) 
}
}

//Lorsque l'utilisateur clique sur le bouton, afficher dans la card le nom d'un fruit de manière aléatoire.

let fruits = ['kiwi', 'poire', 'clémentine', 'orange', 'fraise', 'pasteque', 'mangue', 'banane'];
let card= document.querySelector (".js-card")
let btnashow=document.querySelector (".js-btn")

function changesFruits(){
let fruitsAll=Math.floor(Math.random()*fruits.length);
let fruitsAleatoires=fruits[fruitsAll]
card.textContent=fruitsAleatoires
}
btnashow.addEventListener("click",changesFruits);
changesFruits();

/* la boucle while (condition) tant que la condition est resecter le code et excuté exple tant que (vrai ) est vrai le code va sexcuter a linfini 
let conteur =0;
while ( conteur<1000){
    console.log (conter);
}

on a pas chnager la valeur de conteur en ne pas ajouter i++ du coup et a linfini sans i++ il sera tjr inferieur a 1000 

par contre si on a met conter = conter+100 ca va excuer a chaque fois 100 + 100+ 100 jusqua ask le code sois superieur a 10000 il sarret 
verfier la condition si a exemple ( while(conter<100) est resct ca va excuté partie b (conter= conter+100)
si ell est pas respecter ca va continuer 
ca fera ( ab ab ab ab ab )(si la condition a est verifier on excute le code b)

le boucle do wile ca exucute le code vant de verifier la condition 

/* definition function cest n bloque de code qui sexcute quand on lui donne  une function */

"exercices boucles"

/**
 * Etape 1 : Incrémenter la température d'un nombre aléatoire
 * Etape 2 : Faire en sorte que cette incrémentation soit répétée jusqu'à ce que la température dépasse 100
 */

let temperature =0;

while(temperature <100){
    temperature=temperature +Math.random();
    console.log(temperature)
}





let temperature = 0; 

// Ne pas modifier le code au dessus de cette ligne

/**
 * Le code suivant augmente la température de 20 puis l'affiche à l'aide d'une alerte.
 * Faire en sorte que l'execution de ces lignes soit répétée tant que la température est strictement inférieure à 100
 */
while (temperature < 100){
  temperature = temperature + 20;
alert('La température vaut maintenant ' + temperature);}



les function

"use strict";

/**
 * Créer une fonction nommée messageDeBienvenue qui, lorsqu'on l'execute, nous affiche les alertes suivantes : "Bonjour visiteur !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 */
function messageDeBienvenue(){
 alert ("bonjour visiteur!");
 alert ("bonjour visiteur!");
 alert ("bonjour visiteur!");
}
messageDeBienvenue(); 
messageDeBienvenue(); 


explications
/*donner un nom en ecrivant function messageDeBienvenue(){} on peut lescuter 
une fois en ecrivant  messageDeBienvenue();   en bas des accolade si en ajoute un autre messageDeBienvenue();  ca excute deux fois 



exercices
"use strict";

/**
 * Créer une fonction nommée messageDeBienvenue qui, lorsqu'on l'execute, nous affiche les alertes suivantes : "Bonjour visiteur !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 *
 * Créer une fonction nommée aurevoir, qui lorsqu'on l'execute, nous affiche l'alerte suivante : "Aurevoir !"
 *
 * Executer la fonction messageDeBienvenue puis la fonction aurevoir
 */


function messageDeBienvenue(){
    alert ("bonjour visiteur!");
    alert ("Bienvenue sur mon super site web");
    alert ("J'espère qu'il va te plaire")
   }
   messageDeBienvenue(); 
   
   function aurevoir(){
    alert (" Aurevoir!")
   }
   aurevoir();


   
/**
 * Créer une fonction nommée messageDeBienvenue prenant en paramètre un prénom. Lorsqu'on execute la fonction, elle nous affiche les alertes suivantes : "Bonjour {prenom} !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 * Par exemple,
 * messageDeBienvenue("John") doit afficher les alertes : "Bonjour John !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 */

function messageDeBienvenue(prenom){
    alert ("bonjour" + prenom );
    alert ("Bienvenue sur mon super site web");
    alert ("J'espère qu'il va te plaire")
   }
   messageDeBienvenue(" John"); 


   /**
 * Créer une fonction nommée messageDeBienvenue prenant en paramètre un prénom, dont la valeur par défaut est "visiteur". Lorsqu'on execute la fonction, elle nous affiche les alertes suivantes : "Bonjour {prenom} !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 *
 * Par exemple,
 *
 * messageDeBienvenue("John") doit afficher les alertes : "Bonjour John !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 *
 * messageDeBienvenue() doit afficher les alertes : "Bonjour visiteur !" puis "Bienvenue sur mon super site web" puis "J'espère qu'il va te plaire"
 */

function messageDeBienvenue(prenom = " visiteur"){
    alert ("bonjour" + prenom );
    alert ("Bienvenue sur mon super site web");
    alert ("J'espère qu'il va te plaire")
   }
   messageDeBienvenue(" John"); 
   messageDeBienvenue()

   /*comment cree une function 
   exemple : function airecarre (longeurducote){
       let aire = longeurducote * longeurducote;

    return air;

   }
   console.log (aircarre(5));

....la fonction return air retourne le resultat du calclule de la variable aire ....



exercices: 
/**
 * Créer une fonction qui prend en paramètre le rayon d'un cercle et retourne son aire arrondie à 2 chiffres après la virgule.
 *
 * Par exemple,
 * 
 * circleArea(40) doit retourner 5026.54
 */

function circleArea (largeurDuCercle){
    let aire = 2 * largeurDuCercle * 3.14;
    return aire;
}
console.log(circleArea(40))


/**
 * Créer une fonction qui permet d'obtenir une température en °C (Celsius) à partir d'une température en °F (Fahrenheit)
 * 
 * Par exemple,
 *
 * fahrenheitToCelsius(50) doit retourner 10
 */

function circleArea (largeurDuCercle){
    let aire =  largeurDuCercle *2 * Math.PI ;
    return aire;
  
}
let rayon = Number (prompt ( "le reyon d'un cercle?"))
alert (circleArea(rayon))


/**
 * Créer une fonction qui permet d'obtenir une température en °C (Celsius) à partir d'une température en °F (Fahrenheit)
 * 
 * Par exemple,
 *
 * fahrenheitToCelsius(50) doit retourner 10
 */

function fahrenheitToCelsius (temperatureCelsius){
    let temperature =  (temperatureCelsius - 32) * 5/9;
    return temperature;
    }
    
    console.log(fahrenheitToCelsius (50));
    /**
 * Créer une fonction qui permet d'obtenir une température en °C (Celsius) à partir d'une température en °F (Fahrenheit)
 * 
 * Par exemple,
 *
 * fahrenheitToCelsius(50) doit retourner 10
 *
 * Puis créer un programme qui demande à l'utilisateur une température en °F et lui affiche cette température convertie en °C, en utilisant la fonction créée précédemment.
 */

    function fahrenheitToCelsius (temperatureCelsius){
        let temperature =  (temperatureCelsius - 32) * 5/9;
        return temperature;
        }
        let fahrenheit = Number (prompt ( "une temperature fahrenheit?"))
        alert (fahrenheitToCelsius (fahrenheit));
      
      /**
 * Créer une fonction qui retourne la quantité de monnaie à rendre (arrondie à 2 chiffres après la virgule) à partir d'un montant à payer et d'un montant déjà payé.
 *
 * Exemple : 
 *
 * calculerLaMonnaie(130, 140) doit retourner 10
 * calculerLaMonnaie(80.59, 100) doit retourner 19.41
 *
 * Puis, demander à l'utilisateur le montant à payer et le montant déjà payer et lui afficher la quantité de monnaie à rendre, en se servant de la fonction créée précédemment.
 *
 */
        http://icps.u-strasbg.fr/~genaud/courses/webtech/js/js.pdf


        function calculerLaMonnaie (returnMonney , monneygive){
            let monney = (monneygive - returnMonney )
            return monney;
            }
            console.log(calculerLaMonnaie(130,140))
          


           /* Puis, demander à l'utilisateur le montant à payer et le montant déjà payer et lui afficher la quantité de monnaie à rendre, en se servant de la fonction créée précédemment.
            *
            */
            function calculerLaMonnaie (returnMonney , monneygive){
                let monney = (monneygive - returnMonney )
                return monney;
                }
                let montantPayer= Number (prompt ( "le montant à payer"));
                let montantDejaPayer= Number (prompt ( "le montant deja payer"))
                alert (calculerLaMonnaie(montantPayer,montantDejaPayer))


                /*/**
 * Créer une fonction qui prend en paramètre une chaîne de caractères et retourne cette même chaîne de caractères à l'envers.
 *
 * Exemple : 
 *
 * reverseString('abcdef') doit retourner 'fedcba'
 *
 */

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("abcdef"));

/*demander a l'utimlisateur*/

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  let string = (prompt("donne moi un mot"))
  alert(reverseString(string));

/**
 * Créer une fonction qui retourne les x premiers nombres d'une chaîne de caractères.
 *
 * Par exemple : 
 *
 * truncate('abcdefghijklmop', 5) doit retourner 'abcde'
 *
 */
function chaineDeCaracteres(str, number) {

    return (str.substr(0,number));
}
console.log(chaineDeCaracteres("abcdefggfgf", 5));

 /**
 * Créer une fonction qui retourne les x premiers nombres d'une chaîne de caractères.
 *
 * Par exemple : 
 *
 * truncate('abcdefghijklmop', 5) doit retourner 'abcde'
 *
 * Puis, demander à l'utilisateur un texte ainsi que le nombre de caractères qu'il souhaite conserver. En se servant de la fonction créée précédemment, afficher uniquement les x premiers caractères du texte que l'utilisateur a donné.
 *
 */

function chaineDeCaracteres(str , number) {

    return (str.substr(0,number));
}
let word=  (prompt ( "donne moi un mot"))
let nmb= Number (prompt ( "donne moi un nombre"))
alert (chaineDeCaracteres(word, nmb));





//les objet 

//exercices 

//// afficher l'objet en entier ; puis la marque puis la couleur 

let voiture = {
    marque: "audi",
    couleur: "red",
    nombredeporte: 5 ,
    option: ["toit ouvrant",  "clim", "cam de recule"], 
 }
    console.log (voiture) 
 

    // afficher la marque

let voiture = {
    marque: "audi",
    couleur: "red",
    nombredeporte: 5 ,
    option: ["toit ouvrant",  "clim", "cam de recule"], 
 }
    console.log (voiture.marque) 


    // afficher la couleur 

let voiture = {
    marque: "audi",
    couleur: "red",
    nombredeporte: 5 ,
    option: ["toit ouvrant",  "clim", "cam de recule"], 
 }
    console.log (voiture.couleur) 


    // afficher le 2e notion de option  

let voiture = {
    marque: "audi",
    couleur: "red",
    nombredeporte: 5 ,
    option: ["toit ouvrant",  "clim", "cam de recule"], 

 }
    console.log (option.length()) 
 
    



    //excuter une function dans un objet 
    let voiture = {
        marque: "audi",
        couleur: "red",
        nombredeporte: 5 ,
        option: ["toit ouvrant",  "clim", "cam de recule"],
        
        klaxonner : function(){
          alert ("bip");
     }
     }
     voiture.klaxonner(); 









     "use strict";

let colors = ['red', 'blue', 'yellow'];
let btnBalloon=document.querySelectorAll(".balloon")
let cardUtilisateur=document.querySelector(".js-cardFirst")
let cardOrdinateur=document.querySelector(".js-cardSecond")

function choixballoon (event){
  if (event.currentTarget.getAttribute("data-color")=== "red"){
    cardUtilisateur.textContent="Tu as choisi un ballon rouge";
    
}else if (event.currentTarget.getAttribute("data-color")==="blue"){
  cardUtilisateur.textContent="Tu as choisi un ballon blue";
}else if (event.currentTarget.getAttribute("data-color")==="yellow"){
  cardUtilisateur.textContent="Tu as choisi un ballon jaune";
}
}
for (let element of btnBalloon){
  element.addEventListener("mouseover", choixballoon);
 element.addEventListener("mouseover",arrayColors);
}

function arrayColors(event){
  
  let colorsAll=Math.floor(Math.random()*colors.length);
  let colorsAleatoires=colors[colorsAll]
  //array est recuperer dans une variable 
  
  if (event.currentTarget.getAttribute("colors")==="red"){ 
 cardOrdinateur.textContent= "L'ordinateur a choisi un ballon rouge";
 }else if (event.currentTarget.getAttribute==="blue"){
  cardUtilisateur.textContent="L'ordinateur a choisi un ballon blue"; 
   }else if (event.currentTarget.getAttribute("data-color")==="yellow"){
  cardUtilisateur.textContent="L'ordinateur a choisi un ballon jaune";
   }
}
   
arrayColors();







le texte a revoir a la maison 

let colors = ["red", "blue", "yellow"];

let btnBalloon = document.querySelectorAll(".balloon");
let cardUtilisateur = document.querySelector(".js-cardFirst");
let cardOrdinateur = document.querySelector(".js-cardSecond");

function choixballoon(event) {
  if (event.currentTarget.getAttribute("data-color") === "red") {
    cardUtilisateur.textContent = "Tu as choisi un ballon rouge";
  } else if (event.currentTarget.getAttribute("data-color") === "blue") {
    cardUtilisateur.textContent = "Tu as choisi un ballon blue";
  } else if (event.currentTarget.getAttribute("data-color") === "yellow") {
    cardUtilisateur.textContent = "Tu as choisi un ballon jaune";
  }
}
for (let element of btnBalloon) {
  element.addEventListener("mouseover", choixballoon);
  element.addEventListener("mouseover", arrayColors);
}

/*function arrayColors(event) {
  let colorsAll = Math.floor(Math.random() * colors.length);
  let btnBalloon = document.querySelectorAll(".balloon");
  let cardUtilisateur = document.querySelector(".js-cardFirst");
  let cardOrdinateur = document.querySelector(".js-cardSecond");*/

  function arrayColors(event) {
    
    let colorsAll = Math.floor(Math.random() * (colors.length - 1));
    let colorsAleatoires = colors[colorsAll];
    
    if (colors[colorsAll] === "red") {
      cardOrdinateur.textContent = "L'ordinateur a choisi un ballon rouge";
    } else if (colors[colorsAll] === "blue") {
      cardUtilisateur.textContent = "L'ordinateur a choisi un ballon blue";
    } else if (colors[colorsAll] === "yellow") {
      cardUtilisateur.textContent = "L'ordinateur a choisi un ballon jaune";
    }
  }
  for (let element of btnBalloon) {
    
    element.addEventListener("click", arrayColors);
  }

arrayColors();