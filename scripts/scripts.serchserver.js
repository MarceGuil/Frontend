// Función para mostrar la ventana emergente del perfil
function showProfilePopup() {
    var popup = document.getElementById("profile-popup");
    if (popup) {
        popup.style.display = "block"; // Mostrar la ventana emergente si existe
    }
}

// Agrega un evento onclick para cerrar la ventana emergente
document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.getElementById("close-profile-popup");
    if (closeButton) {
        closeButton.onclick = function () {
            var popup = document.getElementById("profile-popup");
            if (popup) {
                popup.style.display = "none"; // Ocultar la ventana emergente si existe al hacer clic en Cerrar
            }
        };
    }

    // Obtén una referencia al elemento <ul> donde se mostrarán los servidores
    const serverList = document.getElementById("server-list");

    // Lista de servidores a los que se ha unido el usuario (EJEMPLO)
    const serversJoined = ["Servidor 1", "Servidor 2", "Servidor 3"];

    // Recorre la lista de servidores y crea elementos <li>
    serversJoined.forEach((server) => {
        // Crea un elemento <li>
        const listItem = document.createElement("li");

        // Establece el contenido de <li> como el nombre del servidor
        listItem.textContent = server;

        // Agrega el <li> a la lista de servidores
        if (serverList) {
            serverList.appendChild(listItem);
        }
    });

    // Agrega eventos para habilitar la edición al hacer clic en los botones "Editar"
    var editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach((button) => {
        button.onclick = function () {
            // Agrega aquí la lógica para habilitar la edición correspondiente
            console.log("Editar elemento");
        };
    });
});

// Función para mostrar la ventana emergente del cambio de contraseña
function showChangePasswordPopup() {
    var changePasswordPopup = document.getElementById("change-password-popup");
    if (changePasswordPopup) {
        changePasswordPopup.style.display = "block"; // Mostrar la ventana emergente de cambio de contraseña si existe
    }
}

// Agrega un evento onclick para abrir la ventana emergente de cambio de contraseña al hacer clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    var changePasswordButton = document.getElementById("change-password-button");
    if (changePasswordButton) {
        changePasswordButton.onclick = function () {
            showChangePasswordPopup();
        };
    }
});

// Función para cerrar la ventana emergente del cambio de contraseña
function closeChangePasswordPopup() {
    var changePasswordPopup = document.getElementById("change-password-popup");
    if (changePasswordPopup) {
        changePasswordPopup.style.display = "none"; // Ocultar la ventana emergente de cambio de contraseña si existe
    }
}

// Agrega un evento onclick para abrir la ventana emergente de cambio de contraseña al hacer clic en el botón
document.addEventListener("DOMContentLoaded", function() {
    var changePasswordButton = document.getElementById("change-password-button");
    if (changePasswordButton) {
        changePasswordButton.onclick = function () {
            showChangePasswordPopup();
        };
    }

    // Agrega un evento onclick para cerrar la ventana emergente de cambio de contraseña al hacer clic en el enlace "Cerrar"
    var closeChangePasswordButton = document.getElementById("close-change-password-popup");
    if (closeChangePasswordButton) {
        closeChangePasswordButton.onclick = function () {
            closeChangePasswordPopup();
        };
    }

    // Agrega un evento para el formulario de cambio de contraseña
    var changePasswordForm = document.getElementById("change-password-form");
    if (changePasswordForm) {
        changePasswordForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            console.log("Contraseña cambiada");
            closeChangePasswordPopup(); // Cierra la ventana emergente después de cambiar la contraseña
        });
    }
});
