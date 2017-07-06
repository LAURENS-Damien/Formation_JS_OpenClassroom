/*------------------------------------------- Les variables et leurs accès -------------------------------------------*/
// Premier exemple
var number = 1;

setTimeout(function() {
    console.log(number); // Lors de l'exécution on aura comme valeur 2 et non pas 1
}, 100);

number++;

// Un cas concret qui ne marche pas
var divs = document.getElementsByTagName('div'),
divsLen = divs.length;

for (var i = 0; i < divsLen; i++) {

setTimeout(function() {
    divs[i].style.display = 'block';
}, 200 * i); // Le temps augmentera de 200 ms à chaque élément

}

/*------------------------------------------- Explorer les solutions -------------------------------------------*/
// Cas qui fonctionne en créant un IIFE encapsulant les setTimeout
var divs = document.getElementsByTagName('div'),
divsLen = divs.length;

for (var i = 0; i < divsLen; i++) {

(function(currentI) {

    setTimeout(function() {
        divs[currentI].style.display = 'block';
    }, 200 * i);

})(i);

}

/*------------------------------------------- Une autre utilité, les variables statiques -------------------------------------------*/
// Déclaration d'uune fonction avec une variable statique nommée myVar
var display = (function() {

    var myVar = 0; // Déclaration de la variable pseudo-statique

    return function(value) {

        if (typeof value != 'undefined') {
            myVar = value;
        }

        console.log(myVar);

    };

})();

display(); // Affiche : 0
display(42); // Affiche : 42
display(); // Affiche : 42


