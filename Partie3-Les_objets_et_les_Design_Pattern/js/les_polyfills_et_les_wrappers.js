/*------------------------------------------- Objet constructeur -------------------------------------------*/
// Exemple pour la méthode isArray()
if (!Array.isArray) { // Si isArray() n'existe pas, alors on crée notre méthode alternative :
    Array.isArray = function(element) {
        return Object.prototype.toString.call(element) == '[object Array]';
    };
}

console.log(Array.isArray([])); // Affiche : « true »
console.log(Array.isArray({})); // Affiche : « false »


/*------------------------------------------- Introduction aux wrappers -------------------------------------------*/
function Img(src) {

    var obj = this; // Nous faisons une petite référence vers notre objet Img. Cela nous facilitera la tâche.

    this.originalImg = new Image(); // On instancie l'objet original, le wrapper servira alors d'intermédiaire

    this.complete = false;
    this.onload = function() {}; // Voici l'événement que les développeurs pourront modifier

    this.originalImg.onload = function() {

        obj.complete = true; // L'image est chargée !
        obj.onload(); // On exécute l'événement éventuellement spécifié par le développeur

    };

    if (src) {
        this.originalImg.src = src; // Si elle est spécifiée, on défini alors la propriété src
    }

}

Img.prototype.set = function(name, value) {

    var allowed = ['width', 'height', 'src'], // On spécifie les propriétés dont on autorise la modification
        wrapperProperties = ['complete', 'onload'];

    if (allowed.indexOf(name) != -1) {
        this.originalImg[name] = value; // Si la propriété est autorisée alors on la modifie
    } else if (wrapperProperties.indexOf(name) != -1) {
        this[name] = value; // Ici, la propriété appartient au wrapper et non pas à l'objet original
    }

};

Img.prototype.get = function(name) {

    // Si la propriété n'existe pas sur le wrapper, on essaye alors sur l'objet original :
    return typeof this[name] != 'undefined' ? this[name] : this.originalImg[name];

};


var myImg = new Img(); // On crée notre objet Img

alert('complete : ' + myImg.get('complete')); // Vérification de la propriété complete : elle est bien à false

myImg.set('onload', function() { // Affichage de diverses informations une fois l'image chargée
    alert(
        'complete : ' + this.get('complete') + '\n' +
        'width : ' + this.get('width') + ' px\n' +
        'height : ' + this.get('height') + ' px'
    );
});

myImg.set('src', 'C:/workarea/exercices/Javascript/JS/Partie3-Les_objets_et_les_Design_Pattern/img/logoDarva.png'); // On spécifie l'adresse de l'image
