/*------------------------------------------- Manipulation des iframes -------------------------------------------*/
// Accéder au contenu
var frame = document.getElementById('myFrame').contentDocument;
var frame_links = frame.getElementsByTagName('a');
console.log(frame_links);


/*------------------------------------------- Chargement de contenu -------------------------------------------*/

// Charger une iframe en changeant l'url
document.getElementById('myFirstFrame').src = 'Upload_via_une_iframe.php';

// Charger une iframe avec target et un formulaire (voir code HTML)

// Détecter le chargement avec l'évènement load (il faut placer un onload() sur l'iframe)
function trigger() {
    var frame = document.getElementById('myFirstFrame').contentDocument;

    console.log(frame.body.textContent);
}



/*------------------------------------------- Récupérer du contenu -------------------------------------------*/
// Récupérer des données JavaScript
function sendForm() {
    var nick = document.getElementById("nick").value;

    if (nick) { // Si c'est OK
        document.getElementById("myForm").submit(); // On envoie le formulaire
    }
}

function receiveData(data) {
    console.log('Votre pseudo est ' + data);
}

/*------------------------------------------- Le système d'upload -------------------------------------------*/
function uploadEnd(error, path) {
    if (error === 'OK') {
        document.getElementById('uploadStatus').innerHTML = '<a href="' + path + '">Upload done !</a><br /><br /><a href="' + path + '"><img src="' + path + '" /></a>';
    } else {
        document.getElementById('uploadStatus').innerHTML = error;
    }
}

// On masque par défaut l'iframe
document.getElementById('uploadFrame').style = 'display: none';

// Lors de la soumission du formulaire, on affiche un texte invitant la personnes à patienter
document.getElementById('uploadForm').addEventListener('submit', function() {
    document.getElementById('uploadStatus').innerHTML = 'Loading...';
});
