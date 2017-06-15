function askNumber() {
	var nombre;
	while (true) {
		nombre = parseInt(prompt('Veuillez renseigner un nombre svp : '));
		
		if (!isNaN(nombre)) {
			break;
		}		
	}
	
	return nombre;
}

console.log('Le nombre est : ' + askNumber());