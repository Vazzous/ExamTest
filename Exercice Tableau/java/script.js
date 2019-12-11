// JavaScript Document
var liste = [["Pommes", 10, 30], ["Cerises", 1, 2], ["Salade", 1, 2]];
var displayListe = document.getElementById("liste");
var affichageTotal = document.getElementById("total");
var calcul = 0;
var produit = document.getElementById("produit");
var nombreProduit = document.getElementById("nombre");
var prixProduit = document.getElementById("prix");

function display(){ //fonction qui affiche le panier
		displayListe.innerHTML = "";
		calcul = 0;
		for (var i = 0; i < liste.length; i++){
		//affiche les produits
		displayListe.innerHTML += "<li>Nom : " + liste[i][0] + " - Nombre : " + liste[i][1] + " - Prix : " + liste[i][2] + "</li><button onclick='sup("+i+")'>Supprimer de mon beaux panier de noel</button> ";
		//calcul total
		calcul += parseFloat(liste[i][2]);
	}
}

function ajout(){
	var newPro = liste.push([produit.value, nombre.value, prix.value]);
	display();
	affichageTotal.innerHTML = calcul;
}

function sup(id){
	var supItem = liste.splice(id, 1);
	display();
	affichageTotal.innerHTML = calcul;
}
