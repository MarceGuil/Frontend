var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});



// function obtenerContenidoNombre(){
// 	var nombre = document.getElementById("nombre_servidor").value;
// 	console.log(nombre);
// }

function obtenerContenidoNombre(){
    // var nombre = document.getElementById("nombre_servidor").value;
    // console.log(nombre);

	const data = {
		nombre: document.getElementById("nombre_servidor").value,
		id_usuario: JSON.parse(localStorage.getItem("user")).id_usuario,
	};
	console.log(data)
	fetch('http://127.0.0.1:5000/server/', {
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
				localStorage.setItem("server", JSON.stringify(data));
				window.location.href = "principal.html";
			});
		} else {
			return response.json().then(data => {
				document.getElementById("message").innerHTML = data.message;
			});
		}
	})
	.catch((error) => {
		console.log(error);
	});

    //     // URL para crear un nuevo servidor
    //     const urlCrearServidor = 'http://127.0.0.1:5000/server?nombre_servidor=${nombre}';

    //     // Realiza una solicitud fetch con el método POST
    //     fetch(urlCrearServidor, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
	// 			'Access-Control-Allow-Origin': '*',
    //         },
    //         body: JSON.stringify(nuevoServidor),
	// 		credentials: 'include'
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             // Si la respuesta es exitosa, cierra el popup y vuelve a cargar la lista de servidores
    //             obtenerServidores();
	// 			overlay.classList.remove('active');
    //             popup.classList.remove('active');
                
    //         } else {
    //             // Si la respuesta no es exitosa, muestra un mensaje de error
    //             console.error('Error al crear el servidor:', response.statusText);
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error al crear el servidor:', error);
    //     });
    // } else {
    //     console.error('El nombre del servidor no puede estar vacío.');
    // }
}