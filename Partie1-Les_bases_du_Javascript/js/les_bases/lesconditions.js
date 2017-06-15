/* Exercices sur les conditions */

// Les opérateurs de comparaison
var number1 = 2, number2 = 2, number3 = 4, result;

result = number1 == number2; // On spécifie deux variables avec l'opérateur de comparaison entre elles
console.log(result); // Affiche « true », la condition est donc vérifiée car les deux variables contiennent bien la même valeur

result = number1 == number3;
console.log(result); // Affiche « false », la condition n'est pas vérifiée car 2 est différent de 4

result = number1 < number3; 
console.log(result); // Affiche « true », la condition est vérifiée car 2 est bien inférieur à 4

// Comparaison de contenu et de type
var number = 4, text = '4', result;

result = number == text;
console.log(result); // Affiche  « true » alors que « number » est un nombre et « text » une chaîne de caractères

result = number === text;
console.log(result); // Affiche « false » car cet opérateur compare aussi les types des variables en plus de leurs valeurs

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Les opérateurs logiques
// L'opérateur ET
var result = true && true;
console.log(result); // Affiche : « true »

result = true && false;
console.log(result); // Affiche : « false »

result = false && false;
console.log(result); // Affiche : « false »

// L'opérateur OU
var result = true || true;
console.log(result); // Affiche : « true »

result = true || false;
console.log(result); // Affiche : « true »

result = false || false;
console.log(result); // Affiche : « false »

//L'opérateur NON
var result = false;

result = !result; // On stocke dans « result » l'inverse de « result », c'est parfaitement possible
console.log(result); // Affiche « true » car on voulait l'inverse de « false »

result = !result;
console.log(result); // Affiche « false » car on a inversé de nouveau « result », on est donc passé de « true » à « false »

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Combiner les opérateurs
var condition1, condition2, result;

condition1 = 2 > 8; // false
condition2 = 8 > 2; // true

result = condition1 && condition2;
console.log(result); // Affiche « false »

// Ou en code simplifié
var result = 2 > 8 && 8 > 2;
console.log(result); // Affiche « false »

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Les structures conditionnelles
// La fonction "confirm" permettant d'ouvrir une pop-up demandant une confirmation
if (confirm('Voulez-vous ex\u00e9cuter le code JavaScript de cette page ?')) {
	console.log('Le code a bien \u00e9t\u00e9 ex\u00e9cut\u00e9 !');
}

// La condition "if else"
if (confirm('Pour acc\u00e9der \u00e0 ce site vous devez avoir 18 ans ou plus, cliquez sur "OK" si c\'est le cas.')) {
	console.log('Vous allez \u00eAtre redirig\u00e9 vers le site.');
} else {
	console.log("D\u00e9sol\u00e9, vous n'avez pas acc\u00e8s \u00e0 ce site.");
}

// La condition "if else if"
var floor = parseInt(prompt("Entrez l'\u00e9tage o\u00f9 l'ascenseur doit se rendre (de -2 \u00e0 30) :"));

if (floor == 0) {

	console.log('Vous vous trouvez d\u00e9j\u00e0 au rez-de-chauss\u00e9e.');

} else if (-2 <= floor && floor <= 30) {

	console.log("Direction l'\u00e9tage n\u00b0" + floor + ' !');

} else {

	console.log("L'\u00e9tage sp\u00e9cifi\u00e9 n'existe pas.");

}

// La condition "switch"
var drawer = parseInt(prompt('Choisissez le tiroir \u00e0 ouvrir (1 \u00e0 4) :'));

switch (drawer) {
    case 1:
    	console.log('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;

    case 2:
    	console.log('Contient du mat\u00e9riel informatique : des c\u00e2bles, des composants, etc.');
    break;

    case 3:
    	console.log('Ah ? Ce tiroir est ferm\u00e9 à cl\u00e9 ! Dommage !');
    break;

    case 4:
    	console.log('Contient des v\u00eAtements : des chemises, des pantalons, etc.');
    break;

    default:
    	console.log("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'\u00e0 preuve du contraire, les tiroirs n\u00e9gatifs n'existent pas.");
}

// Les ternaires
var startMessage = 'Votre cat\u00e9gorie : ',
endMessage,
adult = confirm('\u00CAtes-vous majeur ?');

endMessage = adult ? '18+' : '-18';

console.log(startMessage + endMessage);

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Les conditions sur les variables
// Tester l'existence de contenu d'une variable
var conditionTest = 'Fonctionnera ? Fonctionnera pas ?';

if (conditionTest) {
	console.log('Fonctionne !');
} else {
	console.log('Ne fonctionne pas !');
}

// Le cas de l'opérateur OU
var conditionTest1 = '', conditionTest2 = 'Une cha\u00EEne de caract\u00e8res';

console.log(conditionTest1 || conditionTest2);


