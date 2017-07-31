/*------------------------------------------- Première utilisation -------------------------------------------*/
document.querySelector('#file').addEventListener('change', function() {

	for(var i = 0; i < this.files.length; i++) {	// L'objet "files" est accessible représente les fichiers sélectionnés
		console.log(this.files[i].name);	
	}
});

/*------------------------------------------- Lire les fichiers (grâce à la propriété "result") -------------------------------------------*/
var reader = new FileReader();
var fileInput = document.querySelector('#file');

fileInput.addEventListener('change', function() {

    var reader = new FileReader();
    
    // Lecture d'un fichier texte
    reader.addEventListener('load', function() {
    	console.log('Contenu du fichier "' + fileInput.files[0].name + '" :\n\n' + reader.result);
    });
    console.log('---------------------------------------------------');
    reader.readAsText(fileInput.files[0]);

});

/*------------------------------------------- Mise en pratique -------------------------------------------*/
(function() {
    
	function createThumbnail(file) {
	    
	    var reader = new FileReader();
	    
	    reader.addEventListener('load', function() {
	        
	        var imgElement = document.createElement('img');
	        imgElement.style.maxWidth = '150px';
	        imgElement.style.maxHeight = '150px';
	        imgElement.src = reader.result;
	        prev.appendChild(imgElement);
	        
	    });
	    
	    reader.readAsDataURL(file);
	    
	}
	
    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'],
        fileInput = document.querySelector('#uploadFiles'),
        prev = document.querySelector('#prev');
    
    fileInput.addEventListener('change', function() {
        
    	var files = this.files,
        filesLen = files.length,
        imgType;

	    for (var i = 0; i < filesLen; i++) {
	
	        imgType = files[i].name.split('.');
	        imgType = imgType[imgType.length - 1].toLowerCase(); // On utilise toLowerCase() pour éviter les extensions en majuscules
	
	        if (allowedTypes.indexOf(imgType) != -1) {
	
	        	createThumbnail(files[i]);
	
	        }
	
	    }
        
    });
    
})();



/*------------------------------------------- Upload de fichiers avec l'objet XMLHttpRequest -------------------------------------------*/
var fileInput = document.querySelector('#file'),
	progress = document.querySelector('#progress');

fileInput.addEventListener('change', function() {

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'php/API_File.php');

    xhr.upload.addEventListener('progress', function(e) {
        progress.value = e.loaded;
        progress.max = e.total;
    });

    xhr.addEventListener('load', function() {
    	alert('Upload du fichier ' + fileInput.files[0].name + ' : ' + xhr.responseText);
    });

    var form = new FormData();
    form.append('file', fileInput.files[0]);

    xhr.send(form);

});
