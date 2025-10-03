document.addEventListener("DOMContentLoaded", () => {
    const zoneSouris = document.getElementById("zone-souris")
    const infoSouris = document.getElementById("info-souris")

    if(zoneSouris && infoSouris) {
        let compteurClics = 0;
        let dernierePosition = { x: 0, y: 0};

        zoneSouris.addEventListener("mouseenter", _ => {// _ = (e) mais on peut ne pas le mettre parce qu'on ne l'utilise pas
            infoSouris.innerHTML += '<p style="color: green;">Souris entrée dans la zone</p>';
        });

        zoneSouris.addEventListener("mouseleave", _ => infoSouris.innerHTML += '<p style="color: red;">Souris sortie de la zone</p>'); // une suele ligne donc pas besoin de crochets

        zoneSouris.addEventListener("mousemove", e => {
            const rect = zoneSouris.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top); // en graphisme l'origine est en haut à gauche, pas en bas à gauche

            if(Math.abs(x - dernierePosition.x) > 5 || Math.abs(y - dernierePosition.y) > 5) {// mvts assez grands de la souris
                dernierePosition = { x,y }; //= {x:x,y:y}
                infoSouris.innerHTML = `<p>Position : (${x}, ${y})</p>`;
            }
        });

        zoneSouris.addEventListener("mousedown", e => {
            let bouton;

            if(e.button === 0) {
                bouton = "Gauche"
            }
            else if(e.button === 2) {
                bouton = "Droit"
            }
            else {
                bouton = "Milieu"
            }

            infoSouris.innerHTML += `<p style="color: blue;">Bouton ${bouton} enfoncé</p>`
        });

        zoneSouris.addEventListener("mouseup", e => {
            let bouton;

            if(e.button === 0) {
                bouton = "Gauche"
            }
            else if(e.button === 2) {
                bouton = "Droit"
            }
            else {
                bouton = "Milieu"
            }

            infoSouris.innerHTML += `<p style="color: blue;">Bouton ${bouton} relaché</p>`
        });

        zoneSouris.addEventListener("click", _ => {
            compteurClics++;
            infoSouris.innerHTML += `<p style="color: orange;">Clic ${compteurClics} effectué</p>`
        });

        zoneSouris.addEventListener("dblclick", _ => {
            infoSouris.innerHTML += `<p style="color: darkorange;">Double clic effectué</p>`
        });

        zoneSouris.addEventListener("contextmenu", e => {
            e.preventDefault();
            infoSouris.innerHTML += `<p style="color: darkred;">Menu contextuel désactivé</p>`
        });
    }

    // ---------------------------------------------------------------------------------------------------------------------------------

    const zoneClavier = document.getElementById("zone-clavier")
    const infoClavier = document.getElementById("info-clavier")

    if(zoneClavier && infoClavier) {
        let derinereTouche = "";
        let nombreCaracteres = 0;
        let touchesSpeciales = [];

        zoneClavier.addEventListener("keydown", e => {
            derinereTouche = e.key;

            if(['Control', 'Shift', 'Alt', 'Meta'].includes(e.key)) {
                if(!touchesSpeciales.includes(e.key)) {
                    touchesSpeciales.push(e.key);
                }
            }

            if(e.key === 'Tab') {
                e.preventDefault();
            }

            if(e.ctrlKey && e.key === 'a') {
                e.preventDefault();
                zoneClavier.select();
                infoClavier.innerHTML = `<p style="color: blue;">Touche Ctrl+A détectée</p>`;
                return;
            }

            if(e.target.value.length >= 100 && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
                infoClavier.innerHTML = `<p style="color: red;">Limite de 100 caractères atteinte</p>`;
                return;
            }

            infoClavier.innerHTML = `
            <strong>Evenement keydown</strong><br>
            Touche: "${e.key}"<br>
            Code: "${e.code}"<br>
            Alt: "${e.altKey}",  Ctrl: "${e.ctrlKey}",  Shift: "${e.shiftKey}"<br>
            Dernière touche: "${derinereTouche}"<br>
            Nombre de caractères: "${nombreCaracteres}"<br>
            Touches spéciales: "${touchesSpeciales.join(', ')|| 'Aucune'}"<br>
            `
        });

        zoneClavier.addEventListener("keyup", e => {
            if(['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) {
                touchesSpeciales = touchesSpeciales.filter(touche => touche !== e.key);
            }

            infoClavier.innerHTML = `<br><strong>Evenement keyup</strong> - Touche: "${e.key}"`;


        });

        zoneClavier.addEventListener("input", e => {
            nombreCaracteres = e.target.value.length;

            let validationMessage = '';
            if(nombreCaracteres > 80) {
                validationMessage = `<p style="color: orange">Attention: plus de 80 caractères</p>`
            }
            if(nombreCaracteres > 100) {
                validationMessage = `<p style="color: red">Attention: limite de 100 caractères atteinte</p>`
            }
            infoClavier.innerHTML = `
                <strong>Evenement input</strong>
                Contenu: "${e.target.value}"<br>
                Nombre de caractères: "${nombreCaracteres}"<br>
                Dernière touche: "${derinereTouche}"<br>
                ${validationMessage}
            `
        })
    }
});