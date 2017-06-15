// Fonction simple
function byTwo() {
    var result = parseInt(prompt('Donnez le nombre à multiplier par 2 :'));
    console.log(result * 2);
}

byTwo();

console.log('Vous en êtes à la moitié !');

byTwo();

// Fonction avec des arguments
function moar(first, second) {
    // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
	console.log('Votre premier argument : ' + first);
	console.log('Votre deuxième argument : ' + second);
}

moar(prompt('Entrez votre premier argument :'), 
	 prompt('Entrez votre deuxième argument :')
);

// Fonction avec un argument facultatif
function prompt2(text, allowCancel) {
	console.log(allowCancel);
    if (typeof allowCancel === 'undefined') { // Souvenez-vous de typeof, pour vérifier le type d'une variable
        allowCancel = false;
    }
    console.log(allowCancel);
    console.log(text);
}

prompt2(prompt('Entrez quelque chose :')); // On exécute la fonction seulement avec le premier argument, pas besoin du deuxième

// Fonction avec une valeur en retour
function sayHello() {
    return 'Bonjour !'; // L'instruction « return » suivie d'une valeur, cette dernière est donc renvoyée par la fonction
}

console.log(sayHello()); // Ici on affiche la valeur retournée par la fonction sayHello()

// Fonction anonyme affectée à une variable
var sayCoucou = function() {
	console.log('Coucou !');
};

sayCoucou(); // Affiche : « Bonjour ! »

// Fonction anonyme exécutée immédiatement
var test = 'noir'; // On crée une variable « test » contenant le mot « noir »

(function() { // Début de la zone isolée

    var test = 'blanc'; // On crée une variable du même nom avec le contenu « blanc » dans la zone isolée
  
    console.log('Dans la zone isolée, la couleur est : ' + test);

})(); // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

console.log('Dans la zone non-isolée, la couleur est : ' + test); // Le texte final contient bien le mot « noir » vu que la « zone isolée » n'a aucune influence sur le reste du code

