// Fonction asynchrone permettant d'inclure un fichier HTML dans un autre à l'aide de fetch et innerHTML
async function include(ref) {
    try {
        const response = await fetch(`./component/${ref}.html`);
        const content = await response.text();
        document.body.innerHTML += content;
    } catch (error) {
        console.error("Une erreur s'est produite lors du chargement du fichier :", error);
    }
}
