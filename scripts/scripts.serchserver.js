// Función para mostrar la ventana emergente del perfil
function showProfilePopup() {
    var popup = document.getElementById("profile-popup");
    if (popup) {
        popup.style.display = "block";
    }
}

// Función para cerrar la ventana emergente del perfil
function closeProfilePopup() {
    var popup = document.getElementById("profile-popup");
    if (popup) {
        popup.style.display = "none"; 
    }
}

// Agrega un evento onclick para cerrar la ventana emergente del perfil al hacer clic en el enlace "Cerrar"
document.addEventListener("DOMContentLoaded", function() {
    var closeProfileButton = document.getElementById("close-profile-popup");
    if (closeProfileButton) {
        closeProfileButton.onclick = function () {
            closeProfilePopup(); // Cierra la ventana emergente del perfil
        };
    }

    // Función para mostrar la ventana emergente del cambio de contraseña
    function showChangePasswordPopup() {
        var changePasswordPopup = document.getElementById("change-password-popup");
        if (changePasswordPopup) {
            changePasswordPopup.style.display = "block"; // Mostrar la ventana emergente de cambio de contraseña si existe
        }
    }

    // Función para cerrar la ventana emergente del cambio de contraseña
    function closeChangePasswordPopup() {
        var changePasswordPopup = document.getElementById("change-password-popup");
        if (changePasswordPopup) {
            changePasswordPopup.style.display = "none"; // Ocultar la ventana emergente de cambio de contraseña si existe
        }
    }

    // Agregar eventos a los elementos del DOM
    // Evento para abrir la ventana emergente del cambio de contraseña
    var changePasswordButton = document.getElementById("change-password-button");
    if (changePasswordButton) {
        changePasswordButton.addEventListener("click", function() {
            showChangePasswordPopup();
        });
    }

    // Evento para cerrar la ventana emergente del cambio de contraseña
    var closeChangePasswordButton = document.getElementById("close-change-password-popup");
    if (closeChangePasswordButton) {
        closeChangePasswordButton.addEventListener("click", function() {
            closeChangePasswordPopup();
        });
    }

    // Agrega eventos para habilitar la edición al hacer clic en los botones "Editar"
    var editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach((button) => {
        button.onclick = function () {
            // Agrega aquí la lógica para habilitar la edición correspondiente
            console.log("Editar elemento");
        };
    });

    // Lógica para cambiar Avatar 
    document.getElementById("change-avatar-button").addEventListener("click", function() {
        var avatarInput = document.getElementById("avatar-input");
        avatarInput.style.display = "block";

        // Manejar el cambio de avatar
        avatarInput.addEventListener("change", function(event) {
            var avatar = event.target.files[0];
            if (avatar) {
                // Crear un objeto FormData para enviar la imagen al servidor
                var formData = new FormData();
                formData.append("avatar", avatar);

                // Hacer una solicitud POST al servidor para guardar la nueva imagen del avatar
                fetch("/guardar-avatar", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    // Actualizar la imagen de avatar en el frontend
                    var avatarImage = document.getElementById("avatar");
                    avatarImage.src = "../templates/avatars/" + data.avatarFileName;
                })
                .catch(error => console.error(error));
            }
        });
    });

    // Lógica para editar Nombre de Usuario 
    document.getElementById("edit-username-button").addEventListener("click", function() {
        var nuevoNombreUsuario = prompt("Ingrese el nuevo nombre de usuario:");
        if (nuevoNombreUsuario !== null) {
            // Hacer una solicitud POST al servidor para actualizar el nombre de usuario
            fetch("/actualizar-usuario", {
                method: "POST",
                body: JSON.stringify({ username: nuevoNombreUsuario }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // Actualizar el nombre de usuario en el frontend (si el servidor devuelve una confirmación)
                if (data.success) {
                    document.getElementById("username").textContent = nuevoNombreUsuario;
                }
            })
            .catch(error => console.error(error));
        }
    });

    // Lógica para editar Nombre
    document.getElementById("edit-name-button").addEventListener("click", function() {
        var nuevoNombre = prompt("Ingrese el nuevo nombre:");
        if (nuevoNombre !== null) {
            // Hacer una solicitud POST al servidor para actualizar el nombre
            fetch("/actualizar-nombre", {
                method: "POST",
                body: JSON.stringify({ nombre: nuevoNombre }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // Actualizar el nombre en el frontend (si el servidor devuelve una confirmación)
                if (data.success) {
                    document.getElementById("nombre").textContent = nuevoNombre;
                }
            })
            .catch(error => console.error(error));
        }
    });

    // Lógica para editar Apellido
    document.getElementById("edit-surname-button").addEventListener("click", function() {
        var nuevoApellido = prompt("Ingrese el nuevo apellido:");
        if (nuevoApellido !== null) {
            // Hacer una solicitud POST al servidor para actualizar el apellido
            fetch("/actualizar-apellido", {
                method: "POST",
                body: JSON.stringify({ apellido: nuevoApellido }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // Actualizar el apellido en el frontend (si el servidor devuelve una confirmación)
                if (data.success) {
                    document.getElementById("apellido").textContent = nuevoApellido;
                }
            })
            .catch(error => console.error(error));
        }
    });

    // Lógica para editar Correo Electrónico
    document.getElementById("edit-email-button").addEventListener("click", function() {
        var nuevoCorreo = prompt("Ingrese el nuevo correo electrónico:");
        if (nuevoCorreo !== null) {
            // Hacer una solicitud POST al servidor para actualizar el correo electrónico
            fetch("/actualizar-correo", {
                method: "POST",
                body: JSON.stringify({ correo: nuevoCorreo }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // Actualizar el correo electrónico en el frontend (si el servidor devuelve una confirmación)
                if (data.success) {
                    document.getElementById("correo").textContent = nuevoCorreo;
                }
            })
            .catch(error => console.error(error));
        }
    });
});

