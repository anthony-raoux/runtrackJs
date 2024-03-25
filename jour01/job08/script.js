function estPremier(nombre) {
    if (nombre <= 1) return false;
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; 
        }
    }
    return true; 
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false; 
    }
}

console.log(sommeNombresPremiers(5, 7)); 
console.log(sommeNombresPremiers(4, 7));
console.log(sommeNombresPremiers(11, 13)); 
console.log(sommeNombresPremiers(0, 7)); 
console.log(sommeNombresPremiers(5, 17)); 
console.log(sommeNombresPremiers(1, 7)); 
