/*------------------------------------------- L'objet Array -------------------------------------------*/
// Les méthodes
// Concaténer deux tableaux (grâce à concat())
var myArray = ['test1', 'test2'].concat(['test3', 'test4']);
console.log(myArray);

// Parcourir un tableau
var myArray = ["C'est", "un", "test"];

myArray.forEach(function(value, index, array) {
    console.log(
        'Index : ' + index + '\n' +
        'Valeur : ' + value
    );
});

// Rechercher un élément dans un tableau (grâce à indexOf())
var element2 = ['test'],
myArray = ['test', element2];

console.log(myArray.indexOf(element2)); // Affiche : 1

// Trier un tableau
// Inverser l'ordre des valeurs
var myArray = [1, 2, 3, 4, 5];
myArray.reverse();

console.log(myArray); // Affiche : 5,4,3,2,1

// Trier par ordre alphabétique (grâce à sort())
var myArray = [3, 1, 5, 10, 4, 2];
myArray.sort();

console.log(myArray); // Affiche : 1,10,2,3,4,5 car les nombres sont convertis en chaînes de caractères

myArray.sort(function(a, b) {

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }

});

console.log(myArray); // Affiche : 1,2,3,4,5,10


// Extraire une partie d'un tableau (grâce à slice())
var myArray = [1, 2, 3, 4, 5];

console.log(myArray.slice(1, 3)); // Affiche : 2,3
console.log(myArray.slice(2)); // Affiche : 3,4,5
console.log(myArray.slice(1, -1)); // Affiche : 2,3,4. Mettre -1 consiste à faire dernier moins le chiffre du 2ème argument

// Remplacer une partie d'un tableau
var myArray = [1, 2, 3, 4, 5];
var result = myArray.splice(1, 2); // On retire 2 éléments à partir de l'index 1

console.log(myArray); // Affiche : 1,4,5
console.log(result); // Affiche : 2,3

// Ajout d'éléments
var myArray = [1, null, 4, 5];
myArray.splice(1, 1, 2, 3);

console.log(myArray); // Affiche : 1,2,3,4,5


// Tester l'existence d'un tableau (grâce à isArray())
console.log(Array.isArray(['test']));



/*------------------------------------------- Les piles et les files -------------------------------------------*/
// Retour sur les méthodes étudiées (push() : ajoute un ou plusieurs éléments à la fin du tableau (un argument par élément ajouté) et retourne la nouvelle taille de ce dernier
								  // pop() : retire et retourne le dernier élément d'un tableau
								  // unshift() : ajoute un ou plusieurs éléments au début du tableau (un argument par élément ajouté) et retourne la nouvelle taille de ce dernier
								  // shift() : retire et retourne le premier élément d'un tableau)
// Les piles (couple push() et pop() ou couple unshift() et shift())
var myArray = ['Livre 1'];
var result = myArray.push('Livre 2', 'Livre 3');

console.log(myArray); // Affiche : « Livre 1,Livre 2,Livre 3 »
console.log(result); // Affiche : « 3 »

result = myArray.pop();

console.log(myArray); // Affiche : « Livre 1,Livre 2 »
console.log(result); // Affiche : « Livre 3 »

var myArray = ['Livre 3'];
var result = myArray.unshift('Livre 1', 'Livre 2');

console.log(myArray); // Affiche : « Livre 1,Livre 2,Livre 3 »
console.log(result); // Affiche : « 3 »

result = myArray.shift();

console.log(myArray); // Affiche : « Livre 2,Livre 3 »
console.log(result); // Affiche : « Livre 1 »

// Les files (couple push()/shift() ou couple unshift()/pop())
var myArray = ['Fanboy 1', 'Fanboy 2'];
var result = myArray.push('Fanboy 3', 'Fanboy 4');

console.log(myArray); // Affiche : « Fanboy 1,Fanboy 2,Fanboy 3,Fanboy 4 »
console.log(result); // Affiche : « 4 »

result = myArray.shift();

console.log(myArray); // Affiche : « Fanboy 2,Fanboy 3,Fanboy 4 »
console.log(result); // Affiche : « Fanboy 1 »

var myArray = ['Fanboy 3', 'Fanboy 4'];

var result = myArray.unshift('Fanboy 1', 'Fanboy 2');

alert(myArray); // Affiche : « Fanboy 1,Fanboy 2,Fanboy 3,Fanboy 4 »
alert(result); // Affiche : « 4 »

result = myArray.pop();

console.log(myArray); // Affiche : « Fanboy 1,Fanboy 2,Fanboy 3 »
console.log(result); // Affiche : « Fanboy 4 »




