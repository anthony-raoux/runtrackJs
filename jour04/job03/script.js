function filtrerPokemon() {
    const formData = new FormData(document.getElementById('filterForm'));
    const id = formData.get('id');
    const nom = formData.get('nom');
    const type = formData.get('type');

    fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        const resultat = document.getElementById('resultat');
        resultat.innerHTML = '';
        data.forEach(pokemon => {
            if ((id === '' || pokemon.id == id) &&
                (nom === '' || pokemon.name.english.toLowerCase().includes(nom.toLowerCase())) &&
                (type === '' || pokemon.type.includes(type))) {
                const element = document.createElement('div');
                element.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.english}, Type: ${pokemon.type.join(', ')}`;
                resultat.appendChild(element);
            }
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });
}
