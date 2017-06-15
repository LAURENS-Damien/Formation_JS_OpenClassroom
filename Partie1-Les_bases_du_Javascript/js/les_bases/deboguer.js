// On crée un objet basique.
var helloObject = {
    english: 'Hello',
	french: 'Bonjour',
	spanish: 'Hola'
};

// Et on l'affiche.
console.log(helloObject);

// Tant qu'à faire, on affiche aussi un tableau.
var helloArray = ['Hello', 'Bonjour', 'Hola'];

console.log(helloArray);

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Les poitns d'arrêt
// La fonction « a » affiche la valeur qu'elle reçoit de « b ».
function a(value) {
    console.log(value);
}

// La fonction « b » incrémente la valeur reçue par « c » puis la passe en paramètre à « a ».
function b(value) {
    a(value + 1);
}

// La fonction « c » incrémente la valeur reçue par la boucle for puis la passe en paramètre à « b ».
function c(value) {
    b(value + 1);
}

// Pour chaque itération, cette boucle passe en paramètre la valeur de « i » à la fonction « c ».
for (var i = 0; i < 10; i++) {
    c(i);
}

//On utilise ci-dessous une IIFE, on déclare donc une fonction anonyme que l'on exécute immédiatement.
(function anonymousWasHere() {
    console.log('Hi!');
})();