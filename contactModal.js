//クリック時のイベント
document.addEventListener("DOMContentLoaded", () => {

    /*contactModal*/
    fetch('components/contactModal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-contact').innerHTML = html;

            // Modal open/close functionality
            const Modalcontact = document.getElementById('Modalcontact');
            const OpenModalContact = document.getElementById('OpenModalContact');
            const CloseModalContact = document.getElementById('CloseModalContact');

            OpenModalContact.addEventListener('click', () => {
                Modalcontact.style.display = 'flex';
            });

            CloseModalContact.addEventListener('click', () => {
                Modalcontact.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === Modalcontact) {
                    Modalcontact.style.display = 'none';
                }
            });
        })
        .catch(error => console.error('Error loading modal:', error));

    
        /*productModal*/
        fetch('components/product1Modal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-product1').innerHTML = html;

            // Modal open/close functionality
            const ModalProduct1 = document.getElementById('ModalProduct1');
            const OpenModalProduct1 = document.getElementById('OpenModalProduct1');
            const CloseModalProduct1= document.getElementById('CloseModalProduct1');

            OpenModalProduct1.addEventListener('click', () => {
                ModalProduct1.style.display = 'flex';
            });

            CloseModalProduct1.addEventListener('click', () => {
                ModalProduct1.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === ModalProduct1) {
                    ModalProduct1.style.display = 'none';
                }
            });
        })
        .catch(error => console.error('Error loading modal:', error));
});
