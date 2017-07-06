/*------------------------------------------- L'objet Image -------------------------------------------*/
// Le constructeur
var myImg = new Image();

// Propriétés
//width : Contient la largeur originale de l'image. Vous pouvez redéfinir cette propriété pour modifier la taille de l'image.
//height : Contient la hauteur originale de l'image. Vous pouvez redéfinir cette propriété pour modifier la taille de l'image.
//src : Cette propriété vous sert à spécifier l'adresse (absolue ou relative) de l'image. Une fois que cette propriété est spécifiée, l'image commence immédiatement à être chargée.

// Événements (nommé 'load')
var myImg = new Image();

myImg.addEventListener('load', function() { // Étape 1 : on modifie notre événement
    // Etc.
});

myImg.src = 'adresse_de_mon_image'; // Étape 2 : on spécifie l'adresse de notre image

/*------------------------------------------- Mise en pratique -------------------------------------------*/
// On parcourt les liens et bloquons leurs redirections
var links = document.getElementsByTagName('a'),
    linksLen = links.length;

for (var i = 0; i < linksLen; i++) {

    links[i].addEventListener('click', function(e) {
        e.preventDefault(); // On bloque la redirection
        console.log(e.target.localName);
        console.log(e.currentTarget.localName);
        // On appelle notre fonction pour afficher les images
        // currentTarget est utilisé pour cibler le lien et non l'image
        displayImg(e.currentTarget);
    });

}

function displayImg(link) {

    var img = new Image(),
        overlay = document.getElementById('overlay');

    img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });

    img.src = link.href;
    overlay.style.display = 'block';
    overlay.innerHTML = '<span>Chargement en cours...</span>';

}

document.getElementById('overlay').addEventListener('click', function(e) {
    // currentTarget est utilisé pour cibler l'overlay et non l'image
    e.currentTarget.style.display = 'none';
});