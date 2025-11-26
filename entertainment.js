function showEntertainmentDetails() {
    const ethnicGroup = document.getElementById('ethnic-group').value;
    const entertainmentDetails = document.getElementById('entertainment-details');
    const groupTitle = document.getElementById('group-title');
    const groupDetails = document.getElementById('group-details');

    const entertainmentInfo = {
        hausa: {
            title: 'Hausa Entertainment',
            details: 'Hausa entertainment often includes traditional music played using instruments like the "Kakaki" (a long metal trumpet) and "Kalangu" drums. Hausa culture is also rich in folktales, drama, and the Shadi (wedding) festival that includes traditional dances and music performances.'
        },
        igbo: {
            title: 'Igbo Entertainment',
            details: 'Igbo entertainment is deeply rooted in their masquerade festivals, music, and dance. Instruments like the "Udu" (a clay pot drum) and "Ekwe" (wooden drum) are commonly used. The "Atilogwu" dance is a popular form of entertainment in Igbo culture, performed at festivals and ceremonies.'
        },
        yoruba: {
            title: 'Yoruba Entertainment',
            details: 'Yoruba entertainment is characterized by the talking drums ("Dundun") and the bata drums, which are central to their music. Yoruba people are known for their rich storytelling, drama (often centered around gods and ancestors), and the "Eyo" festival, which features elaborate costumes and performances.'
        }
    };

    if (entertainmentInfo[ethnicGroup]) {
        groupTitle.textContent = entertainmentInfo[ethnicGroup].title;
        groupDetails.textContent = entertainmentInfo[ethnicGroup].details;
        entertainmentDetails.classList.remove('hidden');
    } else {
        entertainmentDetails.classList.add('hidden');
    }
}
