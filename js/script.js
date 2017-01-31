//alert('test'); Vérifie le script avec le html.

//Déclaration d'un nouveau tableau
var mesCases = new Array();
//je parcours mon tableau 
for (i=0; i<=6;i++){
	mesCases.push(i,i); //je remplies mon tableau avec mes images en double
}
//Function qui prend en paramètre un tableau
// et le tri dans un ordre aléatoire puis le retourne
function shuffle(a){
   var j = 0; 
   var valI = '';
   var valJ = valI;
   var l = a.length - 1;

   while(l > -1){
		j = Math.floor(Math.random() * l);// renvoie le > entier qui <= un nombre x.
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
 	document.getElementById('paires').innerHTML+='<img onclick="" src="img/img'+mesCases[i]+'.jpg" alt=""/>';
 }

