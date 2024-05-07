const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('cell-phone');

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    passwordInput.focus();}
});