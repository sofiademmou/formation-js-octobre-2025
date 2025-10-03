console.log("Exemple chargé")

function buttonClicked() {
    console.log("You clicked me!")
}

function logger() {
    let paragraph = document.getElementById("paragraph");
    console.log(paragraph.textContent); // innerHTML, innerText marchent aussi
}

function changeColor() {
    let paragraph = document.getElementById("paragraph");
    paragraph.style.color = "blue";
}

function toggleBorder(button) {
    let paragraph = document.getElementById("paragraph");

    if(paragraph.classList.contains("border")){
        paragraph.classList.remove("border")
        button.textContent = "Ajouter une bordure au paragraphe"
    } else {
        paragraph.classList.add("border")
        button.textContent = "Retirer une bordure au paragraphe"
    }
   
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM chargé");
    
    let form = document.querySelector("form"); // attention si on a plusieurs fomrulaire il faut utiliser ID
    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // empêche l'event de recharger la page

            const formData = new FormData(form);
            const texte = formData.get("texte");

            let result = document.getElementById("result");

            result.innerHTML = `
                <p style="color: darkgreen;">
                    ${texte}
                </p>`;
        })
    }
})

let email = jean@dupont.com
function checkEmail(email) {
    email.toLowerCase().match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
}