/*------------------------------------------- Les types primitifs -------------------------------------------*/
var myString = "Chaîne de caractères primitive";
var myRealString = new String("Chaîne");

var myArray = []; // Tableau primitif
var myRealArray = new Array(); 

var myObject = {}; // Objet primitif
var myRealObject = new Object();

var myBoolean = true; // Booléen primitif
var myRealBoolean = new Boolean("true");

var myNumber = 42; // Nombre primitif
var myRealNumber = new Number("42");

// Test si une intance
var myString = 'Chaîne de caractères';

if (myString instanceof String) { // Renvoi faux puisque myString est une chaîne primitive et non une instance de String
    // Faire quelque chose
}

if (typeof myString === 'string') { // Là ça marchera
    // Faire quelque chose
}

console.log(typeof myRealString); // Affiche : « object »


/*------------------------------------------- La casse et les caractères -------------------------------------------*/
// toLowerCase() et toUpperCase()
var myString = 'tim berners-lee';
console.log(myString.toUpperCase()); // Retourne : « TIM BERNERS-LEE »

// Accéder aux caractères
var myString = 'Pauline';
var first = myString.charAt(0); // P
var last = myString.charAt(myString.length - 1); // e

// Supprimer les espaces au début et à la fin
var myString = ' chaine avec des espaces avant et après ';
console.log(myString.trim()); 


/*------------------------------------------- Rechercher, couper et extraire -------------------------------------------*/
// Connaître la position avec indexOf() et lastIndexOf()
var myString = 'Le JavaScript est plutôt cool';
var resultStart = myString.indexOf('JavaScript');
var resultEnd = myString.lastIndexOf('JavaScript');

if (resultStart > -1) {
    console.log('La chaîne contient le mot "JavaScript" qui débute à la position ' + resultStart);
}

if (resultEnd > -1) {
    console.log('La chaîne contient le mot "JavaScript" qui se termine à la position ' + resultEnd);
}

// Extraire une chaîne avec substring(), substr() et slice()
var myString = 'Thunderseb et Nesk';
var nick_1 = myString.substring(0, myString.indexOf(' '));
var nick_2 = myString.substring(myString.lastIndexOf(' ') + 1); // Ne pas oublier d'ajouter 1, pour commencer au N et non à l'espace
console.log(nick_1 + ' + ' + nick_2);

var nick_1 = 'Thunderseb'.slice(0, -3); // Affiche "Thunder"
console.log(nick_1);

// Couper une chaîne en un tableau avec split()
var myCSV = 'Pauline,Guillaume,Clarisse'; // CSV = Comma-Separated Values

var splitted = myCSV.split(','); // On coupe à chaque fois qu'une virgule est rencontrée

console.log(splitted.length); // 3


/*-------------------------------- Tester l'existence d'une chaîne de caractères --------------------------------*/
// Déterminer le type d'une variable (grâce à valueOf())
var string_1 = new String('Test');
var string_2 = string_1.valueOf();

console.log(typeof string_1); // Affiche : « object »
console.log(typeof string_2); // Affiche : « string »

function isString(variable) {
    return typeof variable.valueOf() === 'string'; // Si le type de la valeur primitive est « string » alors on retourne « true »
}

console.log(isString(new String('Test'))); // Affiche : « true » pour une instance
console.log(isString('Test')); // Affiche : « true » également pour un type primitif


