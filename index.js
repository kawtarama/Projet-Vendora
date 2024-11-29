
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







document.getElementById("orderForm").addEventListener("submit", function (event) {
    // Empêche le rechargement ou la redirection de la page
    event.preventDefault();

    // Récupérer tous les champs du formulaire
    const fields = [
        document.getElementById("nom"),
        document.getElementById("adresse"),
        document.getElementById("code-postal"),
        document.getElementById("telephone"),
        document.getElementById("quantite")
    ];

    let allFieldsFilled = true;

    // Vérifie si chaque champ est rempli
    fields.forEach(field => {
        if (field.value.trim() === "") {
            allFieldsFilled = false;
        }
    });

    // Récupérer les messages
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    if (!allFieldsFilled) {
        // Si des champs sont vides
        errorMessage.style.display = "block"; // Afficher le message d'erreur
        successMessage.style.display = "none"; // Cacher le message de succès
    } else {
        // Si tous les champs sont remplis
        errorMessage.style.display = "none"; // Cacher le message d'erreur
        successMessage.style.display = "block"; // Afficher le message de succès
    }
});















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



