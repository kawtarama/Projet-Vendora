
// Fonction pour calculer le total
function calculerTotal() {
    let quantite = parseFloat(document.getElementById("quantite").value) || 0; // Convertit en nombre ou 0 si vide
    let prixUnitaire = parseFloat(document.getElementById("PrixUnitaire").value); // Convertit le prix en nombre

    if (quantite > 0) { // Vérifie si la quantité est valide
        let total = quantite * prixUnitaire; // Calcule le total
        document.getElementById("total").value = total.toFixed(2); // Affiche avec 2 décimales
    } else {
        
        document.getElementById("total").value = 0; // Réinitialise le total si la quantité est invalide
    }
}

// Ajoute un événement pour calculer automatiquement lors de la saisie
document.getElementById("quantite").addEventListener("input", calculerTotal);

