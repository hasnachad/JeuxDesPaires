//déclaration du tableau d'images
var tabImages = ['img/ane.jpg', 'img/chat.jpg', 'img/hien.jpg', 'img/lama.jpg', 'img/lapins.jpg', 'img/lionne.jpg', 'img/ours.jpg'];


/*
function AfficherImages(){
	document.getElementById('images').innerHTML="";//document html qui va chercher l'element qui a l'id images
	for (var i = 0; i < tabImage.lenght -1; i++) {   
		var lignetab='<tr>';//ouverture de la ligne, declaration de ma nouvelle ligne
		lignetab+='<td>';//ajoute une colonne à ma ligne
		lignetab+=tabImages[i]; //ajoute dans la console l'image correspondante.
		lignetab+='</td>';
		//document.getElementById('classement').inner.HTML+='<td>coucou</td>';
			console.log(tabImages[i]);
		}
		lignetab+='</tr>';
		//alert(); affichage ligne du tableau
		document.getElementById('images').innerHTML+=lignetab;//document html qui va chercher l'element
																//qui a l'id images 
	}
*/

for(var i = 0; i < document.tabImages.length; i++){
  alert(document.tabImages[i].src)
}



