// Création de la div pour le TP4
(function (){
// Création de la divTP4
var baliseDivTP4 = document.createElement('div');
baliseDivTP4.id = 'divTP4';

// Le formulaire
var formulaire = document.createElement('form');
formulaire.enctype="multipart/form-data";
formulaire.method="post";
formulaire.action="upload.php";

// Le fieldset
var fieldset = document.createElement('fieldset');

// La légende
var legende = document.createElement('legend');
var legendeText = document.createTextNode('Uploader une image');
legende.appendChild(legendeText);

// La div
var maDiv = document.createElement('div');
maDiv.style="text-align: center";

// Le label
var label = document.createElement('label');
label.for="inputUpload";
var labelText = document.createTextNode('Image à uploader :');
label.appendChild(labelText);

// L'input file
var inputFile = document.createElement('input');
inputFile.type="file";
inputFile.name="inputUpload";
inputFile.id="inputUpload";

//L'input submit
var inputSubmit= document.createElement('input');
inputSubmit.type="submit";
inputSubmit.value="Envoyer";

// Les retours chariots
var br1= document.createElement('br');
var br2= document.createElement('br');

// On construit toute la div
baliseDivTP4.appendChild(formulaire);
formulaire.appendChild(fieldset);
fieldset.appendChild(legende);
fieldset.appendChild(maDiv);
maDiv.appendChild(label);
maDiv.appendChild(inputFile);
maDiv.appendChild(br1);
maDiv.appendChild(br2);
maDiv.appendChild(inputSubmit);
document.body.appendChild(baliseDivTP4);

})();
