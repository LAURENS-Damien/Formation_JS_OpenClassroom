/*------------------------------------------- Première version : les bases -------------------------------------------*/
/*
// Préparation et envoi de la requête
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mon_site_web.com/ajax.php');
xhr.send(null);

// Transmettre des paramètres
var value1 = encodeURIComponent(value1), // encodeURIComponent() permet d'éviter d'écrire d'éventuels caractères interdits dans une URL
value2 = encodeURIComponent(value2);

xhr.open('GET', 'http://mon_site_web.com/ajax.php?param1=' + value1 + '&param2=' + value2);

// Transmettre avec un POST
xhr.open('POST', 'http://mon_site_web.com/ajax.php');
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send('param1=' + value1 + '&param2=' + value2); // Les arguments sont placés dans le send()

// Réception des données d'une requête asynchrone
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Votre code…
    }
});

// Traitement des données
// Données au format XML
var cels = xhr.responseXML.getElementsByTagName('cel'); // pour récupérer le contenu de balises <cel> dans le DOM de réponse

// Données au format texte, à convertir par exemple avec JSON
var response = JSON.parse(xhr.responseText);

// Récupération des en-têtes de la réponse
// Si on veut récupérer tous les en-têtes
xhr.getAllResponseHeaders();
// Si on veut récupérer un seul en-tête à l'aide de son nom
xhr.getResponseHeader('Content-type'); // Affiche : « text/html; charset=utf-8 »

*/


// Mise en pratique
function loadFile(file) {
	  
    var xhr = new XMLHttpRequest();
    
    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', '/files/' + file);
    
    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Si le fichier est chargé sans erreur

            document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>'; // On l'affiche !

        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) { // En cas d'erreur !
        
            alert('Une erreur est survenue !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText);

        }

    });

    xhr.send(null); // La requête est prête, on envoie tout !

}

(function() { // Comme d'habitude, une IIFE pour éviter les variables globales

    var inputs = document.getElementsByTagName('input'),
        inputsLen = inputs.length;

    for (var i = 0; i < inputsLen; i++) {
        inputs[i].addEventListener('click', function() {
            loadFile(this.value); // À chaque clique, un fichier sera chargé dans la page
        });

    }

})();







/*------------------------------------------- Deuxième version : usage avancé -------------------------------------------*/
// Nouvelles propriétés et méthodes
// Éviter les requêtes trop longues
var xhr = new XMLHttpRequest();
xhr.timeout = 10000; // La requête se terminera si elle n'a pas abouti au bout de 10 secondes

// Forcer le type de contenu
xhr.overrideMimeType('text/xml');

// Les nouveaux évènements
// loadstart, load, loadend, error, abort, timeout, progress

// L'objet FormData (pour envoyer des données d'un formulaire)
/*
var xhr = new XMLHttpRequest();

xhr.open('POST', 'script.php');

var form = new FormData();
form.append('champ1', 'valeur1');
form.append('champ2', 'valeur2');

xhr.send(form);


// En php, on récupèrerait les données comme ça :
<?php

    echo $_POST['champ1'] . ' - ' . $_POST['champ2']; // Affiche : « valeur1 - valeur2 »

?>


// On peut passer en paramètre notre formulaire, ce qui fera un préremplissage des champs du formulaire!
<form id="myForm">

    <input id="myText" name="myText" type="text" value="Test ! Un, deux, un, deux !" />

</form>

<script>
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'script.php');

    var myForm = document.getElementById('myForm'),
        form = new FormData(myForm);

    xhr.send(form);
</script>


*/



