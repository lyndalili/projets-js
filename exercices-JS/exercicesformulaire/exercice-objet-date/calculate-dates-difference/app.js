"use strict";

let dateActuelle = new Date();
let dateDeNaissance = new Date(2000, 0, 20, 19, 45, 54);

// Dans la variable `difference`, calcule la différence entre la `dateDeNaissance` et la `dateActuelle`
let difference=(dateActuelle-dateDeNaissance)

//methode 2 a partir d'une fonction complexe :
/*function dateDiff(dateActuelle, dateDeNaissance )
{
  var ynew = datenew.getFullYear();
  var mnew = datenew.getMonth();
  var dnew = datenew.getDate();
  var yold = dateold.getFullYear();
  var mold = dateold.getMonth();
  var dold = dateold.getDate();
  var diff = datenew - dateold;
  if(mold > mnew) diff--;
  else
  {
    if(mold == mnew)
    {
      if(dold > dnew) diff--;
    }
  }
  return diff;
}*/
// Vérifie le résultat dans la console
console.log(difference);
