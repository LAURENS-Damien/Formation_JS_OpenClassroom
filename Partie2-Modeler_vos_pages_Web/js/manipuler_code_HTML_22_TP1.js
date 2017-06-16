// Création de la div pour le TP1
(function (){
// Création de la divTP1
var baliseDivTP1 = document.createElement('div');
baliseDivTP1.id = 'divTP1';

// lien W3C
var lienW3C = document.createElement('a');
lienW3C.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
lienW3C.title = 'World Wide Web';

var lienW3CText = document.createTextNode('World Wide Web');
lienW3C.appendChild(lienW3CText);

// lien orga de normalisation
var lienOrgaNormalisation = document.createElement('a');
lienOrgaNormalisation.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
lienOrgaNormalisation.title = 'Organisme de normalisation';

var lienOrgaNormalisationText = document.createTextNode('organisme de standardisation');
lienOrgaNormalisation.appendChild(lienOrgaNormalisationText);

// parties en gras
var sW3CConsortium = document.createElement('strong');
var sW3CConsortiumText = document.createTextNode('World Wide Web Consortium');
sW3CConsortium.appendChild(sW3CConsortiumText);

var sW3C = document.createElement('strong');
var sW3CText = document.createTextNode('W3C');
sW3C.appendChild(sW3CText);

// parties neutres
var text1 = document.createTextNode('Le ');
var text2 = document.createTextNode(', abrégé par le sigle ');
var text3 = document.createTextNode(', est un ');
var text4 = document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du ');

// On crée un tableau contenant dans l'ordre les éléments à créer
var tabContenu = [];
tabContenu.push(text1);
tabContenu.push(sW3CConsortium);
tabContenu.push(text2);
tabContenu.push(sW3C);
tabContenu.push(text3);
tabContenu.push(lienOrgaNormalisation);
tabContenu.push(text4);
tabContenu.push(lienW3C);

var child = '';
for(var i=0, taille=tabContenu.length; i<taille; i++) {
	child = tabContenu[i];
	baliseDivTP1.appendChild(child);
}

document.body.appendChild(baliseDivTP1);
})();