function limpiarLista(channelsList){
    while (channelsList.firstChild) {
        channelsList.removeChild(channelsList.firstChild);
    }
}

function obtenerCanales(nombreServidor) {
    const channelsList = document.getElementById('channels-list');
    const messageList = document.getElementById('message-list');
    
    // Construir la URL para obtener los canales del servidor específico
    const url = `http://127.0.0.1:5000/channels?nombre_servidor=${nombreServidor}`;
    
    // Realizar una solicitud fetch para obtener el JSON de canales
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Limpiar la lista de canales antes de agregar nuevos elementos
            // channelsList.innerHTML = '';
            limpiarLista(channelsList);
            limpiarLista(messageList);

            // Recorrer los datos y crear elementos <li> para cada canal
            data.forEach(channelItem => {
                const listItem = document.createElement('li');
                listItem.textContent = channelItem[0]; // Acceder al primer elemento de la lista interna
                channelsList.appendChild(listItem);

            // Agregar un event listener de clic para capturar el nombre del canal
                listItem.addEventListener('click', function() {
                    const channelName = channelItem[0];
                    console.log(channelName);

                    // Llamar a la función para obtener los mensajes del canal seleccionado
                    obtenerMensajes(channelName);
                });
            });
        })
        .catch(error => {
            console.error('Error al obtener los canales:', error);
        });
}