function signup() {
    const nombreUsuarioInput = document.getElementById("nombreUsuario");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const correoInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const fechaNacInput = document.getElementById("fecha_nac");

    const data = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        email: correoInput.value,
        usuario: nombreUsuarioInput.value,
        contraseña: passwordInput.value,
        fecha_nac: fechaNacInput.value,
        ruta_img_usu: "rutaImagenA", // Puedes ajustar la ruta de la imagen si es necesario
    };



    console.log(data);

    fetch('http://127.0.0.1:5000/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status == 200) {
            return response.json().then(data => {
                console.log(data);
                localStorage.setItem("user-sign", JSON.stringify(data));
                // Limpiar los campos después del registro
                window.location.href = "login.html";
                
                nombreUsuarioInput.value = "";
                nombreInput.value = "";
                apellidoInput.value = "";
                correoInput.value = "";
                passwordInput.value = "";
                fechaNacInput.value = "";

                // Redirigir al usuario a donde desees después del registro
                
            });
        } else {
            return response.json().then(data => {
                console.log(data);
            });
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

// document.getElementById("signup-form").addEventListener("submit", signup);
// document.getElementById("signup-form").onclick = signup;
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    signup();
});
