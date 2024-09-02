document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('dialog');
    const showButton = document.querySelector('span > i');
    const closeButton = document.querySelector('#closeDialog');

    if (!dialog || !showButton || !closeButton) {
        console.error('Yksi tai useampi tarvittava elementti puuttuu: dialog, showButton, tai closeButton.');
        return;
    }

    showButton.addEventListener('click', () => {     /* ok */
        dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
        dialog.close();
    });

    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
