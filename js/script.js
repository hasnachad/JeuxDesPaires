/*déclaration du tableau d'images
var tabImages = ['img/ane.jpg', 'img/chat.jpg', 'img/hien.jpg', 'img/lama.jpg', 'img/lapins.jpg', 'img/lionne.jpg', 'img/ours.jpg'];*/
alert('test');

//Déclaration d'un nouveau tableau
var mesCases = new Array();
//je parcours mon tableau 
for (i=0; i<=6;i++){
	mesCases.push(i,i);
}
//Function qui prend en paramètre un tableau
// et le tri dans un ordre aléatoire puis le retourne
function shuffle(a){
   var j = 0;
   var valI = '';
   var valJ = valI;
   var l = a.length - 1;

   while(l > -1){
		j = Math.floor(Math.random() * l);
		valI = a[l];
		valJ = a[j];
		a[l] = valJ;
		a[j] = valI;
		l = l - 1;
	}
	return a;
 }

//Appel de la fonction
shuffle(mesCases);
 for (i=0; i<14; i++){
 	//document html qui va chercher l'element qui a l'id paires dans le dossier img/img.jpg
 	document.getElementById('paires').innerHTML+='<img src="img/img'+mesCases[i]+'.jpg" alt=""/>';
 }

