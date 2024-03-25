function bissextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

function checkBissextile() {
    const annee = parseInt(prompt("Entrez une année :"));
    const resultat = bissextile(annee);
    const message = resultat ? "L'année est bissextile." : "L'année n'est pas bissextile.";
    document.getElementById("result").textContent = message;
}
