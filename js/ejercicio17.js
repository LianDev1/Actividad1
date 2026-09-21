// Scope global: elementos del DOM disponibles en todo el programa
const input = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('listaTareas');

// Clave con la que se guardan las tareas en el Local Storage
const CLAVE = 'tareas';

// obtenerTareas(): recupera las tareas del Local Storage y las convierte
// de JSON a un arreglo de JavaScript con JSON.parse()
function obtenerTareas() {
    // Scope local: la variable tareas solo existe dentro de esta función
    let tareas = localStorage.getItem(CLAVE);
    return tareas ? JSON.parse(tareas) : [];
}

// guardarTareas(): convierte el arreglo a JSON con JSON.stringify()
// y lo almacena en el Local Storage
function guardarTareas(tareas) {
    localStorage.setItem(CLAVE, JSON.stringify(tareas));
}

// Closure: encapsula la lógica de agregar y eliminar tareas, manteniendo
// el estado privado dentro de la función manejarTareas()
function manejarTareas() {
    let tareas = obtenerTareas();

    return {
        // agregarTarea(): agrega una nueva tarea al almacenamiento local
        agregar: function (texto) {
            tareas.push({ tarea: texto, completada: false });
            guardarTareas(tareas);
            renderizarTareas(tareas);
        },
        // eliminarTarea(): elimina una tarea específica del almacenamiento local
        eliminar: function (indice) {
            tareas.splice(indice, 1);
            guardarTareas(tareas);
            renderizarTareas(tareas);
        },
        // Devuelve las tareas actuales
        obtener: function () {
            return tareas;
        }
    };
}

// Se crea el closure con el estado encapsulado
const gestor = manejarTareas();

// renderizarTareas(): muestra las tareas en la página web
function renderizarTareas(tareas) {
    lista.innerHTML = '';

    tareas.forEach((elemento, indice) => {
        const li = document.createElement('li');
        li.classList.add('tarea');

        const textoNodo = document.createTextNode(elemento.tarea);
        li.appendChild(textoNodo);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';

        // Confirmar la eliminación con un alert de SweetAlert
        botonEliminar.addEventListener('click', function () {
            Swal.fire({
                title: '¿Eliminar la tarea?',
                text: elemento.tarea,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    gestor.eliminar(indice);
                    Swal.fire('Eliminada', 'La tarea fue eliminada.', 'success');
                }
            });
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Agregar tarea al hacer clic en el botón
botonAgregar.addEventListener('click', function () {
    const texto = input.value.trim();

    if (texto === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Escribe una tarea para agregarla.'
        });
        return;
    }

    gestor.agregar(texto);
    input.value = '';
});

// Persistencia: las tareas se cargan desde el Local Storage al recargar la página
renderizarTareas(gestor.obtener());
