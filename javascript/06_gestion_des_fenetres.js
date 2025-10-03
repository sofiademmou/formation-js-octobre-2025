let fenetreTest = null;

if(fenetreTest && !fenetreTest.closed) {
    alert("La fenêtre est déjà ouverte !");
} else {
    fenetreTest = window.open(
        "",
        "maFenetre",
        "width=400,height=300,scrollbars=yes,resizable=yes,menubar=yes,toolbar=no"
    );

    if(fenetreTest) {//attention write est depricated
        fenetreTest.document.write(`
            <html>
            <head>
                <title>Fenetre de test</title>
                <style>
                    body { font-family : Arial, sans-serif; padding: 20px; }
                    button { margin: 5px; padding: 10px; }
                </style>
            </head>
            <body>
                <h1>Fenetre ouverte!</h1>
                <p>Cette fenetre a été ouverte par JavaScript</p>
                <button onclick="window.close()">Fermer la fenetre</button>
                <button onclick="alert('Message depuis la fenetre enfant')">Alerte</button>
                <hr>
                <p><strong>Communication entre fenetres</strong></p>
                <button onclick="envoyerMessage()">Envoyer un message</button>

                <script>
                    function envoyerMessage() {
                        if(window.opener) {
                            window.opener.postMessage('Message depuis enfant', '*');
                        }
                    }
                </script>


            </body>
            </html>
            `);
    }
}