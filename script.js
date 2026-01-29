// Fonction pour calculer l'IMC
function calcul(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire pour éviter le rechargement de la page

    var taille = +document.getElementById('taille').value;  // Récupère la valeur de la taille
    var poids = +document.getElementById('poids').value;    // Récupère la valeur du poids

    // Calcul de l'IMC
    var imc = poids / (taille ** 2);
    var commentaire = "";

    if (!Number.isNaN(imc) && imc > 0 && imc !== Infinity) {
        // Détermination de l'interprétation de l'IMC
        if (imc < 18.5) {
            commentaire = "Insuffisance pondérale (maigreur)";
        } else if (imc >= 18.5 && imc < 25) {
            commentaire = "Corpulence normale";
        } else if (imc >= 25 && imc < 30) {
            commentaire = "Surpoids";
        } else if (imc >= 30 && imc < 35) {
            commentaire = "Obésité modérée";
        } else {
            commentaire = "Obésité sévère";
        }

        // Affichage du résultat
        document.getElementById('score-IMC').value = imc.toFixed(1); // Affichage de l'IMC
        document.getElementById('interprétation').value = commentaire; // Affichage de l'interprétation
    } else {
        // Si les valeurs sont invalides
        document.getElementById('score-IMC').value = "";
        document.getElementById('interprétation').value = "";
    }
}