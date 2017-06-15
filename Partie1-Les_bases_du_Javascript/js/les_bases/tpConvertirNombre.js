/* Déclaration des variables*/
var libelleCentaines = 'cent';

/* Déclaration des objets */
var nombresUnites = {
		0 	: 'zero',
		1	: 'un',
		2	: 'deux',
		3 	: 'trois',
		4	: 'quatre',
		5	: 'cinq',
		6	: 'six',
		7	: 'sept',
		8	: 'huit',
		9	: 'neuf',
		10	: 'dix',
		11	: 'onze',
		12 	: 'douze',
		13	: 'treize',
		14	: 'quatorze',
		15	: 'quinze',
		16	: 'seize',
		17	: 'dix-sept',
		18	: 'dix-huit',
		19 	: 'dix-neuf'
};

var nombresDizaines = {		
		2	: 'vingt',
		3	: 'trente',
		4 	: 'quarante',
		5	: 'cinquante',
		6	: 'soixante',
		7 	: 'soixante',
		8	: 'quatre-vingt',
		9	: 'quatre-vingt'
};

/* Déclaration des tableaux*/
var tableauObjets = [];

/* Déclaration des fonctions */
function convertirCentaines(tabChiffreDecompose) {
	var chiffreConverti = '',
		centaines = '',
		dizaines = '',
		indexCentaines = 0,
		indexDizaines = 1,
		indexUnites = 2;
	
	// On récupère la centaine convertit
	if (tabChiffreDecompose[indexCentaines] == 1) {
		centaines = libelleCentaines;
	} else {
		centaines = nombresUnites[tabChiffreDecompose[indexCentaines]] + '-' + libelleCentaines;
	}
	
	if (tabChiffreDecompose[indexDizaines] > 0) {
		// On supprime la centaine maintenant qu'elle est traitée
		tabChiffreDecompose.splice(0,1);
		
		// On récupère les dizaines converties
		dizaines = '-' + convertirDizaines(tabChiffreDecompose);
	} else {
		// Si on est pas en présence du chiffre cent
		if (tabChiffreDecompose[indexUnites] != 0) {
			// On supprime la centaine et la dizaine vu qu'il n y en a pas
			tabChiffreDecompose.splice(0,2);
			dizaines = '-' + convertirUnites(tabChiffreDecompose);
		}		
	}
	
	chiffreConverti = centaines + dizaines;
	
	return chiffreConverti;
}

function convertirDizaines(tabChiffreDecompose) {
	var chiffreConverti = '',
		calculDizaine = '',
		indexDizaines = 0,
		indexUnites = 1;
							
	// Si le chiffre est compris entre 10 et 19, on récupère sa valeur directement, on a pas besoin de recomposer
	calculDizaine = tabChiffreDecompose[0] + tabChiffreDecompose[1];
	if (parseInt(calculDizaine) <= 19) {
		tableauObjets = [nombresUnites];
		chiffreConverti += tableauObjets[indexDizaines][calculDizaine];
	
	// Sinon on doit recomposer la dizaine avec les unités
	} else {
		tableauObjets = [nombresDizaines, nombresUnites];

		chiffreConverti += tableauObjets[indexDizaines][tabChiffreDecompose[indexDizaines]];
		
		// Si on a une dizaine suivi d'un "1", il faut ajouter un "-et-" entre la dizaine et l'unité (sauf pour les 8* et 9*)
		if (tabChiffreDecompose[indexDizaines] < 8 && tabChiffreDecompose[indexUnites] == 1) {
			chiffreConverti += '-et';
		}
			
		// Si la dizaine est inférieure à 7 ou égale à 8, on va piocher dans les unités de 1 à 9 pour finir la recomposition
		if (tabChiffreDecompose[indexDizaines] < 7 || tabChiffreDecompose[indexDizaines] == 8) {
			// Si cela ne se termine pas par zéro
			if (tabChiffreDecompose[indexUnites] != 0) {
				chiffreConverti += '-';
				chiffreConverti += tableauObjets[indexUnites][tabChiffreDecompose[indexUnites]];
			}

		// Si la dizaine est égale à 7 ou 9, on va piocher dans les unités de 10 à 19 pour finir la recomposition
		} else if (tabChiffreDecompose[indexDizaines] == 7 || tabChiffreDecompose[indexDizaines] == 9) {
			chiffreConverti += '-';
			chiffreConverti += tableauObjets[indexUnites][parseInt(tabChiffreDecompose[indexUnites])+10];
		}
	}				
	
	return chiffreConverti;
}

function convertirUnites(tabChiffreDecompose) {
	var indexUnites=0;
	
	return nombresUnites[tabChiffreDecompose[indexUnites]];
}

function convertirChiffresEnLettres(chiffre) {
	var chiffreConverti = '';
	var tabChiffreDecompose = chiffre.toString().split('');
	var tailleChiffre = tabChiffreDecompose.length;
	
	if (tailleChiffre==3) {
		chiffreConverti = convertirCentaines(tabChiffreDecompose);
	} else if(tailleChiffre==2) {
		chiffreConverti = convertirDizaines(tabChiffreDecompose);
	} else if(tailleChiffre==1) {
		chiffreConverti = convertirUnites(tabChiffreDecompose);
	} else {
		alert('Veuillez renseigner un chiffre entre 0 et 999');
	}
	
	return chiffreConverti;
}

/* Main */
while(chiffreRenseigneParUtilisateur = prompt('Entrez un chiffre svp')) {
	// On vérifie si l'utilisateur a renseigné un nombre
	parseInt(chiffreRenseigneParUtilisateur);
	if (!isNaN(chiffreRenseigneParUtilisateur)) {
		alert(convertirChiffresEnLettres(chiffreRenseigneParUtilisateur));
	} else {
		alert('ATTENTION, seuls les chiffres sont autorisés');
	}	
}
