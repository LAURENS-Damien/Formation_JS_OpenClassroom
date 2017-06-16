// Création de la div pour le TP2
(function (){
// Création de la divTP1
var baliseDivTP2 = document.createElement('div');
baliseDivTP2.id = 'divTP2';

// Le paragraphe
var paragraphe = document.createElement('p');
var paragrapheText = document.createTextNode('Langages basés sur ECMAScript :');
paragraphe.appendChild(paragrapheText);

// Le bloc <ul> / <li>
var blocUl = document.createElement('ul');
var textLiDuBlocUl = [
	'JavaScript', 
	'JScript', 
	'ActionScript', 
	'EX4'
];

var liCourant = '';
var liCourantText = '';
for(var i=0, tailleTabTextLi=textLiDuBlocUl.length; i<tailleTabTextLi; i++) {
	liCourantText = document.createTextNode(textLiDuBlocUl[i]);
	liCourant = document.createElement('li');
	liCourant.appendChild(liCourantText);
	blocUl.appendChild(liCourant);
}

baliseDivTP2.appendChild(paragraphe);
baliseDivTP2.appendChild(blocUl);
document.body.appendChild(baliseDivTP2);

})();