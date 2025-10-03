import parseHTML from "./helper.js";

// -------------------------------------------------------------------------------------
let toutesTaches = [];
let i = 0;

function filtrerTaches(tache) {
//    const container = document.getElementById("liste-taches");
//    let html;
//
//    if(tache === 'toutes') {
//        html = `<h4>Clients de ${villeFiltre} :</h4>`;
//    }  
//
}

function ajouterTache() {
    let nouvelleTache = document.getElementById("nouvelle-tache"); 

    toutesTaches.push({texte: nouvelleTache.value, check: ""});

    let listeTaches = document.getElementById("liste-taches");
    listeTaches.innerHTML = "";

    toutesTaches.forEach(tache => {
        listeTaches.innerHTML += `
        <li class="tache">
        <input type="checkbox" onchange="toggleTache(${i})">
        <span class="texte">${tache.texte}</span>
        <span class="actions>
        <button onclick="supprimerTache(${i})">poubelle</button>
        </span>`
        i++;
    });
}

function supprimerTache() {

}

function statsDonnees() {
    let stats = document.getElementById("stats-taches");

    stats.innerHTML = `
    Actives | Terminees
    `


}

document.addEventListener("DOMContentLoaded", () => {
    statsDonnees();
})







window.filtrerTaches = filtrerTaches;
window.ajouterTache = ajouterTache;
window.statsDonnees = statsDonnees;


















// -------------------------------------------------------------------------------------


//const donneesClients = [
 //   { id: 1, nom: "Britt Bridgers", age: 30, ville: "Paris", salaire:2500 },
 //   { id: 2, nom: "Sophie Swift", age: 29, ville: "Lyon", salaire:2200 },
 //   { id: 3, nom: "Deborah Dylan", age: 24, ville: "Lyon", salaire:2800 },
 //   { id: 4, nom: "Kyle Kahan", age: 26, ville: "Marseille", salaire:2400 },
 //   { id: 5, nom: "Adam Abrams", age: 36, ville: "Lyon", salaire:2300 }
//]
//
//const noNum = donneesClients.map(client => {
  //  return {
  ////      nom: client.nom,
  ////      ville: client.ville,
  //  }
//})
//
//function chargerDonnees() {
//    const container = document.getElementById("donnees-clients");
//
//    let html = '<h4>Donnees Clients : </h4>';
//
//    donneesClients.forEach(donnee => {
//        html += parseHTML(donnee.nom, donnee.age, donnee.ville, donnee.salaire)
//    });
//
//    container.innerHTML = html;
//}
//
//function filtrerDonnees() {
  // const container = document.getElementById("donnees-clients");
  // const villeFiltre = prompt("Entrer une ville pour filtrer (Paris, Lyon, Marseille)");

  // if(villeFiltre) {
  //     const clientsFiltres = donneesClients.filter(client => {
  //         return client.ville.toLowerCase() === villeFiltre.toLowerCase();
  //     });

  //     let html = `<h4>Clients de ${villeFiltre} :</h4>`;
  //     if(clientsFiltres.length > 0) {
  //         clientsFiltres.forEach(client => {
  //             html += parseHTML(client.nom, client.age, client.ville, client.salaire)
  //         });
  //     } else {
  //         html += `<p>Aucun client trouvé pour la ville ${villeFiltre}</p>`
  //     }

  //     container.innerHTML = html;
  // }
//}
//
//function trierDonnees() {
   // const container = document.getElementById("donnees-clients");
   // const clientsTries = [...donneesClients].sort((a, b) => a.age - b.age);
//
   // let html = `<h4>Clients triés par age:</h4>`;
   // clientsTries.forEach(client => {
   //     html += parseHTML(client.nom, client.age, client.ville, client.salaire);
   // });
//}
//
//document.addEventListener("DOMContentLoaded", () => {
  //  chargerDonnees();
//})
//
//
//window.chargerDonnees = chargerDonnees;
//window.filtrerDonnees = filtrerDonnees;
//window.trierDonnees = trierDonnees;







// utilitaire => mettre dans helper
//function parseHTML(nom, age, ville, salaire) {
//    return `
//        <div class="client-card">
//            <h4>${nom}</h4>
//            <p><strong>Age : </strong> ${age} ans</p>
//            <p><strong>Ville : </strong> ${ville}</p>
//            <p><strong>Salaire : </strong> ${salaire} €</p>
//        </div>
//    `;
//}