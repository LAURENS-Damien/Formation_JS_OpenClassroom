// Les propriétés
// Une propriété classique : value
var text = document.getElementById('text');
  
text.addEventListener('focus', function(e) {
    e.target.value = "Vous avez le focus !";
});

text.addEventListener('blur', function(e) {
    e.target.value = "Vous n'avez pas le focus !";
});

// Les booléens avec disabled, checked et readonly
// Pour désactiver un texte
text.disabled = true;

// Pour contrôler quelle puce est cochée
function check() {
    var inputs = document.querySelectorAll('input[type=radio]:checked'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        console.log('La case cochée est la n°' + inputs[i].value);
    }
}

// Les listes déroulantes avec selectedIndex et options
var list = document.getElementById('list');

list.addEventListener('change', function() {

	// On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
	console.log(list.options[list.selectedIndex].innerHTML);
	
	// On peut également silmplifier en utilisant list.selectedOptions[0]

});


/*-------------------------------- Les méthodes et un retour sur quelques événements --------------------------------*/
// Les méthodes spécifiques à l'élément <form>
var myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
    alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
    e.preventDefault();
});

myForm.addEventListener('reset', function(e) {
    alert('Vous avez réinitialisé le formulaire !');
});

// La gestion du focus et de la sélection
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var text2 = document.getElementById('text2');

button1.addEventListener('click', function(e) {
	text2.focus();
});

button2.addEventListener('click', function(e) {
	text2.blur();
});

button3.addEventListener('click', function(e) {
	text2.select();
});

