# Projet "Devine le temps qu'il fait !"

## Objectif
- Génère un nom de ville (parmi une liste de villes prédéfinies) pour laquelle l'utilisateur va devoir deviner la température qu'il fait actuellement là-bas.
- Le nom de la ville doit s'afficher dans l'élément ayant la classe `js-city`
- Lorsque l'utilisateur envoie le formulaire, effectue une requête HTTP vers une API permettant de récupérer la température actuelle de la ville. Une fois la réponse température obtenue, arrondie là pour obtenir un nombre entier puis compare là à la température que l'utilisateur a tapée :
    - Si l'utilisateur a trouvé la bonne température, affiche un message lui indiquant qu'il a trouvé ! 2 secondes après, modifie le nom de la ville dont il faut deviner la température.
    - Sinon, si la bonne température est plus élevée que celle qu'il a proposée, affiche "Il fait plus chaud !"
    - Sinon, si la bonne température est moins élevée que celle qu'il a proposée, affiche "Il faut plus froid !"

## Aller plus loin
- Entre le moment où l'utilisateur envoie le formulaire et le moment où la réponse à la requête HTTP est reçue, affiche lui l'animation de chargement (fais apparaître / disparaître l'élément ayant la classe `js-loading` aux bons moments).