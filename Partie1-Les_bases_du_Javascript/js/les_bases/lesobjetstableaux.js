// Intro aux objets
var myString = 'Ceci est une chaîne de caractères'; // On crée un objet String

console.log(myString.length); // On affiche le nombre de caractères, au moyen de la propriété « length »

console.log(myString.toUpperCase()); // On récupère la chaîne en majuscules, avec la méthode toUpperCase()

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Les tableaux
var myArray_a = [42, 12, 6, 3];
var myArray_b = [42, 'Sébastien', 12, 'Laurence'];

console.log(myArray_a[1]);

myArray_b[1] = 'Damien'; // On modifie la valeur relative à l'index 1
console.log(myArray_b[1]);

// Ajouter et supprimer des items 
var myArray = ['Sébastien', 'Laurence'];
myArray.push('Ludovic'); // Ajoute « Ludovic » à la fin du tableau
myArray.push('Pauline', 'Guillaume'); // Ajoute « Pauline » et « Guillaume » à la fin du tableau
myArray.unshift('Damien'); // Ajoute "Damien" au début du tableau
console.log(myArray);

var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

myArray.shift(); // Retire le premier élément, en l'occurence « Sébastien »
myArray.pop(); // Retire le dernier élément, en l'occurence  « Guillaume »
myArray.splice(1, 0, 'Elodie'); // On ajoute l'élément "Elodie" à l'indice 1
myArray.splice(1, 2); // On supprime 2 éléments à partir de l'indice 1

console.log(myArray); // Affiche « Laurence,Pauline »

// Chaînes de caractères et tableaux
var cousinsString = 'Pauline Guillaume Clarisse',
cousinsArray = cousinsString.split(' '); // Permet de créer un tableau en découpant le String avec le séparateur ' '

console.log(cousinsString);
console.log(cousinsArray);

var cousinsString_2 = cousinsArray.join('-'); // On crée une chaîne de caractères à partir du tableau en ajoutant 
											  // comme séparateur '-'
console.log(cousinsString_2);

// Parcourir un tableau
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

for (var i = 0; i < myArray.length; i++) {
	
    console.log(myArray[i]);
		
}

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Les objets littéraux
var family = {
	    self: 'Sébastien',
	    sister: 'Laurence',
	    brother: 'Ludovic',
	    cousin_1: 'Pauline',
	    cousin_2: 'Guillaume'
};

console.log(family.sister); // Affiche : « Laurence »

var id = 'sister';
console.log(family[id]); // Affiche : « Laurence »

// Ajout des items
family['uncle'] = 'Didier'; // « Didier » est ajouté et est accessible via l'identifiant « uncle »

// Parcourir un objet avec "for in"
for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »
	
	console.log(family[id]);
		
}

// Exemple d'utilisation des objets littéraux
function getCoords() {
    /* Script incomplet, juste pour l'exemple */

    return {
        x: 12,
        y: 21
    };
}

var coords = getCoords();

console.log(coords['x']); // 12
console.log(coords['y']); // 21


