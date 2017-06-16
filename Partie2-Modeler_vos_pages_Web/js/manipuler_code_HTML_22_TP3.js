// Création de la div pour le TP3
(function (){
// Création de la divTP3
var baliseDivTP3 = document.createElement('div');
baliseDivTP3.id = 'divTP3';

// Le paragraphe
var paragraphe = document.createElement('p');
var paragrapheText = document.createTextNode('Langages basés sur ECMAScript :');
paragraphe.appendChild(paragrapheText);

// Le bloc <dl> / <dt>
var blocDl = document.createElement('dl');
var objetDtDd = [
	{
		dt: 'JavaScript',
		dd:	'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'		
	}, {
		dt: 'JScript',
		dd:	'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'		
	}, {
		dt: 'ActionScript',
		dd:	'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'		
	}, {
		dt: 'EX4',
		dd:	'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'		
	}
];

var dtCourant = '';
var contenuDtCourantText = '';
var ddCourant = '';
var contenuDdCourantText = '';

for(var i=0, tailleObjetDtDd=objetDtDd.length; i<tailleObjetDtDd; i++) {
	contenuDtCourantText = document.createTextNode(objetDtDd[i].dt);
	contenuDdCourantText = document.createTextNode(objetDtDd[i].dd);
	dtCourant = document.createElement('dt');
	ddCourant = document.createElement('dd');
	dtCourant.appendChild(contenuDtCourantText);
	ddCourant.appendChild(contenuDdCourantText);
	blocDl.appendChild(dtCourant);
	blocDl.appendChild(ddCourant);
}

baliseDivTP3.appendChild(paragraphe);
baliseDivTP3.appendChild(blocDl);
document.body.appendChild(baliseDivTP3);

})();