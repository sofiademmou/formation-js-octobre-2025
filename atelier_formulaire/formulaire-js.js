
function eraseForm() {
    document.querySelector("form").reset();
    document.getElementById("error-nom").textContent = ""
    document.getElementById("error-age").textContent = ""
    document.getElementById("error-email").textContent = ""
    document.getElementById("error-ville").textContent = ""
}

function checkEmail(email) {
    return email.toLowerCase().match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
}

function checkNom(nom) {
    return nom.match(/^[A-Z][a-z]+$/);
}

function checkAge(age) {
    return age.match(/[0-9]+/);
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM chargé");
    
    let form = document.querySelector("form"); // attention si on a plusieurs fomrulaire il faut utiliser ID
    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // empêche l'event de recharger la page

            let verification = "valide";

            const formData = new FormData(form);
            const nom = formData.get("nom");
            const email = formData.get("email");
            const age = formData.get("age");
            const ville = formData.get("ville");

            if(!checkNom(nom) || nom.length < 2) {
                verification = "nonValide"
                document.getElementById("error-nom").textContent = "Erreur : Merci de saisir un nom sous la forme 'Dupont'"
            } else {
                document.getElementById("error-nom").textContent = ""
            }

            if(!checkEmail(email)) {
                document.getElementById("error-email").textContent = "Erreur : Merci de saisir un email sous la forme 'adresse@domaine.com'"
                verification = "nonValide"
            } else {
                document.getElementById("error-email").textContent = ""
            }

            if(!checkAge(age)) {
                document.getElementById("error-age").textContent = "Erreur : Merci de saisir un âge valide (positif et sans décimale)"
                verification = "nonValide"
            } else {
                document.getElementById("error-age").textContent = ""
            }

            if(ville) {
                document.getElementById("error-ville").textContent = ""
            } else {
                document.getElementById("error-ville").textContent =  "Erreur : Merci de saisir une ville parmi les choix disponible"
                verification = "nonValide"
            } 

            let abo = document.getElementById("newsletter");
            let checked = abo.checked
            let abonnement

            if(checked == true) {
                abonnement = "Oui"
            } else {
                abonnement = "Non"
            }

            result = document.getElementById("resultat-validation")

            console.log(verification)

            if(verification === "valide"){
                result.classList.add("success")
                result.classList.remove("error")                
                console.log(result)
                result.innerHTML = `
            Client enregistré avec succès ! <br>
            Nom : ${nom} <br>
            email : ${email} <br>
            Age : ${age} <br>
            Ville : ${ville} <br>
            Abonnement à la Newsletter : ${abonnement}
            `
            } else {
                result.classList.remove("success")
                result.classList.add("error")
                result.innerHTML = `
            Merci de remplir le formulaire correctement !
            `
            }

            document.querySelector("form").reset();
        
        })
    }
})
