// Le DOM-2
// Ajout d'un évènement (grâce à addEventListener())
var element = document.getElementById('clickme');
// Premier événement click
element.addEventListener('click', function() {
    alert("Et de un !");
});

// Deuxième événement click
var myFunction = function() {
    alert("Vous m'avez cliqué !");
};

element.addEventListener('click', myFunction);

// Suppression du deuxième évènement (grâce à removeEventListener())
element.removeEventListener('click',  myFunction); // On supprime l'événement en lui repassant les mêmes paramètres

// Capture et bouillonnement (capture=true, bouillonnement=false)
var capt1 = document.getElementById('capt1'),
capt2 = document.getElementById('capt2'),
boul1 = document.getElementById('boul1'),
boul2 = document.getElementById('boul2');

capt1.addEventListener('click', function() {
alert("L'événement du div vient de se déclencher.");
}, true);

capt2.addEventListener('click', function() {
alert("L'événement du span vient de se déclencher.");
}, true);

boul1.addEventListener('click', function() {
alert("L'événement du div vient de se déclencher.");
}, false);

boul2.addEventListener('click', function() {
alert("L'événement du span vient de se déclencher.");
}, false);


/*------------------------------------------- L'objet Event -------------------------------------------*/
// Généralités sur l'objetEvent
element.addEventListener('click', function(e) { // L'argument « e » va récupérer une référence vers l'objet « Event »
    console.log(e.type); // Ceci affiche le type de l'événement (click, mouseover, etc.)
});

// Récupérer l'élément de l'événement actuellement déclenché (grâce à la propriété target. 
// Celle-ci permet de récupérer une référence vers l'élément dont l'événement a été déclenché)
var clickme = document.getElementById('clickme');
clickme.addEventListener('click', function(e) {
    e.target.innerHTML = 'Vous avez cliqué !';
});

// Récupérer l'élément à l'origine du déclenchement de l'événement (grâce à currentTarget)
var parent1 = document.getElementById('parent1'),
result = document.getElementById('result');

parent1.addEventListener('mouseover', function(e) {
	result.innerHTML = "L'élément déclencheur de l'événement \"mouseover\" possède l'ID : " + e.currentTarget.id;
});

// Récupérer la position du curseur (grâce à clientX et clientY)
var position = document.getElementById('position');

document.addEventListener('mousemove', function(e) {
    position.innerHTML = 'Position X : ' + e.clientX + 'px<br />Position Y : ' + e.clientY + 'px';
});

// Récupérer l'élément en relation avec un événement de souris
var child1Sec = document.getElementById('child1Sec'),
child2Sec = document.getElementById('child2Sec'),
resultSec = document.getElementById('resultSec');

child1Sec.addEventListener('mouseover', function(e) {
resultSec.innerHTML = "L'élément quitté juste avant que le curseur n'entre sur l'enfant n°1 est : " + e.relatedTarget.id;
});

child2Sec.addEventListener('mouseout', function(e) {
resultSec.innerHTML = "L'élément survolé juste après que le curseur ait quitté l'enfant n°2 est : " + e.relatedTarget.id;
});

// Récupérer les touches frappées par l'utilisateur
var field = document.getElementById('field'),
down = document.getElementById('down'),
press = document.getElementById('press'),
up = document.getElementById('up');

document.addEventListener('keydown', function(e) {
	down.innerHTML = e.keyCode;
});

document.addEventListener('keypress', function(e) {
	press.innerHTML = String.fromCharCode(e.keyCode);
});

document.addEventListener('keyup', function(e) {
	up.innerHTML = e.keyCode;
});

// Bloquer l'action par défaut de certains événements (grâce à preventDefault())
var link = document.getElementById('link');

link.addEventListener('click', function(e) {
    e.preventDefault(); // On bloque l'action par défaut de cet événement
    alert('Vous avez cliqué !');
});

/*---------------------------- Résoudre les problèmes d'héritage des événements ----------------------------*/
var myDiv = document.getElementById('myDiv'),
results = document.getElementById('results');

myDiv.addEventListener('mouseover', function(e) {

    var relatedTarget = e.relatedTarget;

    while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
        relatedTarget = relatedTarget.parentNode;
    }

    if (relatedTarget != myDiv) {
        results.innerHTML += "Le curseur vient d'entrer.";
    }

});

myDiv.addEventListener('mouseout', function(e) {

    var relatedTarget = e.relatedTarget;

    while (relatedTarget != myDiv && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
        relatedTarget = relatedTarget.parentNode;
    }

    if (relatedTarget != myDiv) {
        results.innerHTML += "Le curseur vient de sortir.<br />";
    }

});
