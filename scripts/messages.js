// function limpiarLista(messageList){
//     while (messageList.firstChild) {
//         messageList.removeChild(messageList.firstChild);
//     }
// }

const send_message = document.getElementById('enviar_mensaje');

send_message.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombreCanal = JSON.parse(localStorage.getItem("channel"));
    crearMensaje(nombreCanal);
});


function obtenerMensajes(nombreCanal) {
    const messageList = document.getElementById('message-list');

    // Construir la URL para obtener los mensajes del canal específico
    const url = `http://127.0.0.1:5000/messages/${nombreCanal}`;

    // Realizar una solicitud fetch para obtener el JSON de mensajes
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de mensajes antes de agregar nuevos elementos

// Usa el método para establecer el valor del campo de entrada a una cadena vacía
            messageList.innerHTML = '';
            // limpiarLista(messageList);

            // Recorrer los datos y crear elementos <li> para cada mensaje
            data.forEach(message => {
                const listItem = document.createElement('li');
                listItem.textContent = `Usuario: ${message.usuario}, Contenido: ${message.contenido}, Fecha: ${message.fecha_hora}`;
                messageList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los mensajes:', error);
        });
}

function crearMensaje(nombreCanal) {
    const message = document.getElementById('message').value;
    const user = JSON.parse(localStorage.getItem("user"));
    const id_usuario = user.id_usuario;
    const data = {
        id_usuario: id_usuario,
        contenido: message,
        nombre_canal: nombreCanal
    };
    console.log(data)
    fetch('http://127.0.0.1:5000/messages/', {
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

                document.getElementById('message').value = '';
                
                obtenerMensajes(nombreCanal);
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