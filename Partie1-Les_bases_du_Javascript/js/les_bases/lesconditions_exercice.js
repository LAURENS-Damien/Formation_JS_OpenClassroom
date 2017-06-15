var age = parseInt(prompt("Merci de renseigner votre \u00E2ge svp :"));

var tranche1a17 = 'Vous n\'\u00EAtes pas encore majeur.';
var tranche18a49 = 'Vous \u00EAtes majeur mais pas encore senior.';
var tranche50a59 = 'Vous \u00EAtes senior mais pas encore retrait\u00E9.';
var tranche60a120 = 'Vous \u00EAtes retrait\u00E9, profitez de votre temps libre !';
var trancheIncorrecte = 'L\'\u00E2ge renseign\u00E9 n\'est pas correct';
var erreurSaisie = 'Merci de renseigner obligatoirement un \u00E2ge';

if (age < 1 || age > 120 ) {
	console.log(trancheIncorrecte);
} else if (age >= 1 && age <= 17 ) {
	console.log(tranche1a17);
} else if (age >= 18 && age <= 49 ) {
	console.log(tranche18a49);
} else if (age >= 50 && age <= 59 ) {
	console.log(tranche50a59);
} else if (age >= 60 && age <= 120 ) {
	console.log(tranche60a120);
} else {
	console.log(erreurSaisie);
}