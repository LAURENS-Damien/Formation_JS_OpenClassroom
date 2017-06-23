// Contrôles sur les champs du formulaire
(function() {
	// On initialise les variables relatives aux champs du formulaire
	var formulaire = document.getElementById("formulaire");
	var formulaireSexe = document.getElementById("formulaireSexe");
	var formulaireNom = document.getElementById("formulaireNom");
	var formulairePrenom = document.getElementById("formulairePrenom");
	var formulaireAge = document.getElementById("formulaireAge");
	var formulairePseudo = document.getElementById("formulairePseudo");
	var formulaireMDP = document.getElementById("formulaireMDP");
	var formulaireMDPConf = document.getElementById("formulaireMDPConf");
	var formulairePays = document.getElementById("formulairePays");
	var formulaireAboNewsletter = document.getElementById("formulaireAboNewsletter");
	var boutonSubmit = document.getElementById("boutonSubmit");
	
	// On initialise les messages d'erreurs
	var erreurSaisieNom = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de renseigner au moins 2 caractères');
	
	// Autres variables
	var inputStyleDefaut = getComputedStyle(formulaireNom);
	var alerteSexeNonRenseigne = false;
	var messageErreurNomAffiche = false;
	
	// Création de l'évènement traitant le submit
	formulaire.addEventListener('submit', function(e) {	
		
		// Vérification du sexe
		verfifSexe(e);

	});
	
	// Vérification du nom
	verfifNom();
	
	// Méthode vérifiant si le sexe est sélectionné
	function verfifSexe(e) {
		// On vérifie que le sexe est sélectionné
		var formulaireSexeInputs = formulaireSexe.getElementsByTagName('input');
		for(var i = 0, taille = formulaireSexeInputs.length; i < taille; i++) {
			if(formulaireSexeInputs[i].checked) {
				alerteSexeNonRenseigne = true;
			}
		}
		
		if (!alerteSexeNonRenseigne) {
			alert('Il faut choisir un sexe');
			e.preventDefault();
		}
	}
	
	// Méthode vérifiant le nom
	function verfifNom() {
		var champAVerifier = formulaireNom;
		formulaireNom.addEventListener('blur', function(e) {
//			// Si le nombre de caractère est trop faible on met en rouge le champ, on affiche un message et on désactive le bouton de validation du formulaire
//			if (formulaireNom.value.length < 2 && !messageErreurNomAffiche) {
//				formulaireNom.parentNode.appendChild(erreurSaisieNom);
//				formulaireNom.style.border = '2px solid red';
//				messageErreurNomAffiche = true;
//				boutonSubmit.disabled = true
//			// Si le nombre de caractère est OK on supprime le message d'erreur, on remet le style du champ par défaut et on réactive le bouton de validation du formulaire
//			} else if(formulaireNom.value.length >= 2 && messageErreurNomAffiche) {
//				formulaireNom.parentNode.removeChild(erreurSaisieNom);
//				formulaireNom.style = inputStyleDefaut;
//				messageErreurNomAffiche = false;
//				boutonSubmit.disabled = false;
//			}
			controleNombreCaracteres(formulaireNom, erreurSaisieNom, messageErreurNomAffiche);
		});
	}
	
	function controleNombreCaracteres(element, messageErreur, isMessageErreurAffiche) {
		// Si le nombre de caractère est trop faible on met en rouge le champ, on affiche un message et on désactive le bouton de validation du formulaire
		if (element.value.length < 2 && !isMessageErreurAffiche) {
			element.parentNode.appendChild(messageErreur);
			element.style.border = '2px solid red';
			isMessageErreurAffiche = true;
			boutonSubmit.disabled = true
		// Si le nombre de caractère est OK on supprime le message d'erreur, on remet le style du champ par défaut et on réactive le bouton de validation du formulaire
		} else if(element.value.length >= 2 && isMessageErreurAffiche) {
			element.parentNode.removeChild(messageErreur);
			element.style = inputStyleDefaut;
			isMessageErreurAffiche = false;
			boutonSubmit.disabled = false;
		}
	}
	
})();
