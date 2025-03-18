// Lista para almacenar los nombres
let amigos = [];

// Función para agregar nombres
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Expresión regular para validar nombres (solo letras y espacios)
    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    if (!nombreValido.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ''; // Limpiar el campo de texto
}

// Función para mostrar la lista de nombres
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de renderizar

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = `${amigo}`;
        item.className = 'name-item';

        // Crear botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.className = 'delete-button';
        botonEliminar.onclick = () => eliminarAmigo(index);

        item.appendChild(botonEliminar); // Agregar botón al elemento
        lista.appendChild(item);
    });
}

// Función para eliminar un amigo
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar amigo de la lista
    mostrarLista(); // Actualizar la lista visible
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay suficientes amigos en la lista para hacer un sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
