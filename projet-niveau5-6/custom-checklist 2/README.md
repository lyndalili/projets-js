# Projet "Checklist personnalisée"

## Objectif
- Crée un tableau vide Javascript que l'utilisateur va pouvoir remplir en envoyant le formulaire.
- Lorsqu'il clique sur le bouton `Mettre à jour l'affichage de la liste`, affiche chaque élément du tableau sous la forme d'un li dans le ul qui a la classe `js-list`
- Fais en sorte que lorsqu'une checkbox est cochée, la classe `text-decoration-line-through` soit rajoutée au li parent de la checkbox
- Fais en sorte que lorsqu'une checkbox est décochée, la classe `text-decoration-line-through` soit retirée du li parent de la checkbox
- Fais en sorte que l'utilisateur puisse supprimer un élément du tableau en cliquant sur le bouton `X`
- Fais en sorte que la liste soit automatiquement mise à jour lorsque l'utilisateur rajoute une tâche, sans avoir besoin de cliquer sur le bouton `Mettre à jour l'affichage de la liste`

## Aller plus loin
- Actuellement, à chaque fois que l'affichage de la liste est mise à jour, l'état "coché ou non coché" des tâches est perdu. Fais en sorte de conserver cette information dans le tableau : 
    - Pour cela, lorsque l'utilisateur ajoute une tâche, il faut stocker non pas simplement le nom de la tâche, mais un objet contenant le nom de la tâche ainsi que son état (cochée ou non).
    - Lorsque l'utilisateur coche/décoche une checkbox, il ne faut plus modifier les classes du li parent mais plutôt modifier l'objet correspondant à la tâche puis exécuter la fonction qui met à jour l'affichage de la liste
    - Dans la fonction qui met à jour l'affichage de la liste, il faut tenir compte de l'état de la tâche (cochée/non cochée)