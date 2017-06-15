/**
 * Script permettant de récupérer les photos d'un site internet
 */

var mesLi = document.querySelectorAll('.fade .in img');
var mesBandeaux = document.querySelectorAll('.grid-action-holder');
var lien = '';

for(var i=0; i < mesLi.length; i++) {
	lien = mesLi[i].src;
	console.log(lien);
	//window.location.assign(lien);	
	mesBandeaux[i].innerHTML += '<a class="grid-action-btn" href='+ lien + ' download="Photo">Télécharger</a>';
}
