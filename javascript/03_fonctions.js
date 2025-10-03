/* Déclaration des fonctions */
function calculerTTC(prixHT, tauxTVA) {
    return prixHT * (1 + tauxTVA);
}
// Surcharge (2 fois même nom de fonction => JS n'aime pas ...)
function calculerTTC (prixHT) {
    return calculerTTC(prixHT, 0.2);
}
console.log(calculerTTC(100, 0.2))

// Mettre valeur par défaut
function calculerTTC(prixHT, tauxTVA = 0.20) {
    return prixHT * (1 + tauxTVA);
}
console.log(calculerTTC(100))

// On peut appeler fonction avant de la déclarer
console.log(direBonjour()) 

function direBonjour() {
    console.log("Bonjour");
}

function carre(nombre) {
    return nombre * nombre
}

/* Autre façon de déclarer une fonction */
// Appel avant de la déclaration de la constante ! => marche pas
// console.log(formaterPrix(100));

const formaterPrix = prix => {
    const prixFormate = prix.toFixed(2) + " €";
    console.log(prixFormate);
    return prixFormate;
}

formaterPrix(100)

const listePrix = [100, 200, 300, 400, 500];
listePrix.forEach(formaterPrix);