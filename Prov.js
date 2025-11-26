function showProverbDetails() {
    const proverbGroup = document.getElementById('proverb-group').value;
    const proverbDetails = document.getElementById('proverb-details');
    const proverbTitle = document.getElementById('proverb-title');
    const proverbList = document.getElementById('proverb-list');

    // Clear previous proverbs
    proverbList.innerHTML = '';

    const proverbsInfo = {
        hausa: {
            title: 'Hausa Proverbs',
            proverbs: [
                'Aikin gama ya gama, wanda ya rage sai hamdala. (A finished task is completed, what remains is giving thanks.)',
                'Ba a shafa mai a baki, a ce an ci abinci. (You don’t apply oil to your lips and claim to have eaten.)',
                'Hannun daya ba ya daukar jinka. (One hand cannot carry a baby.)'
            ]
        },
        igbo: {
            title: 'Igbo Proverbs',
            proverbs: [
                'O bu onye kwe chi ya ekwe. (He who agrees with his spirit has success.)',
                'Egbe bere, ugo bere. (Let the kite perch, and let the eagle perch.)',
                'Okwu na-abu dika iberibe ewere ikpe. (Words are like eggs; when they drop, they break.)'
            ]
        },
        yoruba: {
            title: 'Yoruba Proverbs',
            proverbs: [
                'Ti a ba fi owo otun ba omo wi, a fi ti osi fa mora. (When you scold a child with your right hand, you draw them closer with your left.)',
                'Ajá tó bá má sòó, kìí fohùn rárá. (A dog that will get lost does not hear the hunter’s whistle.)',
                'Bí òwe bí òwe, laa n luu l’ógbón. (Proverbs are the horses of conversation; when speech is lost, we use proverbs to search for it.)'
            ]
        }
    };

    if (proverbsInfo[proverbGroup]) {
        proverbTitle.textContent = proverbsInfo[proverbGroup].title;
        proverbsInfo[proverbGroup].proverbs.forEach(proverb => {
            const listItem = document.createElement('li');
            listItem.textContent = proverb;
            proverbList.appendChild(listItem);
        });
        proverbDetails.classList.remove('hidden');
    } else {
        proverbDetails.classList.add('hidden');
    }
}