/*------------------------------------------- Le système de datation -------------------------------------------*/
// L'objet Date
// Le constructeur
new Date();
var timestamp = 673380000000;
new Date(timestamp);
var dateString = 'Sat, 04 May 1991 20:00:00 GMT+02:00';
new Date(dateString);
//new Date(année, mois, jour , heure, minutes, secondes, millisecondes); // heure, minutes, secondes, millisecondes étant facultatifs

// Les méthodes statiques
// Obtenir un timestamp à partir d'une date (grâce à parse())
var timestamp = Date.parse('Sat, 04 May 1991 20:00:00 GMT+02:00');
console.log(timestamp); // Affiche : 673380000000

// Les méthodes des instances de l'objet Date (getFullYear() : renvoie l'année sur 4 chiffres
											// getMonth() : renvoie le mois (0 à 11)
											// getDate() : renvoie le jour du mois (1 à 31)
											// getDay() : renvoie le jour de la semaine (0 à 6, la semaine commence le dimanche)
											// getHours() : renvoie l'heure (0 à 23)
											// getMinutes() : renvoie les minutes (0 à 59)
											// getSeconds() : renvoie les secondes (0 à 59)
											// getMilliseconds() : renvoie les millisecondes (0 à 999)
											// getTime() : renvoie le timestamp de la date de votre objet
											// setTime() : vous permet de modifier la date de votre objet en lui passant en unique paramètre un timestamp)
var myDate = new Date('Sat, 04 May 1991 20:00:00 GMT+02:00');

console.log(myDate.getMonth()); // Affiche : 4
console.log(myDate.getDay()); // Affiche : 6

// Les fonctions temporelles
// Déclencher l'appel à une fonction après x secondes (grâce à setTimeout())
function myFunction() {
	console.log('Appel de myFunction');
}

function myFunction(param1, param2) {
	console.log('Appel de myFunction avec en premier paramètre : ' + param1 + ' et en deuxième paramètre : ' + param2);
}

setTimeout(myFunction, 2000); // myFunction sera exécutée au bout de 2 secondes

// Appel à une fonction ayant des paramètres
var param1 = 'param1', param2 = 'param2';
setTimeout(myFunction, 2000, param1, param2);

// Déclencher l'appel à une focntion à intervalle régulier (grâce à setInterval())
setInterval(myFunction, 2000, param1, param2);



// Annuler une action temporelle (grâce à clearTimeout() ou clearInterval())
(function() {

    var button = document.getElementById('myButton'),
        timeLeft = 5;

    var timerID = setTimeout(function() { // On crée notre compte à rebours
        clearInterval(intervalID);
        button.innerHTML = "Annuler le compte à rebours (0s)";
        alert("Vous n'êtes pas très réactif vous !");
    }, 5000);

    var intervalID = setInterval(function() { // On met en place l'intervalle pour afficher la progression du temps
        button.innerHTML = "Annuler le compte à rebours (" + --timeLeft + "s)";
    }, 1000);

    button.addEventListener('click', function() {
        clearTimeout(timerID); // On annule le compte à rebours
        clearInterval(intervalID); // Et l'intervalle
        alert("Le compte à rebours a bien été annulé.");
    });

})();



// Mise en pratique : les animations !
var myImg = document.getElementById('myImg');

function anim() {

    var s = myImg.style,
        result = s.opacity = parseFloat(s.opacity) - 0.1;

    if (result > 0.2) {
        setTimeout(anim, 50); // La fonction anim() fait appel à elle-même si elle n'a pas terminé son travail
    }

}

anim(); // Et on lance la première phase de l'animation





