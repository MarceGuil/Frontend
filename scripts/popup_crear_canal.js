var btnAbrirPopup = document.getElementById('btn-abrir-popup_canal'),
	overlayY = document.getElementById('overlayY'),
	popupC = document.getElementById('popupC'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popupA');

btnAbrirPopup.addEventListener('click', function(e){
    e.preventDefault();
	overlayY.classList.add('active');
	popupC.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlayY.classList.remove('active');
	popupC.classList.remove('active');
});



// function obtenerContenidoNombre(){
// 	var nombre = document.getElementById("nombre_servidor").value;
// 	console.log(nombre);
// }



// function crearCanal(serverName) {
//     // Abre el popup para crear un canal
//     overlayY.classList.add('active');
//     popupC.classList.add('active');

//     // Agrega un event listener al formulario de creación de canal
//     const createChannelForm = document.getElementById('form_crear_canal');
//     createChannelForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const nombreCanal = document.getElementById('nombre_canal').value;
//         console.log(nombreCanal);

//         // Realiza una solicitud para crear el canal en el servidor seleccionado
//         const data = {
//             nombre: nombreCanal,
//             nombre_servidor: serverName, // Incluye el nombre del servidor en los datos del canal
//         };

//         fetch('http://127.0.0.1:5000/channels/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify(data),
//             credentials: 'include',
//             mode: 'no-cors',
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Si la respuesta es exitosa, cierra el popup y vuelve a cargar la lista de canales
//                 overlayY.classList.remove('active');
//                 popupC.classList.remove('active');
//                 obtenerCanales(serverName); // Actualiza la lista de canales
//             } else {
//                 // Si la respuesta no es exitosa, muestra un mensaje de error
//                 console.error('Error al crear el canal:', response.statusText);
//             }
//         })
//         .catch(error => {
//             console.error('Error al crear el canal:', error);
//         });
//     });
// }

function crearCanal() {
    const data = {
        nombre: document.getElementById('nombre_canal').value,
        nombre_servidor: JSON.parse(localStorage.getItem("name_server")),
    };
    console.log(data)
    fetch('http://127.0.0.1:5000/channels/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Asegúrate de establecer el tipo de contenido como JSON
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data), // Convierte tu objeto JavaScript a una cadena JSON
        credentials: 'include',
    })
    .then(response => {
        if (response.status == 200) {
            return response.json().then(data => {
                console.log(data);
                // localStorage.setItem("user", JSON.stringify(data));
                // window.location.href = "principal.html";

                // emailInput.value = "";
                // passwordInput.value = "";
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