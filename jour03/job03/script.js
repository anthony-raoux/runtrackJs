$(document).ready(function(){
    // Initialiser le jeu
    var emptyTile = 9; // Case vide
    var winningCombination = [1, 2, 3, 4, 5, 6, 7, 8]; // Combinaison gagnante

    // Fonction pour mélanger les tuiles aléatoirement
    function shuffleTiles() {
        var tiles = [1, 2, 3, 4, 5, 6, 7, 8];
        tiles.sort(function() { return 0.5 - Math.random() });

        // Afficher les tuiles dans l'ordre mélangé
        for (var i = 1; i <= 8; i++) {
            $("#tile" + i).attr("src", "./images/logo" + tiles[i-1] + ".PNG");
        }
    }

    // Fonction pour vérifier si la combinaison est gagnante
    function checkWin() {
        var currentCombination = [];
        for (var i = 1; i <= 8; i++) {
            var tileSrc = $("#tile" + i).attr("src");
            var tileNumber = parseInt(tileSrc.slice(-5, -4)); // Récupérer le numéro de la tuile à partir de son URL
            currentCombination.push(tileNumber);
        }
        var isWin = currentCombination.every(function(value, index) {
            return value === winningCombination[index];
        });
        if (isWin) {
            $("#message").text("Vous avez gagné").css("color", "green");
            $("#puzzle-container img").off("click"); // Désactiver le clic sur les tuiles
        }
    }

    // Fonction pour échanger la case vide avec la case cliquée
    function moveTile(tileNumber) {
        // Vérifier si la case cliquée est adjacente à la case vide
        if (Math.abs(emptyTile - tileNumber) === 1 || Math.abs(emptyTile - tileNumber) === 3) {
            // Échanger les images des tuiles
            var tempSrc = $("#tile" + tileNumber).attr("src");
            $("#tile" + tileNumber).attr("src", $("#tile" + emptyTile).attr("src"));
            $("#tile" + emptyTile).attr("src", tempSrc);

            emptyTile = tileNumber; // Mettre à jour la position de la case vide
            checkWin(); // Vérifier si le joueur a gagné après le déplacement
        }
    }

    // Mélanger les tuiles au chargement de la page
    shuffleTiles();

    // Gérer le clic sur les tuiles
    $("#puzzle-container img").click(function(){
        var tileNumber = parseInt($(this).attr("id").slice(-1)); // Récupérer le numéro de la tuile cliquée
        moveTile(tileNumber); // Déplacer la tuile cliquée
    });

    // Gérer le clic sur le bouton "Recommencer"
    $("#reset").click(function(){
        $("#message").text(""); // Réinitialiser le message de victoire
        $("#message").css("color", ""); // Réinitialiser la couleur du message
        emptyTile = 9; // Réinitialiser la position de la case vide
        shuffleTiles(); // Mélanger les tuiles
        $("#puzzle-container img").on("click", function(){
            var tileNumber = parseInt($(this).attr("id").slice(-1)); // Récupérer le numéro de la tuile cliquée
            moveTile(tileNumber); // Déplacer la tuile cliquée
        });
    });
});
