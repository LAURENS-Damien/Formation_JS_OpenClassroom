/*------------------------------------  Éditer les propriétés CSS ------------------------------------*/
// Éditer les propriétés CSS d'un élément
var myDiv = document.getElementById('myDiv');
myDiv.style.width = '150px'; // On modifie la largeur de notre élément à 150px
myDiv.style.backgroundColor = 'orange'; // On passe le fond en orange
myDiv.style.paddingTop = '10px'; // On passe le fond en orange

/*------------------------------------ Récupérer les propriétés CSS ------------------------------------*/
// La fonction getComputedStyle() (permet de récupérer le style même dans une feuille de style)
var text = document.getElementById('text'),
color = getComputedStyle(text).color;

console.log(color);

// Les propriétés de type offset (permettent de connaître : la largeur complète, la hauteur complète...)
console.log(myDiv.offsetHeight); // On affiche la hauteur complète de notre élément HTML

// La propriété offsetParent
var parent = document.getElementById('parent');
var child = document.getElementById('child');

console.log("Sans la fonction de calcul, la position de l'élément enfant est : \n\n" +
    'offsetTop : ' + child.offsetTop + 'px\n' +
    'offsetLeft : ' + child.offsetLeft + 'px');


function getOffset(element) { // Notre fonction qui calcule le positionnement complet
    var top = 0,
        left = 0;

    do {
        top += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent); // Tant que « element » reçoit un « offsetParent » valide alors on additionne les valeurs des offsets

    return { // On retourne un objet, cela nous permet de retourner les deux valeurs calculées
        top: top,
        left: left
    };
}


console.log("Avec la fonction de calcul, la position de l'élément enfant est : \n\n" +
    'offsetTop : ' + getOffset(child).top + 'px\n' +
    'offsetLeft : ' + getOffset(child).left + 'px');


/*------------------------------------ Votre premier script interactif ! ------------------------------------*/
(function() { // On utilise une IIFE pour ne pas polluer l'espace global
    var storage = {}; // Contient l'objet de la div en cours de déplacement

    function init() { // La fonction d'initialisation
        var elements = document.querySelectorAll('.draggableBox'),
            elementsLength = elements.length;

        for (var i = 0; i < elementsLength; i++) {
            elements[i].addEventListener('mousedown', function(e) { // Initialise le drag & drop
                var s = storage;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
            });

            elements[i].addEventListener('mouseup', function() { // Termine le drag & drop
                storage = {};
            });
        }

        document.addEventListener('mousemove', function(e) { // Permet le suivi du drag & drop
            var target = storage.target;

            if (target) {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
    }

    init(); // On initialise le code avec notre fonction toute prête.
})();