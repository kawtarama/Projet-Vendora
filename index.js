
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


// function calculerTotal() {
//     // Récupération des éléments HTML
//     const quantiteInput = document.getElementById("quantite");
//     const prixUnitaireInput = document.getElementById("PrixUnitaire");
//     const totalInput = document.getElementById("total");

//     // Récupérer les valeurs
//     const quantite = parseFloat(quantiteInput.value) || 0; // Quantité entrée par l'utilisateur (par défaut 0)
//     const prixUnitaire = parseFloat(prixUnitaireInput.value) || 0; // Prix unitaire (300 DH dans cet exemple)

//     // Calculer le total
//     const total = quantite * prixUnitaire;

//     // Mettre à jour le champ du total
//     totalInput.value = total.toFixed(2); // Afficher avec 2 décimales
// }

// // Ajouter des événements pour recalculer automatiquement la quantité
// // Quand l'utilisateur modifie la quantité, le total est recalculé
// const quantiteInput = document.getElementById("quantite");
// quantiteInput.addEventListener("input", calculerTotal); // Événement "input" déclenché pendant la saisie
// quantiteInput.addEventListener("change", calculerTotal); // Événement "change" déclenché après la saisie