document.addEventListener('DOMContentLoaded', () => {
    const dictionaryCard = document.getElementById('dictionary');
    const proverbsCard = document.getElementById('proverbs');
    const entertainmentCard = document.getElementById('entertainment');
    const virtualMapsCard = document.getElementById('virtual-maps');
    const otherContentCard = document.getElementById('other-content');

    dictionaryCard.addEventListener('click', () => {
        console.log("Dictionary card clicked");
    });

    proverbsCard.addEventListener('click', () => {
        console.log("Proverbs card clicked");
    });

    entertainmentCard.addEventListener('click', () => {
        console.log("Entertainment card clicked");
    });

    virtualMapsCard.addEventListener('click', () => {
        console.log("Virtual Maps card clicked");
    });

    otherContentCard.addEventListener('click', () => {
        console.log("Other Cultural Content card clicked");
    });
});