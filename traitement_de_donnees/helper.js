// utilitaire => mettre dans helper
const parseHTML = (nom, age, ville, salaire) => {
    return `
        <div class="client-card">
            <h4>${nom}</h4>
            <p><strong>Age : </strong> ${age} ans</p>
            <p><strong>Ville : </strong> ${ville}</p>
            <p><strong>Salaire : </strong> ${salaire} €</p>
        </div>
    `;
}

export default parseHTML;