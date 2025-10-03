// Boite d'alerte
alert("Message d\'information");

// Boite de confirmation
const confirmer = confirm("Etes-vous sur ?");
if(confirmer) {
    console.log("Vous avez confirmé")
}

// Boite de saisie
const nom = prompt("Entrez votre nom : ");
if(nom) {
    console.log(`Bonjour ${nom}`);
}