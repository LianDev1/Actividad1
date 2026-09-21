// Arreglo donde se almacenan los objetos de tipo estudiante
let estudiantes = [];

// Selección de los elementos del formulario
const nombre = document.getElementById('nombre');
const calificacion = document.getElementById('calificacion');
const promedio = document.getElementById('promedio');
const mejor = document.getElementById('mejor');
const peor = document.getElementById('peor');
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');

// Función que agrega un estudiante al arreglo
function agregarEstudiante() {
    const nombreEstudiante = nombre.value.trim();
    const calificacionEstudiante = calificacion.value.trim();

    // Validación: los campos no deben estar vacíos
    if (nombreEstudiante === '' || calificacionEstudiante === '') {
        alert('Debes ingresar el nombre y la calificación del estudiante.');
        return;
    }

    // Validación: la calificación debe ser un número válido
    if (isNaN(calificacionEstudiante)) {
        alert('La calificación debe ser un número válido.');
        return;
    }

    // Creación del objeto estudiante y almacenamiento en el arreglo
    const estudiante = {
        nombre: nombreEstudiante,
        calificacion: Number(calificacionEstudiante)
    };

    estudiantes.push(estudiante);

    // Limpiar los campos para el siguiente estudiante
    nombre.value = '';
    calificacion.value = '';
}

// Función que calcula el promedio y los estudiantes con la calificación
// más alta y más baja
function calcular() {
    if (estudiantes.length === 0) {
        alert('Debes agregar al menos un estudiante.');
        return;
    }

    // reduce(): suma todas las calificaciones y se divide entre el total
    const media = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;

    // Math.max() y Math.min() con el operador spread (...)
    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    // Buscar el estudiante correspondiente a cada calificación
    const estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

    promedio.value = media;
    mejor.value = estudianteMayor.nombre;
    peor.value = estudianteMenor.nombre;
}

// Asignar las funciones a los botones
btnAgregar.addEventListener('click', agregarEstudiante);
btnCalcular.addEventListener('click', calcular);
