/* Exercices sur les variables */

// Tester l'existence de variables grâce à son type
var number = 2;
console.log(typeof number); // Affiche : « number »

var text = 'Mon texte';
console.log(typeof text); // Affiche : « string »

var aBoolean = false;
console.log(typeof aBoolean); // Affiche : « boolean »

console.log(typeof nothing); // Affiche : « undefined ». Permet de savoir qu'une variable est inexistante ou qu'elle est déclarée mais ne contient rien.

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Calculs simples
var divisor = 3, result1, result2, result3;

result1 = (16 + 8) / 2 - 2 ; // 10
result2 = result1 / divisor;
result3 = result1 % divisor;

console.log(result2); // Résultat de la division : 3,33
console.log(result3); // Reste de la division : 1

var number2 = 3;
number2 += 5;
console.log(number2); // Affiche : « 8 »

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// La concaténation
var hi = 'Bonjour', name = 'toi', result;
result = hi + name;
console.log(result); // Affiche : « Bonjourtoi »

var text = 'Coucou ';
text += 'nous';
console.log(text); // Affiche « Bonjour toi ».

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Interagir avec l'utilisateur
var start = 'Bonjour ', name, end = ' !', result;

name   = prompt('Quel est votre pr\u00e9nom ?');
result = start + name + end;
console.log(result);

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Convertir une chaîne de caractères en nombre
var first, second, result;

first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = parseInt(first) + parseInt(second);

console.log(result);

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Convertir un nombre en chaîne de caractères
var text, number1 = 4, number2 = 2;
text = number1 + '' + number2;
console.log(text); // Affiche : « 42 »
