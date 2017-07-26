var rechercheVille = document.getElementById('rechercheVille'),
	listeVilles = document.getElementById('listeVilles');

var villeCourante = '', villePrecedente = '', idVilleCourante = -1, nombreVilles = 0;

// Appel AJAX pour recherche les villes correspondant à la recherche
function lanceRecherche(rechercheVilleValue) {

	// On envoi la recherche à la fonction PHP
	var xhr = new XMLHttpRequest();

	// On récupère les informations côté PHP
	xhr.open('GET', '../TP_auto_completion.php?chaineAChercher=' + rechercheVilleValue);

	//Réception des données
	xhr.addEventListener('readystatechange', function() {

	    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	    	
	    	var villes = xhr.responseText.split('|');

	    	if (villes != '') {

	    		listeVilles.style = "display: block";
	    		nombreVilles = villes.length
	    		
		    	for(var i = 0, taille = nombreVilles; i < taille; i++) {		    		
		    		var ville = listeVilles.appendChild(document.createElement('div'));
		    		ville.innerHTML = villes[i];
		    		ville.id = 'ville' + i;
		    	}    	
	    	} else {
	    		listeVilles.style = "display: none";
	    	}
	    }
	});

	xhr.send(null); // La requête est prête, on envoie tout !
}

// On lance la recherche à chaque fois qu'une touche est relâchée
rechercheVille.addEventListener('keyup', function(e) {

	// Si on appui sur la touche "Bas"
	if (e.keyCode == 40) {
		console.log('Valeur avant de rentrer' + idVilleCourante);
		if (idVilleCourante < nombreVilles-1) {
			idVilleCourante++;
	
			
			villeCourante = document.getElementById('ville'+idVilleCourante);
			villeCourante.className = 'champ_selectionne';
			
			// Si le courant n'est pas le premier résultat de la liste
			if (idVilleCourante > 0) {
				villePrecedente = document.getElementById('ville'+(idVilleCourante-1));
				villePrecedente.className = '';
			}
		}
	
	// Si on appui sur la touche "Haut"
	} else if (e.keyCode == 38) {
		console.log('Valeur avant de rentrer' + idVilleCourante);
		if (idVilleCourante > 0) {
			
			idVilleCourante--;		
			
			villeCourante = document.getElementById('ville'+idVilleCourante);
			villeCourante.className = 'champ_selectionne';
			
			// Si le courant n'est pas le premier résultat de la liste
			if (idVilleCourante > -1) {
				villePrecedente = document.getElementById('ville'+(idVilleCourante+1));
				villePrecedente.className = '';
			}	
		}
		
	// Si on appui sur la touche "Entrée"
	} else if (e.keyCode == 13) {
		// On affecte le contenu de la ville sélectionné au champ de recherche
		rechercheVille.value = villeCourante.innerHTML;
		listeVilles.style = "display: none";
		listeVilles.innerHTML = '';
		idVilleCourante = -1;
		nombreVilles = 0;
	} else {
		listeVilles.innerHTML = '';
		lanceRecherche(rechercheVille.value);
		idVilleCourante = -1;
	}
});

// Permet de sélectionner une des propositions de la liste
listeVilles.addEventListener('mouseup', function(e) {
	rechercheVille.value = e.target.innerHTML;
	listeVilles.style = "display: none";
	listeVilles.innerHTML = '';
});
