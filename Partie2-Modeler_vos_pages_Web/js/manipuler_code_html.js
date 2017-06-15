// Accéder aux éléments
// Accéder par recherche sur l'id
var div = document.getElementById('myDiv');

console.log(div);

// Accéder par recherche sur la famille de l'élément
var divs = document.getElementsByTagName('div');

for (var i = 0, c = divs.length ; i < c ; i++) {
	console.log('Element n° ' + (i + 1) + ' : ' + divs[i]);
}

// Accéder aux éléments grâce aux technologies récentes
var query = document.querySelector('#menu .item span'),
    queryAll = document.querySelectorAll('#menu .item span');

console.log(query.innerHTML); // Affiche : "Élément 1"

console.log(queryAll.length); // Affiche : "2"
console.log(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Editer les éléments HTML
// Récupéréer/éditer un attribut grâce à getAttribute() et setAttribute()
var link = document.getElementById('myLink');
var href = link.getAttribute('href'); // On récupère l'attribut « href »

console.log(link);

link.setAttribute('href', 'http://www.siteduzero.com'); // On édite l'attribut « href »

console.log(link);

// Attribuer une classe à un élément
document.getElementById('myColoredDiv').className = 'blue';

// Récupérer du HTML
console.log(div.innerHTML);

// Ajouter ou éditer du HTML
// On ajoute
document.getElementById('myDiv').innerHTML += '<blockquote>Je mets une citation en plus du paragraphe</blockquote>';
// On édite
document.getElementById('myDiv').innerHTML = '<blockquote>Je mets une citation à la place du paragraphe</blockquote>';

// Récupérer seulement du texte sans les balises
var txt = '';

txt = div.textContent || div.innerText + ' [via Internet Explorer]' || '';

console.log(txt);
