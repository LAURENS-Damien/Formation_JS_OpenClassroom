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
(function (){
var draggableBoxs = document.getElementsByClassName('draggableBox');
var topOri, leftOri, topDivADeplacer, leftDivADeplacer, nouveauTopDivADeplacer, 
	nouveauLeftDivADeplacer, elementCourant;

for (var i = 0, taille = draggableBoxs.length; i < taille; i++) {
	// On récupère la position d'origine
	draggableBoxs[i].addEventListener('mousedown', function(e) {
//		console.log(e.target.offsetTop);
//		console.log(e.target.offsetLeft);
		topDivADeplacer = e.target.offsetTop;
		leftDivADeplacer = e.target.offsetLeft;
		
		// On garde la référence à l'élément courant
		elementCourant = e.target;
	});
	
	// On met à jour avec les nouvelles positions
	draggableBoxs[i].addEventListener('mouseup', function(e) {
//		console.log("On rentre");
//		console.log(e.target.style.top);
//		console.log(e.target.style.left);
		e.target.style.top = nouveauTopDivADeplacer+'px';
		e.target.style.left = nouveauLeftDivADeplacer+'px';
//		console.log(e.target.style.top);
//		console.log(e.target.style.left);

	});
	
	// On calcule dynamiquement la nouvelle position
	document.addEventListener('mousemove', function(e) {		
		nouveauTopDivADeplacer = e.clientX;
		nouveauLeftDivADeplacer = e.clientY;
		console.log(e.clientX);
		console.log(e.clientY);
		elementCourant.style.top = nouveauTopDivADeplacer+'px';
		elementCourant.style.left = nouveauLeftDivADeplacer+'px';
		console.log(elementCourant.style.top);
		console.log(elementCourant.style.left);
	});
}
})();