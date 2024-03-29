document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Récupérer les valeurs des champs
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postalCode").value;

        // Effectuer une validation asynchrone
        validateRegistration(firstName, lastName, email, password, confirmPassword, address, postalCode);
    });
});

function validateRegistration(firstName, lastName, email, password, confirmPassword, address, postalCode) {
    // Simuler une requête AJAX (Remplacer par votre propre logique de validation)
    setTimeout(() => {
        let errorFlag = false;

        if (firstName === "") {
            document.getElementById("firstNameError").innerText = "Veuillez entrer votre prénom.";
            errorFlag = true;
        } else if (firstName.length < 2) {
            document.getElementById("firstNameError").innerText = "Le prénom doit comporter au moins 2 caractères.";
            errorFlag = true;
        } else {
            document.getElementById("firstNameError").innerText = "";
        }

        if (lastName === "") {
            document.getElementById("lastNameError").innerText = "Veuillez entrer votre nom.";
            errorFlag = true;
        } else if (lastName.length < 2) {
            document.getElementById("lastNameError").innerText = "Le nom doit comporter au moins 2 caractères.";
            errorFlag = true;
        } else {
            document.getElementById("lastNameError").innerText = "";
        }

        if (email === "") {
            document.getElementById("emailError").innerText = "Veuillez entrer une adresse email.";
            errorFlag = true;
        } else if (!isValidEmail(email)) {
            document.getElementById("emailError").innerText = "L'adresse email n'est pas valide.";
            errorFlag = true;
        } else {
            document.getElementById("emailError").innerText = "";
        }

        if (password === "") {
            document.getElementById("passwordError").innerText = "Veuillez entrer un mot de passe.";
            errorFlag = true;
        } else if (!validatePassword(password)) {
            document.getElementById("passwordError").innerText = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
            errorFlag = true;
        } else {
            document.getElementById("passwordError").innerText = "";
        }

        if (confirmPassword === "") {
            document.getElementById("confirmPasswordError").innerText = "Veuillez confirmer le mot de passe.";
            errorFlag = true;
        } else if (password !== confirmPassword) {
            document.getElementById("confirmPasswordError").innerText = "Les mots de passe ne correspondent pas.";
            errorFlag = true;
        } else {
            document.getElementById("confirmPasswordError").innerText = "";
        }

        if (address === "") {
            document.getElementById("addressError").innerText = "Veuillez entrer votre adresse.";
            errorFlag = true;
        } else {
            document.getElementById("addressError").innerText = "";
        }

        if (postalCode === "") {
            document.getElementById("postalCodeError").innerText = "Veuillez entrer votre code postal.";
            errorFlag = true;
        } else if (!/^\d+$/.test(postalCode)) {
            document.getElementById("postalCodeError").innerText = "Le code postal doit contenir uniquement des chiffres.";
            errorFlag = true;
        } else {
            document.getElementById("postalCodeError").innerText = "";
        }

        // S'il n'y a pas d'erreur, valider le formulaire
        if (!errorFlag) {
            document.getElementById("registerForm").submit();
        }
    }, 1000); // Temps de simulation de la requête (1 seconde)
}

function validatePassword(password) {
    // Expression régulière pour vérifier si le mot de passe répond aux critères
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function isValidEmail(email) {
    // Expression régulière pour valider l'adresse email avec extension
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
