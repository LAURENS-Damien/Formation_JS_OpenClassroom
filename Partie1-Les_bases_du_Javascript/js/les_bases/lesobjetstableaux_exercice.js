// Exercice récapitulatif
var nicks = [],
    nick;

while (nick=prompt('Entrez un prénom :')) { // Si la valeur assignée à la variable « nick » est renseignée
	nicks.push(nick); // Ajoute le nouveau prénom au tableau
}

if (nicks.length > 0) {
	alert(nicks.join(' ')); // Affiche les prénoms à la suite séparés par un espace
} else {
	alert('Veuillez renseigner au moins 1 prénom svp')
}

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Écrire une boucle for pour parcourir un tableau
// Le code ci-dessous initialise un tableau avec quelques valeurs. Ecrivez une boucle for pour parcourir ce tableau et 
// afficher chaque valeur avec une alert(). Utilisez var pour déclarer la ou les variables au sein de la boucle.
var array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

for(var i=0, c=array.length; i < c; i++ ) {
	alert(array[i]);
}

/*------------------------------------------------------------------------------------------------------------------------------------------------*/
// Écrire un objet littéral et le parcourir avec for in
// Définissez un objet littéral pour présenter votre famille (père, mère, soeur, frère, cousin...). 
// Dès que c'est fait, écrivez une boucle for in pour parcourir cet objet et afficher chaque membre avec une alert().
var family = {
	pere: 'Bernard',
	mere: 'Sylvie',
	cousin1: 'Sébastien',
	cousin2: 'Anthony'
};

for(var id in family) {
	alert(family[id]);
}
