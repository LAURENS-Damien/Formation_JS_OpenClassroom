/* Exercices sur les boucles */

// L'incrémentation
var number = 0;

number++;
console.log(number); // Affiche : « 1 »

number--;
console.log(number); // Affiche : « 0 »

// L'ordre des opérateurs permet de fixer une priorité différente
var number = 0;
var number2 = 0;
var output = number++;
var output2 = ++number2;

console.log(number); // Affiche : « 1 »
console.log(output); // Affiche : « 0 »
console.log(number2); // Affiche : « 1 »
console.log(output2); // Affiche : « 1 »

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// La boucle while
var nicks = '',
nick;

while (true) {
nick = prompt('Entrez un pr\u00e9nom :');

if (nick) {
    nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
} else {
    break; // On quitte la boucle
}
}

console.log(nicks); // Affiche les prénoms à la suite

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
//La boucle for
for (var i = 0, nicks = '', nick; true; i++) {
    nick = prompt('Entrez un pr\u00e9nom :');
  
    if (nick) {
        nicks += nick + ' ';  
    } else {
        break;  
    }	
}

console.log('Il y a ' + i + ' pr\u00e9noms :\n\n' + nicks);