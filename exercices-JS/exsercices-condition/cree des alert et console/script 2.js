//cree des alerte 
// Step 1 : Enable strict mode

"use strict";
/**
 * Part 1 : Escaping characters

 */


console.log("*** PART 1 : Escaping characters ***");

// Display this sentence in the console : Today I'm learning the Javascript Language

// Display this sentence in the console : The teacher said that "Today we are starting to learn the Javascript Language"

// Display this sentence in the console : The teacher said that "Today we're starting to learn the Javascript Language"

let text = "today I\'m learning the Javascript Language";
console.log(text);


let textTeacher = "The teacher said that \"Today we are starting to learn the Javascript Language\"";
console.log(textTeacher);


let lastText = "The teacher said that \"Today we're starting to learn the Javascript Language\"";
console.log(lastText);


/**
 * Part 2 : String methods
 */
console.log("*** PART 2 : String methods ***");

// Ask the user his name and then make an alert telling him the number of characters in his name

// Ask the user a sentence and then make an alert with this same sentence all in uppercase and followed by some exclamation points

Let sentence =« prompt(‘donne moi une phrase’);
Alert (sentence.toUpperCase() + ‘ !!!’);
// Ask the user his name and then make an alert telling him the first and last characters of his name, in uppercase.
  
//var userName = prompt("what is your name?");
//alert(userName);

var username = prompt("what is your name ? " );
alert (« votre prenomcomtien » username.length « de lettres »);


var username = prompt("what is your name ? " );
alert (username.charAt(0).toUpperCase()+ username.slice(1)); 
alert (username.slice(-1).toUpperCase());

Ou 
Let sentence = prompt(‘donne moi une phrase’);
Alert (sentence.toUpperCase() + ‘ !!!’)

//return string.charAt(0).toUpperCase() + string.slice(1);
/**
 * Part 3 : Backticks
 */
console.log("*** PART 3 : Backticks ***");

/*
Display the following HTML code in the console :

<article>
    <h1>Hello World</h1>
    <p>Lorem ipsum doesn't sit amet, consectetur adipiscing elit. In est ex, placerat eget est nec, mollis fringilla est. In tincidunt ornare enim sit amet molestie. Fusce faucibus bibendum ornare.</p>
    <a href="#">Read more</a>
</article>
*/
console.log(2 + 5);



//conditions
//Créer un programme qui demande à l'utilisateur sa taille en cm puis lui dit s'il est grand ou petit

let mesure= Number (prompt("combien mesurez-vous en cm?"));

if (mesure >= 160){
  alert( "vous-etes petit !")
  }else{
      ("vous etes grand!")
  }


//   Créer un programme qui demande à l'utilisateur sa taille en cm puis lui dit s'il est très petit, petit, grand ou très grand
  let mesure= Number (prompt("combien mesurez-vous?"));

if (mesure <= 130 ) {
   alert( "vous-etes tres petit !")
  }else if  ( mesure <=160){
    alert ("vous etes petit!")
  }else if (mesure <180){
   alert ("vous etes grand!")
}else if ( mesure >=180){
  alert ( "vous etes tres grand!")
}



// Step 1 : Enable strict mode

/**
 * Part 1 : Display in the console the result of the following operations :
 */ 
console.log('** PART 1 : Operations **');

// 5 plus 2

// 10 minus 3

// 12 divided by 2

// 20 multiplied by 10

// 2.5 plus 2

// 5 power 2

// Remainder of 10 divided by 3

"use strict"; 



console.log(5+2);
console.log(10-3);
console.log(12/2);
console.log(20*2);
console.log(2.5+2);
console.log(5**2);
console.log(10%3);

/**
 * Part 2 : Increment and decrement
 */ 
console.log('** PART 2 : Increment and decrement **');

// Create a variable named 'counter' containing the value 10


// Increment the 'counter' variable and display the result in the console.


// Increment the 'counter' variable again but by using a different operator and display the result in the console.


// Increment the 'counter' variable again but by using another different operator and display the result in the console.


// Decrement the 'counter' variable and display the result in the console.


// Decrement the 'counter' variable again but by using a different operator and display the result in the console.


// Decrement the 'counter' variable again but by using another different operator and display the result in the console.


let counter =10;
counter++

console.log(counter); 

counter--

console.log(counter); 


              
/**
 * Part 3 : Division and multiplication
 */
console.log('** PART 3 : Division and multiplication **');

// Mutiply the 'counter' variable by 2 and display the result in the console


// Mutiply the 'counter' variable again by 2 but by using a different operator and display the result in the console


// Divide the 'counter' variable by 2 and display the result in the console


// Divide the 'counter' variable again by 2 but by using a different operator and display the result in the console


let counter=20;
counter++; //21
counter=counter +1 
