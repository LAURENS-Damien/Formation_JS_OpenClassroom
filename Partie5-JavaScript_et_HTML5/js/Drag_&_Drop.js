/*------------------------------------------- Aperçu de l'API -------------------------------------------*/
// Rendre un élément déplaçable
// Initialiser un déplacement avec l'objet dataTransfer
// Transmettre une chaine de caractères à l'élément HTML qui accueillera l'élément déplacé (grâce à setData())
var draggableElement = document.getElementById('draggable');

draggableElement.addEventListener('dragstart', function(e) {
	
    e.dataTransfer.setData('text/plain', "Ce texte sera transmis à l'élément HTML de réception");
});

// Définir une image utilisée lors du déplacement (grâce à setDragImage())
var dragImg = new Image(); // Il est conseillé de précharger l'image, sinon elle risque de ne pas s'afficher pendant le déplacement
dragImg.src = 'images/zozor.png';

document.querySelector('*[draggable="true"]').addEventListener('dragstart', function(e) {
	
	// Une position de 40x40 pixels centrera l'image (de 80x80 pixels) sous le curseur
	e.dataTransfer.setDragImage(dragImg, 40, 40);

});

// Définir une zone de « drop »
var dropper = document.querySelector('#dropper');

// Lorsqu'on se déplace sur l'élément
dropper.addEventListener('dragover', function(e) {

    e.preventDefault(); // Annule l'interdiction de drop
});

// Lorsque l'on relache le clic gauche
dropper.addEventListener('drop', function(e) {
	
    e.preventDefault(); // Cette méthode est toujours nécessaire pour éviter une éventuelle redirection inattendue
    console.log('Vous avez bien déposé votre élément !');
    
	dropper.style.borderStyle = 'none';
});

// Lorsqu'on entre dans l'élément
dropper.addEventListener('dragenter', function() {
    dropper.style.borderStyle = 'dashed';
});

// Lorsqu'on sort d'un élément
dropper.addEventListener('dragleave', function() {
    dropper.style.borderStyle = 'solid';
});

// Cet événement détecte n'importe quel drag & drop qui se termine, autant le mettre sur « document » :
document.addEventListener('dragend', function() {
    console.log("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas si c'est un succès ou non.");
});



// Terminer un déplacement avec l'objet dataTransfer
var dropZone = document.getElementById('inputDraggable');

dropZone.addEventListener('dragstart', function(e) {
	
    e.dataTransfer.setData('text/plain', "Ce texte sera transmis à l'élément HTML de réception");
});

dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    
    console.log(e.dataTransfer.getData('text/plain')); // Affiche le contenu du type MIME « text/plain »
    
    var files = e.dataTransfer.files,
        filesLen = files.length,
        filenames = "";

    for (var i = 0 ; i < filesLen ; i++) {
        filenames += '\n' + files[i].name;
    }

    console.log(files.length + ' fichier(s) :\n' + filenames);
});




/*------------------------------------------- Mise en pratique -------------------------------------------*/
(function() {

    var dndHandler = {

        draggedElement: null, // Propriété pointant vers l'élément en cours de déplacement

        applyDragEvents: function(element) {

            element.draggable = true;

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « dragstart » ci-dessous accède facilement au namespace « dndHandler »

            element.addEventListener('dragstart', function(e) {
                dndHandler.draggedElement = e.target; // On sauvegarde l'élément en cours de déplacement
                e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
            });

        },

        applyDropEvents: function(dropper) {

            dropper.addEventListener('dragover', function(e) {
                e.preventDefault(); // On autorise le drop d'éléments
                this.className = 'dropper drop_hover'; // Et on applique le style adéquat à notre zone de drop quand un élément la survole
            });

            dropper.addEventListener('dragleave', function() {
                this.className = 'dropper'; // On revient au style de base lorsque l'élément quitte la zone de drop
            });

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « drop » ci-dessous accède facilement au namespace « dndHandler »

            dropper.addEventListener('drop', function(e) {

                var target = e.target,
                    draggedElement = dndHandler.draggedElement, // Récupération de l'élément concerné
                    clonedElement = draggedElement.cloneNode(true); // On créé immédiatement le clone de cet élément

                while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'à la zone de drop parente
                    target = target.parentNode;
                }

                target.className = 'dropper'; // Application du style par défaut

                clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
                dndHandler.applyDragEvents(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()

                draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'élément d'origine

            });

        }

    };

    var elements = document.querySelectorAll('.draggable'),
        elementsLen = elements.length;

    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]); // Application des paramètres nécessaires aux éléments déplaçables
    }

    var droppers = document.querySelectorAll('.dropper'),
        droppersLen = droppers.length;

    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]); // Application des événements nécessaires aux zones de drop
    }

})();

