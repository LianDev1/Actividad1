// Selección de los elementos del formulario
const kilometros = document.getElementById('kilometros');
const millas = document.getElementById('millas');
const btnConvertir = document.getElementById('btnConvertir');

// Función que convierte kilómetros a millas
function convertir() {
    const valor = kilometros.value.trim();

    // Validación: el campo no debe estar vacío
    if (valor === '') {
        alert('Debes ingresar una distancia en kilómetros.');
        millas.value = '';
        return;
    }

    // Validación: el valor debe ser numérico
    if (isNaN(valor)) {
        alert('El valor ingresado debe ser numérico.');
        millas.value = '';
        return;
    }

    // Fórmula: M = K * 0.621371
    const km = Number(valor);
    const resultado = km * 0.621371;

    millas.value = resultado + ' millas';
}

// Asignar la función al botón "Convertir"
btnConvertir.addEventListener('click', convertir);
