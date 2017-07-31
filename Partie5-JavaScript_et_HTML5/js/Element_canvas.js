/*------------------------------------------- Premières manipulations -------------------------------------------*/
var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// Principe de fonctionnement
context.fillStyle = "gold";
context.fillRect(50, 35, 50, 80); // on trace un rectangle de 50 sur 80 pixels à partir des coordonnées 50,35 du canvas

context.fillStyle = "rgba(23, 145, 167, 0.5)";
context.fillRect(40, 25, 40, 40);

// Le fond et les contours
context.strokeStyle = "red";
context.lineWidth = "5"; // On définit sa largeur
context.strokeRect(80, 80, 40, 40); // Dessine une cadre rouge

// Effacer
context.clearRect(50, 50, 30, 10); // Efface une partie du canvas

/*------------------------------------------- Formes géométriques -------------------------------------------*/
// Les chemins simples
var canvasFormesGeo  = document.querySelector('#canvasFormesGeo');
var contextFormesGeo = canvasFormesGeo.getContext('2d');
contextFormesGeo.strokeStyle = "rgb(23, 145, 167)";
contextFormesGeo.beginPath();
contextFormesGeo.moveTo(20, 20);  // 1er point
contextFormesGeo.lineTo(130, 20); // 2e point
contextFormesGeo.lineTo(130, 50); // 3e
contextFormesGeo.lineTo(75, 130); // 4e
contextFormesGeo.lineTo(20, 50);  // 5e
contextFormesGeo.closePath();     // On relie le 5e au 1er
contextFormesGeo.stroke();

// Les arcs
contextFormesGeo.beginPath(); // Le cercle extérieur
contextFormesGeo.arc(75, 75, 50, 0, Math.PI * 2); // Ici le calcul est simplifié
contextFormesGeo.stroke();

contextFormesGeo.beginPath(); // La bouche, un arc de cercle
contextFormesGeo.arc(75, 75, 40, 0, Math.PI); // Ici aussi
contextFormesGeo.fill();

contextFormesGeo.beginPath(); // L'œil gauche
contextFormesGeo.arc(55, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
contextFormesGeo.stroke();

contextFormesGeo.beginPath(); // L'œil droit
contextFormesGeo.arc(95, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
contextFormesGeo.stroke();

// Les courbes de Bézier
var canvasCourbesBezier  = document.querySelector('#canvasCourbesBezier');
var contextCourbesBezier = canvasCourbesBezier.getContext('2d');
contextCourbesBezier.beginPath();
contextCourbesBezier.moveTo(131, 119);
contextCourbesBezier.bezierCurveTo(131, 126, 126, 131, 119, 131);
contextCourbesBezier.lineTo(30, 131);
contextCourbesBezier.bezierCurveTo(23, 131, 18, 126, 18, 119);
contextCourbesBezier.lineTo(18, 30);
contextCourbesBezier.bezierCurveTo(18, 23, 23, 18, 30, 18);
contextCourbesBezier.lineTo(119, 18);
contextCourbesBezier.bezierCurveTo(126, 18, 131, 23, 131, 30);
contextCourbesBezier.lineTo(131, 119);
contextCourbesBezier.closePath();
contextCourbesBezier.fillStyle = "rgb(23, 145, 167)";
contextCourbesBezier.fill();

contextCourbesBezier.font = "68px Calibri,Geneva,Arial";
contextCourbesBezier.fillStyle = "white";
contextCourbesBezier.fillText("js", 84, 115);


/*------------------------------------------- Images et textes -------------------------------------------*/
// Les images
var canvasImages  = document.querySelector('#canvasImages');
var contextImages = canvasImages.getContext('2d');

var canvasImagesPattern  = document.querySelector('#canvasImagesPattern');
var contextImagesPattern = canvasImagesPattern.getContext('2d');

var zozor = new Image();
zozor.src = 'images/zozor.png'; // Image de 80x80 pixels
zozor.addEventListener('load', function() {
	contextImages.drawImage(zozor, 35, 35);
	
	// Mise à l'échelle
	contextImages.drawImage(zozor, 130, 80, 40, 40);
	
	// Recadrage
	contextImages.drawImage(zozor, 23, 20, 50, 100, 180, 35, 100, 50);
	
	//Les patterns
    var pattern = contextImagesPattern.createPattern(zozor, 'repeat');
    contextImagesPattern.fillStyle = pattern;
    contextImagesPattern.fillRect(0, 0, 300, 150);
});

// Le texte
var canvasTexte  = document.querySelector('#canvasTexte');
var contextTexte = canvasTexte.getContext('2d');

contextTexte.fillStyle = "rgba(23, 145, 167, 1)";
contextTexte.fillRect(50, 50, 50, 50);
		  
contextTexte.font = "bold 22pt Calibri,Geneva,Arial";
contextTexte.strokeStyle = "#fff";
contextTexte.strokeText("js", 78, 92);


