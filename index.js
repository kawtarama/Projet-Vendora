
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




// Fonction pour afficher le message de succès après la soumission du formulaire
function showSuccessMessage(event) {
    event.preventDefault(); // Empêche la soumission du formulaire pour afficher le message

    // Afficher le message de succès
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Optionnel : Réinitialiser le formulaire après une seconde
    setTimeout(() => {
        document.querySelector('form').reset(); // Réinitialise le formulaire
        successMessage.style.display = 'none'; // Masque le message après réinitialisation
    }, 3000); // Masque le message après 3 secondes
}

// Écouter l'événement submit du formulaire
document.querySelector('form').addEventListener('submit', showSuccessMessage);









// Fonction pour limiter la saisie du téléphone à 10 chiffres
function limitPhoneNumberInput(event) {
    let input = event.target;
    // Supprime tous les caractères non numériques
    input.value = input.value.replace(/[^0-9]/g, '');
    
    // Si la longueur dépasse 10, on la limite à 10
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}

// Ajouter un écouteur d'événement pour surveiller la saisie
document.getElementById('telephone').addEventListener('input', limitPhoneNumberInput);


// Fonction pour limiter la saisie du code postal à 10 chiffres
function limitCodePostalInput(event) {
    let input = event.target;
    // Supprime tous les caractères non numériques
    input.value = input.value.replace(/[^0-9]/g, '');
    
    // Si la longueur dépasse 10, on la limite à 10
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}

// Ajouter un écouteur d'événement pour surveiller la saisie
document.getElementById('code-postal').addEventListener('input', limitCodePostalInput);



