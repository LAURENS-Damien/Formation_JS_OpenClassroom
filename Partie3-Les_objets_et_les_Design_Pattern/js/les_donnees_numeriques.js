/*------------------------------------------- L'objet Math -------------------------------------------*/
// Les propriétés
console.log(Math.PI); // Affiche la valeur du nombre pi
console.log(Math.E); // Affiche la valeur du nombre d'Euler

// Les méthodes
// Arrondir au plus grand entier inférieur ou égal à la valeur passée en paramètre (grâce à floor())
Math.floor(33.15); // Retourne : 33
Math.floor(33.95); // Retourne : 33
Math.floor(34); // Retourne : 34

// Arrondir au plus petit entier supérieur ou égal à la valeur passée en paramètre (grâce à ceil())
Math.ceil(33.15); // Retourne : 34
Math.ceil(33.95); // Retourne : 34
Math.ceil(34); // Retourne : 34

// Faire un arrondi traditionnel (grâce à round())
Math.round(33.15); // Retourne : 33
Math.round(33.95); // Retourne : 34
Math.round(34); // Retourne : 34

// Calculs de puissance et de racine carrée
// Calcul de puissance (grâce à pow())
Math.pow(3, 2); // Le premier paramètre est la base, le deuxième est l'exposant
							 // Ce calcul donne donc : 3 * 3 = 9

// Calcul de racine carrée (grâce à sqrt())
Math.sqrt(9); // Retourne : 3

// Les cosinus et sinus (grâce à cos() et sin())
Math.cos(Math.PI); // Retourne : -1
Math.sin(Math.PI); // Retourne : environ 0

// Retrouver les valeurs maximum ou minimum (grâce à max() et min())
Math.max(42, 4, 38, 1337, 105); // Retourne : 1337
Math.min(42, 4, 38, 1337, 105); // Retourne : 4

// Choisir un nombre aléatoire (grâce à random())
console.log(Math.random()); // Retourne un nombre compris entre 0 et 1

// Création d'une fonction permettant de s'affanchir du défaut du ramdom qui retourne un chiffrage entre 0 et 1
function rand(min, max, integer) {

    if (!integer) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

console.log(rand(0,100, true));



/*------------------------------------------- Les inclassables -------------------------------------------*/
// Les fonctions de conversion (grâce à parseInt() et parseFloat())
var myString = '08';

console.log(parseInt(myString)); // Affiche : 0
console.log(parseInt(myString, 10)); // Affiche : 8

// Les fonctions de contrôle
// Test si c'est un nombre (grâce à isNan())
var myNumber = parseInt("test"); // Notre conversion sera un échec et renverra « NaN »

console.log(isNaN(myNumber)); // Affiche « true », cette variable ne contient pas de nombre

//Test si c'est un nombre fini (grâce à isFinite())
var myNumber = 1/0; // 1 divisé par 0 tend vers l'infini

console.log(isFinite(myNumber)); // Affiche « false », ce nombre tend vers l'infini


