/*------------------------------------------- Objet constructeur -------------------------------------------*/
// Définition de l'objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;
}

// On crée des variables qui vont contenir une instance de l'objet Person :
var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
var lau = new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []);

console.log(seb.nick); // Affiche : « Sébastien »
console.log(lau.nick); // Affiche : « Laurence »

// Test si une variable est une instance d'un objet
console.log(seb instanceof Person); // Affiche true

// Modifier les données
seb.nick = 'Bastien'; // On change le prénom
seb['age'] = 18;      // On change l'âge

console.log(seb.nick + ' a ' + seb.age + ' ans'); // Affiche : « Bastien a 18 ans »

// Stocker des objets dans un tableau
var myArray = [
    new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []),
    new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []),
    new Person('Ludovic', 9, 'm', 'frère', 'Etudiant', []),
    new Person('Pauline', 16, 'f', 'cousine', 'Etudiante', []),
    new Person('Guillaume', 16, 'm', 'cousin', 'Dessinateur', []),
];

// Pour récupérer la valeur 'work' du premier objet
console.log(myArray[0].work);

/*------------------------------------------- Ajouter des méthodes -------------------------------------------*/
// Définir une méthode dans le constructeur
function Person2(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

    this.addFriendByConstructor = function(nick, age, sex, parent, work, friends) {
        this.friends.push(new Person2(nick, age, sex, parent, work, friends));
    };
}

// Définir une méthode par prototype
Person2.prototype.addFriendByPrototype = function(nick, age, sex, parent, work, friends) {
    this.friends.push(new Person2(nick, age, sex, parent, work, friends));
}

/*---------------------------------- Ajouter des méthodes aux objets natifs ----------------------------------*/
// Ajout de méthodes
// Testons si cette méthode n'existe pas déjà !
if (!Object.prototype.debug) {

    // Créons la méthode
    Object.prototype.debug = function() {
        var text = 'Object {\n';
        
        for (var i in this) {
            if (i !== 'debug') {   
                text += '    [' + i + '] => ' + this[i] + '\n';    
            }
        }
        
        alert(text + '}');
    }

}

var family = {
    self: 'Sébastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

family.debug();



/*------------------------------------------- Les namespaces -------------------------------------------*/
// Définir un namespace
var thundersebWebMail = {
    // Propriétés
    version: 1.42,
    lang: 'english',

    // Initialisation
    init: function() { /* initialisation */ },

    // Gestion des mails
    mails: {
        list: function() { /* affiche la liste des mails */ },
        show: function() { /* affiche un mail */ },
        trash: function() { /* supprime un mail */ },
        // et cætera…
    },

    // Gestion des contacts
    contacts: {
        list: function() { /* affiche la liste des contacts */ },
        edit: function() { /* édite un contact */ },
        // et cætera…
    }
};

// Vérifier l'unicité du namespace
// On vérifie l'existence de l'objet myNamespace
if (typeof thundersebWebMail === 'undefined') {

    var thundersebWebMail = {
        // Tout le code
    };

} else {
    alert('thundersebWebMail existe déjà !');
}



/*------------------------------------------- Modifier le contexte d'une méthode -------------------------------------------*/
// Exemple avec la méthode call
var tableau = ['test1', 'test2'];
var result1 = tableau.toString();
var result2 = Object.prototype.toString.call(tableau);

console.log(result1); // Affiche : « test1, test2 »
console.log(result2); // Affiche : « [object Array] »

// Différence entre call et apply
var myArray = [];
// Apply prend en deuxième paramètre un tableau de valeurs
myArray.push.apply(myArray, [1, 2, 3]); // Equivalent à « myArray.push(1, 2, 3); »
// Call prend une infinité de paramètres
myArray.push.call(myArray, 1, 2, 3); 	// Equivalent à « myArray.push(1, 2, 3); »

/*------------------------------------------- L'héritage -------------------------------------------*/
// Déclaration d'une classe Vehicle qui va permettre de créer une voiture et un camion
function Vehicle(licensePlate, tankSize) {
    this.engineStarted = false; // Notre véhicule est-il démarré ?
    this.licensePlate = licensePlate; // La plaque d'immatriculation de notre véhicule.
    this.tankSize = tankSize; // La taille de notre réservoir en litres.
}

// Permet de démarrer notre véhicule.
Vehicle.prototype.start = function() {
    this.engineStarted = true;
};

// Permet d'arrêter notre véhicule.
Vehicle.prototype.stop = function() {
    this.engineStarted = false;
};


// Création de la voiture
function Car(licensePlate, tankSize, trunkSize) {
    // On appelle le constructeur de « Vehicle » par le biais de la méthode
    // call() afin qu'il affecte de nouvelles propriétés à « Car ».
    Vehicle.call(this, licensePlate, tankSize);

    // Une fois le constructeur parent appelé, l'initialisation de notre objet peut continuer.
    this.trunkOpened = false; // Notre coffre est-il ouvert ?
    this.trunkSize = trunkSize; // La taille de notre coffre en mètres cube.
}

// L'objet prototype de « Vehicle » doit être copié au sein du prototype
// de « Car » afin que ce dernier puisse bénéficier des mêmes méthodes.
Car.prototype = Object.create(Vehicle.prototype, {
    // Le prototype copié possède une référence vers son constructeur, actuellement
    // défini à « Vehicle », nous devons changer sa référence pour « Car »
    // tout en conservant sa particularité d'être une propriété non-énumerable.
    constructor: {
        value: Car,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

// Il est bien évidemment possible d'ajouter de nouvelles méthodes.
Car.prototype.openTrunk = function() {
    this.trunkOpened = true;
};

Car.prototype.closeTrunk = function() {
    this.trunkOpened = false;
};



//Création du camion
function Truck(licensePlate, tankSize, trailersNumber) {
    Vehicle.call(this, licensePlate, tankSize);

    this.trailersNumber = trailersNumber; // Le nombre de remorques attachées à notre camion.
}

Truck.prototype = Object.create(Vehicle.prototype, {
    constructor: {
        value: Truck,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Truck.prototype.addTrailer = function() {
    this.trailersNumber++;
};

Truck.prototype.removeTrailer = function() {
    this.trailersNumber--;
};


// On instancie notre voiture
var myCar = new Car('AA-555-AA', 70, 2.5);

//On instancie notre camion
var myTruck = new Truck('BB-999-BB', 500, 1);



