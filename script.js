document.addEventListener("DOMContentLoaded", () => {
    // Load the modal HTML dynamically
    fetch('components/contactModal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-container').innerHTML = html;

            // Modal open/close functionality
            const modal = document.getElementById('modal');
            const contactButton = document.getElementById('contact-button');
            const closeModal = document.getElementById('close-modal');

            contactButton.addEventListener('click', () => {
                modal.style.display = 'flex';
            });

            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        })
        .catch(error => console.error('Error loading modal:', error));
});
