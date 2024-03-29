document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        validateLogin(email, password);
    });
});

function validateLogin(email, password) {
    setTimeout(() => {
        if (email === "" || password === "") {
            document.getElementById("emailError").innerText = email === "" ? "Veuillez entrer une adresse email." : "";
            document.getElementById("passwordError").innerText = password === "" ? "Veuillez entrer un mot de passe." : "";
        } else {
            document.getElementById("loginForm").submit();
        }
    }, 1000); 
}
