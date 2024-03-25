function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    } else {
        return "L'ordre de tri n'est pas valide. Utilisez 'asc' ou 'desc'.";
    }

    return numbers;
}

const tableau1 = [3, 7, 4, 1, 5, 9, 2, 6, 8];
console.log("Tableau non trié :", tableau1);
console.log("Tri ascendant :", tri([...tableau1], "asc"));
console.log("Tri décroissant :", tri([...tableau1], "desc"));

console.log(tri([...tableau1], "invalid")); 
