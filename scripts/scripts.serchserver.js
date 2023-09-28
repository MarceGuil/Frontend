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
    serverList.appendChild(listItem);
});
