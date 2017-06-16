function createSimpleNode(nomElement, attributs, contenuElement) {
	// Création de l'élement
	var elementACreer = document.createElement(nomElement);
	
	// Création des attributs
	for (var attribut in attributs) { 
		elementACreer[attribut] = attributs[attribut];
	}
	
	// Création du texte
	if (contenuElement) {
		var labelElement = document.createTextNode(contenuElement);
		elementACreer.appendChild(labelElement);
	}
	
	return elementACreer;
}
