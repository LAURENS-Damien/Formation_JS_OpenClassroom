// Contrôles sur les champs du formulaire
(function() {
	/* -------------------------------------------------- Déclaration des variables, tableaux et objets utilisés dans les fonctions -------------------------------------------------- */
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
	
	// Autres variables
	var inputStyleDefaut = getComputedStyle(formulaireNom);
	var isSexeRenseigne = false;
	var nbCaracteresNom = 2;
	var nbCaracteresPrenom = 2;
	var nbCaracteresPseudo = 4;
	var nbCaracteresMDP = 6;
	var debutPlageAge = 5;
	var finPlageAge = 140;
	
	// On initialise les messages d'erreurs
	var erreurSaisieSexe = 'Il faut choisir un sexe';
	var erreurSaisieNom = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de renseigner au moins ' + nbCaracteresNom + ' caractères');
	var erreurSaisiePrenom = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de renseigner au moins ' + nbCaracteresPrenom + ' caractères');
	var erreurSaisieAge = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de renseigner un nombre compris entre ' + debutPlageAge + ' et ' + finPlageAge);
	var erreurSaisiePseudo = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de renseigner au moins ' + nbCaracteresPseudo + ' caractères');
	var erreurSaisieMDP = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de renseigner au moins ' + nbCaracteresMDP + ' caractères');
	var erreurSaisieMDPConf = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Les mots de passes ne sont pas identiques');
	var erreurSaisiePays = createSimpleNode('span', {style: 'color: red; margin-left: 10px;'}, 'Merci de sélectionner un pays');
	
	// On crée un objet contenant les booléens permettant de savoir si des messages d'erreurs sont affichés
	var messagesErreur = {
		isMessageErreurNomAffiche: false,
		isMessageErreurPrenomAffiche: false,
		isMessageErreurAgeAffiche: false,
		isMessageErreurPseudoAffiche: false,
		isMessageErreurMDPAffiche: false,
		isMessageErreurMDPConf: false,
		isMessageErreurPays: false
	};
	
	// On crée un objet contenant la liste des champs déjà contrôlés sans soumission du formulaire
	var tableauElementsControles = {
			formulaireNomChecked: false,
			formulairePrenomChecked: false,
			formulaireAgeChecked: false,
			formulairePseudoChecked: false,
			formulaireMDPChecked: false,
			formulaireMDPConfChecked: false,
			formulairePaysChecked: false
	}
	
	/* -------------------------------------------------- Main -------------------------------------------------- */
	// Par défaut, on désactive le bouton de validation du formulaire
	boutonSubmit.disabled = true;
	
	// Vérification du nom
	verifNom();
	
	// Vérification du prénom
	verifPrenom();
	
	// Vérification de l'âge
	verifAge();
	
	// Vérification du pseudo
	verifPseudo();
	
	// Vérification du mot de passe
	verifMDP();
	
	// Vérification de la confirmation du mot de passe
	verifMDPConf();
	
	// Vérification du pays
	verifPays()
	
	// Création de l'évènement traitant le submit
	formulaire.addEventListener('submit', function(e) {	
		
		// Vérification du sexe
		verifSexe(e);

	});
	
	/* -------------------------------------------------- Déclaration des fonctions de contrôles -------------------------------------------------- */	
	// Méthode vérifiant si le sexe est sélectionné
	function verifSexe(e) {
		// On vérifie que le sexe est sélectionné
		var formulaireSexeInputs = formulaireSexe.getElementsByTagName('input');
		for(var i = 0, taille = formulaireSexeInputs.length; i < taille; i++) {
			if(formulaireSexeInputs[i].checked) {
				isSexeRenseigne = true;
			}
		}
		
		if (!isSexeRenseigne) {
			alert(erreurSaisieSexe);
			e.preventDefault();
		}
	}
	
	// Méthode vérifiant le nom
	function verifNom() {

		formulaireNom.addEventListener('blur', function(e) {			
			controleNombreCaracteres(formulaireNom, erreurSaisieNom, "isMessageErreurNomAffiche", nbCaracteresNom);
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulaireNomChecked');	
		});
		
	}
	
	// Méthode vérifiant le nom
	function verifPrenom() {

		formulairePrenom.addEventListener('blur', function(e) {
			controleNombreCaracteres(formulairePrenom, erreurSaisiePrenom, "isMessageErreurPrenomAffiche", nbCaracteresPrenom);
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulairePrenomChecked');		
		});
		
	}
	
	// Méthode vérifiant l'âge
	function verifAge() {

		formulaireAge.addEventListener('blur', function(e) {
			controlePlageValeurs(formulaireAge, erreurSaisieAge, "isMessageErreurAgeAffiche",debutPlageAge, finPlageAge);
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulaireAgeChecked');						
		});
		
	}
	
	// Méthode vérifiant le pseudo
	function verifPseudo() {

		formulairePseudo.addEventListener('blur', function(e) {
			controleNombreCaracteres(formulairePseudo, erreurSaisiePseudo, "isMessageErreurPseudoAffiche", nbCaracteresPseudo);	
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulairePseudoChecked');		
		});
		
	}
	
	// Méthode vérifiant le mot de passe
	function verifMDP() {

		formulaireMDP.addEventListener('blur', function(e) {
			controleNombreCaracteres(formulaireMDP, erreurSaisieMDP, "isMessageErreurMDPAffiche", nbCaracteresMDP);
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulaireMDPChecked');		
		});
		
	}
	
	// Méthode vérifiant la confirmation du mot de passe
	function verifMDPConf() {

		formulaireMDPConf.addEventListener('blur', function(e) {
			controleChampsIdentiques(formulaireMDPConf, erreurSaisieMDPConf, "isMessageErreurMDPConfAffiche", formulaireMDP);
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulaireMDPConfChecked');		
		});
		
	}
	
	// Méthode vérifiant le pays
	function verifPays() {

		formulairePays.addEventListener('blur', function(e) {
			controleNombreCaracteres(formulairePays, erreurSaisiePays, "isMessageErreurPaysAffiche", 1);
			// On contrôle si d'autres champs sont encore invalides
			activationDesactivationBoutonSubmit('formulairePaysChecked');		
		});
		
	}
	
	function controleNombreCaracteres(element, messageErreur, typeMessageErreurAffiche, nombreDeCaractères) {
		isMessageErreurAffiche = messagesErreur[typeMessageErreurAffiche];
		// Si le nombre de caractère est trop faible on met en rouge le champ, on affiche un message et on désactive le bouton de validation du formulaire
		if (element.value.length < nombreDeCaractères) {
			if (!isMessageErreurAffiche) {
				element.parentNode.appendChild(messageErreur);
				element.style.border = '2px solid red';
			}			
			messagesErreur[typeMessageErreurAffiche] = true;
			boutonSubmit.disabled = true
		// Si le nombre de caractère est OK on supprime le message d'erreur, on remet le style du champ par défaut et on réactive le bouton de validation du formulaire
		} else if(element.value.length >= nombreDeCaractères && isMessageErreurAffiche) {
			element.parentNode.removeChild(messageErreur);
			element.style = inputStyleDefaut;
			messagesErreur[typeMessageErreurAffiche] = false;
			boutonSubmit.disabled = false;
		// On rentre directement le nombre  de caractères requis
		} else {
			boutonSubmit.disabled = false;
		}
	}
	
	function controleChampsIdentiques(element, messageErreur, typeMessageErreurAffiche, elementAComparer) {
		isMessageErreurAffiche = messagesErreur[typeMessageErreurAffiche];
		// Si le nombre de caractère est trop faible on met en rouge le champ, on affiche un message et on désactive le bouton de validation du formulaire
		if (elementAComparer.value != element.value) {
			if (!isMessageErreurAffiche) {
				element.parentNode.appendChild(messageErreur);
				element.style.border = '2px solid red';
			}			
			messagesErreur[typeMessageErreurAffiche] = true;
			boutonSubmit.disabled = true
		// Si le nombre de caractère est OK on supprime le message d'erreur, on remet le style du champ par défaut et on réactive le bouton de validation du formulaire
		} else if(elementAComparer.value == element.value && isMessageErreurAffiche) {
			element.parentNode.removeChild(messageErreur);
			element.style = inputStyleDefaut;
			messagesErreur[typeMessageErreurAffiche] = false;
			boutonSubmit.disabled = false;
		// On rentre directement le nombre  de caractères requis
		} else {
			boutonSubmit.disabled = false;
		}
	}
	
	function controlePlageValeurs(element, messageErreur, typeMessageErreurAffiche, debutPlageValeurs, finPlageValeurs) {
		isMessageErreurAffiche = messagesErreur[typeMessageErreurAffiche];
		// Si le nombre n'est pas dans la plage on met en rouge le champ, on affiche un message et on désactive le bouton de validation du formulaire
		if (isNaN(parseInt(element.value)) || ((element.value < debutPlageValeurs || element.value > finPlageValeurs) && !isMessageErreurAffiche)) {
			element.parentNode.appendChild(messageErreur);
			element.style.border = '2px solid red';
			messagesErreur[typeMessageErreurAffiche] = true;
			boutonSubmit.disabled = true
		// Si le nombre est dans la plage de valeurs on supprime le message d'erreur, on remet le style du champ par défaut et on réactive le bouton de validation du formulaire
		} else if((element.value >= debutPlageValeurs || element.value <= finPlageValeurs) && isMessageErreurAffiche) {
			element.parentNode.removeChild(messageErreur);
			element.style = inputStyleDefaut;
			messagesErreur[typeMessageErreurAffiche] = false;
			boutonSubmit.disabled = false;
		// On rentre directement un nombre dans la plage de valeurs
		} else {
			boutonSubmit.disabled = false;
		}
	}
	
	function activationDesactivationBoutonSubmit(element) {
		var boutonSubmitADesactiver = false;
		
		if (tableauElementsControles[element] == false) {
			tableauElementsControles[element] = true;			
		}
		
		// On contrôle si tous les élements ont eu un focus au moins une fois
		for(element in tableauElementsControles) {
			if (tableauElementsControles[element] == false) {
				boutonSubmitADesactiver = true;
			}
		}
		
		// Si il y a encore un champ non valide
		for(message in messagesErreur) {
			if (messagesErreur[message] == true) {
				boutonSubmitADesactiver = true;
			}
		}
		
		// Si des champs sont encore non valides on désactive le bouton de validation
		if (boutonSubmitADesactiver) {
			boutonSubmit.disabled = true;
		} else {
			boutonSubmit.disabled = false;
		}
		
	}
	
})();
