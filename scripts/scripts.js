document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === 'usuario' && password === 'contraseña') {
            // Redirecciona al usuario a la página principal después del inicio de sesión
            window.location.href = 'pagina_principal.html';
        } else {
            errorMessage.textContent = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        }
    });
});

// Abrir ventana emergente al hacer clic en el avatar o nombre del usuario
const avatar = document.getElementById('avatar');
const username = document.getElementById('username');
const userPopup = document.getElementById('userPopup');

avatar.addEventListener('click', () => {
    userPopup.style.display = 'block';
});

username.addEventListener('click', () => {
    userPopup.style.display = 'block';
});

// Cerrar ventana emergente al hacer clic en Cerrar Sesión
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
    userPopup.style.display = 'none';
});
