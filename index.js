function calculerTotal(){
    let quantite = document.getElementById("quantite").value;
    let prixUnitaire = parseFloat(document.getElementById("PrixUnitaire").value);
    if (!isNaN(quantite) && quantite > 0){
        let total = quantite * prixUnitaire; 
        document.getElementById("total").value = total.toFixed(2);
    }else{
        document.getElementById("total").value = 0;
    }
}
// const quantiteInput = document.getElementById('quantite');
// const prixUnitaireInput = document.getElementById('PrixUnitaire');
// const totalInput = document.getElementById('total');

// function calculerTotal() {
//     const quantite = parseFloat(quantiteInput.value) || 0; // Récupère la quantité (0 si vide)
//     const prixUnitaire = parseFloat(prixUnitaireInput.value); // Récupère le prix unitaire
//     const total = quantite * prixUnitaire; // Calcule le total
//     totalInput.
//     totalInput

   
// value = total.toFixed(2); // Affiche avec 2 décimales
// }
// quantiteInput.
// quantite
// addEventListener('input', calculerTotal);
// calculer
// calculerTotal();