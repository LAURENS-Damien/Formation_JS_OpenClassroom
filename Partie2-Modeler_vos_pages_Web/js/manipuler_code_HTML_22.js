/* Naviguer entre les nœuds */
// La propriété parentNode (permet d'accéder à l'élément parent d'un élément)
var paragraph = document.getElementById('myP');
var blockquote = paragraph.parentNode;
console.log(blockquote);

// nodeType et nodeName (servent respectivement à vérifier le type d'un nœud et le nom d'un nœud)
console.log('------------------------------------------------------------------------------');
console.log(paragraph.nodeType + '\n\n' + paragraph.nodeName.toLowerCase());
console.log(blockquote.nodeType + '\n\n' + blockquote.nodeName.toLowerCase());

// firstChild et lastChild (servent respectivement à accéder au premier et au dernier enfant d'un nœud)
var paragraph = document.getElementById('testEnfants');
var first = paragraph.firstChild;
var last = paragraph.lastChild;

console.log('------------------------------------------------------------------------------');
console.log(first.nodeName.toLowerCase());
console.log(last.nodeName.toLowerCase());

// nodeValue et data (récupérer le texte d'un élément)
console.log('------------------------------------------------------------------------------');
console.log(first.nodeValue);
console.log(last.firstChild.data);

// childNodes (retourne un tableau contenant la liste des enfants d'un élément)
console.log('------------------------------------------------------------------------------');
var children = paragraph.childNodes;

for (var i = 0, c = children.length; i < c; i++) {

    if (children[i].nodeType === Node.ELEMENT_NODE) { // C'est un élément HTML
    	console.log(children[i].firstChild.data);
    } else { // C'est certainement un nœud textuel
    	console.log(children[i].data);
    }
}


//nextSibling et previousSibling (permettent d'accéder respectivement au nœud suivant et au nœud précédent)
console.log('------------------------------------------------------------------------------');
var child = paragraph.firstChild; // On prend le premier enfant

while (child) {

    if (child.nodeType === Node.ELEMENT_NODE) { // C'est un élément HTML
    	console.log(child.firstChild.data);
    } else { // C'est certainement un nœud textuel
    	console.log(child.data);
    }

    child = child.nextSibling; // À chaque tour de boucle, on prend l'enfant suivant

}

/* ----------------------------- Créer et insérer des éléments ----------------------------- */
// Création de l'élément
var newLink = document.createElement('a');

// Affectation des attributs
// On sette directement les attributs, avec les propriétés adéquates ou avec le setAttribute()
newLink.id    = 'sdz_link';
newLink.href  = 'http://www.siteduzero.com';
newLink.title = 'Découvrez le Site du Zéro !';
newLink.setAttribute('tabindex', '10');

// Insertion de l'élément en dernière position (grâce à appendChild())
document.getElementById('testEnfants').appendChild(newLink);

// Ajouter des nœuds textuels (avec createTextNode())
var newLinkText = document.createTextNode("Le Site du Zéro");

newLink.appendChild(newLinkText);

// Utilisation de la référence retournée par appendChild()
var span = document.body.appendChild(document.createElement('span'));
span.innerHTML = 'Du texte en plus !'; // Là, tout fonctionne !

/* ----------------------------- Cloner, remplacer, supprimer… ----------------------------- */
// Cloner un élément (grâce à cloneNode())
//On va cloner un élément créé :
var hr1 = document.createElement('hr');
var hr2 = hr1.cloneNode(false); // Il n'a pas d'enfants…

// Ici, on clone un élément existant :
var paragraph1 = document.getElementById('myP');
var paragraph2 = paragraph1.cloneNode(true);

// Et attention, l'élément est cloné, mais pas « inséré » tant que l'on n'a pas appelé appendChild() :
paragraph1.parentNode.appendChild(hr1);
paragraph1.parentNode.appendChild(paragraph2);
paragraph1.parentNode.appendChild(hr2);


// Remplacer un élément par un autre (grâce à replaceChild())
var link = document.querySelector('a');
var newLabel = document.createTextNode('et un hyperlien');
link.replaceChild(newLabel, link.firstChild);


// Supprimer un élément (grâce à removeChild())
var oldLink = link.parentNode.removeChild(link); // On supprime l'élément et on le garde en stock
document.body.appendChild(oldLink); // On réintègre ensuite l'élément supprimé où on veut et quand on veut

/* ----------------------------- Autres actions ----------------------------- */
// Vérifier la présence d'éléments enfants (grâce à hasChildNodes())
console.log('------------------------------------------------------------------------------');
var paragraph = document.querySelector('p');
console.log(paragraph.hasChildNodes()); // Affiche true

// Insérer avant un élément (grâce à insertBefore())
var emphasis = document.createElement('em'),
    emphasisText = document.createTextNode(' en emphase légère ');

emphasis.appendChild(emphasisText);

paragraph.insertBefore(emphasis, paragraph.lastChild);

