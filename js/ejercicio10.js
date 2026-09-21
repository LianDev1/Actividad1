// Selección de los elementos del formulario
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btnConvertir');

// Función que convierte de grados Celsius a grados Fahrenheit
function convertir() {
    const valor = celsius.value.trim();

    // Validación: el campo no debe estar vacío
    if (valor === '') {
        alert('Debes ingresar un valor en grados Celsius.');
        fahrenheit.value = '';
        return;
    }

    // Validación: el valor debe ser numérico
    if (isNaN(valor)) {
        alert('El valor ingresado debe ser numérico.');
        fahrenheit.value = '';
        return;
    }

    // Fórmula: F = (C * 9/5) + 32
    const grados = Number(valor);
    const resultado = (grados * 9 / 5) + 32;

    fahrenheit.value = resultado + '°F';
}

// Asignar la función al botón "Convertir"
btnConvertir.addEventListener('click', convertir);
