<?php
function chercheVilles($chaineAChercher) {
	//var_dump('coucou');
	
	// Tableau contenant les villes concernées par la recherche
	$resultats = [];
	
	// La chaine de caractères tapper dans la fenêtre de recherche
	//$chaineAChercher = 'Pa';
	
	// On récupère la liste des villes sérialisées
	$fichierVilles = file_get_contents('files/towns.txt', FILE_USE_INCLUDE_PATH);
	$villes = unserialize($fichierVilles);
	
	// On parcourt toutes les villes afin de chercher une correspondance avec notre recherche
	foreach ($villes as $ville) {
		$position = stripos($ville, $chaineAChercher);
		
		// On vérifie si la chaine de caractères à chercher est présente dans l'occurence
		if($position === 0) {
			// Si elle est présente, on l'ajoute à notre tableau de résultats
			array_push($resultats, $ville);
		}
	}
	
	// On concatène toutes les valeurs du tableau dans une chaine de caractères avec le séparateur "|"
	echo implode("|", $resultats);
}

//var_dump($_GET['chaineAChercher']);
chercheVilles($_GET['chaineAChercher']);
?>