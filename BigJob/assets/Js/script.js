let utilisateurs = [];

async function loadJSON() {
    try {
        const response = await fetch('/assets/js/utilisateur.json');
        const data = await response.json();
        utilisateurs = data.utilisateurs;
        return data;
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON : ", error);
        throw error;
    }
}

async function roleRedirection(email) {
    try {
        await loadJSON(); // Assurez-vous que les données sont chargées
        const utilisateur = utilisateurs.find(user => user.email === email);
        if (utilisateur) {
            switch (utilisateur.role) {
                case 'moderateur':
                    window.location.href = 'backoffice.html';
                    break;
                case 'utilisateur':
                    window.location.href = 'calendrier.html';
                    break;
                case 'admin':
                    window.location.href = 'gestion_droits_admin.html';
                    break;
                default:
                    console.error('Rôle non reconnu');
            }
        } else {
            console.error('Utilisateur non trouvé');
        }
    } catch (error) {
        console.error("Erreur lors de la redirection de l'utilisateur : ", error);
        throw error;
    }
}

async function initializeApp() {
    try {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            if (email) {
                await roleRedirection(email);
            } else {
                console.error('Veuillez saisir votre email');
            }
        });
    } catch (error) {
        console.error("Erreur lors de l'initialisation du script : ", error);
    }
}

initializeApp();






    // vérficiation du formulaire
    // si le mail est au bon format + bon domaine (laplateforme.io)
    // récupérer et comparer le mail du json avec celui du formulaire
    // pour récupérer le role correspondant et rediriger vers la bonne page



