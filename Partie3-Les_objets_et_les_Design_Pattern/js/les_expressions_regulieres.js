/*------------------------------------------- Les regex en JavaScript -------------------------------------------*/
var myRegex = /contenu_à_rechercher/;
var regex_2 = /contenu_\/_contenu/; // La syntaxe est bonne car le slash est échappé avec un anti-slash

// Recherche de présence d'une chaine dans une autre (grâce à test())
if (myRegex.test('Chaîne de caractères dans laquelle effectuer la recherche')) {
    console.log('Chaine trouvée');
} else {
	console.log('Chaine pas trouvée'); // On passera ici dans le cas présent
}


/*------------------------------------------- Recherches de mots -------------------------------------------*/
// Autre recherche de présence d'une chaine dans une autre (grâce à test())
if (/raclette/.test('Je mangerais bien une raclette savoyarde !')) {
    console.log('Ça semble parler de raclette');
} else {
	console.log('Pas de raclette à l\'horizon');
}

// Recherche en ignorant la casse (grâce à "i")
if (/Raclette/i.test('Je mangerais bien une raclette savoyarde !')) {
	console.log('Ça semble parler de raclette');
} else {
	console.log('Pas de raclette à l\'horizon');
}

// Recherche avec un opérateur OU ("|")
if (/Raclette|Tartiflette/i.test('Je mangerais bien une tartiflette savoyarde !')) {
	console.log('Ça semble parler de trucs savoyards');
} else {
	console.log('Pas de plats légers à l\'horizon');
}

// Début et fin de chaîne (symboles "^" pour le début et "$" pour la fin)
if (/^Je mangerais/i.test('Je mangerais bien une raclette savoyarde !')) {
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}


/*------------------------------------------- Les caractères et leurs classes -------------------------------------------*/
// Recherche de différents caractères (grâce à [xyz])
if (/Cette tartiflette est gr[ao]sse/.test('Cette tartiflette est grosse')) { // Cherche grosse ou grasse dans le String
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}

// Les intervalles de caractères (grâce à [a-z0-9])
if (/Cette tartiflette est gr[a-z0-9]sse/.test('Cette tartiflette est grosse')) { // Cherche dans l'intervalle a->z
																				  // ou 0->9
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}

// Exclure des caractères (grâce à [^xyz])
if (/Cette tartiflette est gr[^a-n]sse/.test('Cette tartiflette est grosse')) { // Cherche en excluant les caractères
																				// de a->n
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}

// Trouver un caractère quelconque (grâce au ".")
if (/Cette tartiflette est gr[.]sse/.test('Cette tartiflette est grosse')) { // Cherche avec nimporte quel caractère
																			 // à la place du point
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}


/*------------------------------------------- Les quantificateurs -------------------------------------------*/
// Les trois symboles quantificateurs (? : ce symbole indique que le caractère qui le précède peut apparaître 0 ou 1 fois
									// + : ce symbole indique que le caractère qui le précède peut apparaître 1 ou plusieurs fois
									// * : ce symbole indique que le caractère qui le précède peut apparaître 0, 1 ou plusieurs fois)

if (/raclett?e/.test('Cette raclete est grosse')) { //  Raclette peut être écrit avec 1 ou 2 "t"
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}

// Les accolades ({n} : le caractère est répété n fois 
			   // {n,m} : le caractère est répété de n à m fois. Par exemple, si on a {0, 5}, le caractère peut être présent de 0 à 5 fois
			   // {n,} : le caractère est répété de n fois à l'infini)

if (/raclet{1,3}e/.test('Cette raclete est grosse')) { //  Raclette peut être écrit avec 1, 2 ou 3 "t"
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}


/*------------------------------------------- Les métacaractères -------------------------------------------*/
// Les métacaractères au sein des classes
if (/[a-z!?\/\\]/.test('Cette raclete est grosse')) { // Rechercher un caractère de a à z ou les 
													  // métacaractères ! et ? ou un slash ou un anti-slash
	console.log('Regex trouvée');
} else {
	console.log('Regex pas trouvée');
}


/*------------------------------------------- Construire une regex -------------------------------------------*/
// Test de la syntaxe d'une adresse mail
var email = prompt("Entrez votre adresse e-mail :", "javascript@siteduzero.com");

if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
	console.log("Adresse e-mail valide !");
} else {
	console.log("Adresse e-mail invalide !");
}


/*------------------------------------------- L'objet RegExp -------------------------------------------*/
var myRegex1 = /^Raclette$/i;  // Version primitive

var nickname = "Sébastien";  
var myRegex = new RegExp("Mon prénom est " + nickname, "i");  // Via la classe RegExp

// Méthodes (test() ou exec())
var sentence = "Si ton tonton";

var result = /\bton\b/.exec(sentence); // On cherche à récupérer le mot « ton »

if (result) { // On vérifie que ce n'est pas null
    console.log(result); // Affiche « ton »
}


/*------------------------------------------- Les parenthèses -------------------------------------------*/
// Les parenthèses capturantes
var birth = 'Je suis né en mars';

/^Je suis né en (\S+)$/.exec(birth);

console.log(RegExp.$1); // Affiche : « mars »

// Principe appliquée aux emails
var email = prompt("Entrez votre adresse e-mail :", "javascript@siteduzero.com");

if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email)) {
	console.log('Partie locale : ' + RegExp.$1 + '\nDomaine : ' + RegExp.$2 + '\nExtension : ' + RegExp.$3);
} else {
	console.log('Adresse e-mail invalide !');
}


/*------------------------------------------- Les recherches non-greedy -------------------------------------------*/
var html = '<a href="www.mon-adresse.be"><strong class="web">Mon site</strong></a>';

/<a href="(.+?)">/.exec(html); // Mettre le ? à la fin permet de faire comprendre au JS qu'il faut s'arrêter à la première occurence

console.log(RegExp.$1);


/*------------------------------------------- Rechercher et remplacer -------------------------------------------*/
var sentence = 'Je m\'appelle Sébastien';
var result = sentence.replace(/Sébastien/, 'Johann');

console.log(result); // Affiche : « Je m'appelle Johann »

// L'option g (permet d'appliquer sur la regex sur toutes les occurences)
var sentence = 'Il s\'appelle Sébastien. Sébastien écrit un tutoriel.';
var result = sentence.replace(/Sébastien/g, 'Johann');

console.log(result); // Il s'appelle Johann. Johann écrit un tutoriel.

// Rechercher et capturer
var date = '05/26/2011';
date = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'Le $2/$1/$3');

console.log(date); // Le 26/05/2011

var text = 'bla bla [b]un peu de texte[/b] bla [b]bla bla en gras[/b] bla bla';

text = text.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>');

console.log(text);

// Fonction permettant de remplacer du bbcode par du html
function preview() {
    var value = document.getElementById("text").value;

    value = value.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>'); // Gras
    value = value.replace(/\[i\]([\s\S]*?)\[\/i\]/g, '<em>$1</em>'); // Italique
    value = value.replace(/\[s\]([\s\S]*?)\[\/s\]/g, '<del>$1</del>'); // Barré
    value = value.replace(/\[u\]([\s\S]*?)\[\/u\]/g, '<span style="text-decoration: underline">$1</span>'); // Souligné

    document.getElementById("output").innerHTML = value;
}

// Utiliser une fonction pour le remplacement
function num2Letters(number) {

    if (isNaN(number) || number < 0 || 999 < number) {
        return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
    }

    var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
        tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

    var units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;

    var unitsOut, tensOut, hundredsOut;


    if (number === 0) {

        return 'zéro';

    } else {

        // Traitement des unités

        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];

        // Traitement des dizaines

        if (tens === 1 && units > 0) {

            tensOut = units2Letters[10 + units];
            unitsOut = '';

        } else if (tens === 7 || tens === 9) {

            tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
            unitsOut = '';

        } else {

            tensOut = tens2Letters[tens];

        }

        tensOut += (units === 0 && tens === 8 ? 's' : '');

        // Traitement des centaines

        hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

        // Retour du total

        return hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;
    }

}

function convertNumbers(str) {
    str = parseInt(str);

    if (!isNaN(str)) {
        return num2Letters(str);
    }    
}

var sentence = 'Dans 22 jours, j\'aurai 24 ans';

var result = sentence.replace(/(\d+)/g, convertNumbers);
console.log(result);


/*------------------------------------------- Autres recherches -------------------------------------------*/
// Rechercher la position d'une occurrence (grâce à search())
var sentence = 'Si ton tonton';
var result = sentence.search(/\bton\b/);

if (result > -1) { // On vérifie que quelque chose a été trouvé
	console.log('La position est ' + result); // 3
}

// Récupérer toutes les occurrences et éventuellement du coup les compter (grâce à match())
var sentence = 'Si ton tonton tond ton tonton, ton tonton tondu sera tondu';
var result = sentence.match(/\btonton\b/g);

console.log('Il y a ' + result.length + ' "tonton" :\n\n' + result);

// Couper avec une regex (grâce à split() + regex)
var family = 'Guillaume,Pauline;Clarisse:Arnaud;Benoît;Maxime';
var result = family.split(/[,:;]/);

console.log(result);


