// Tasa de cambio predefinida (1 USD = 18.18 MXN aproximadamente)
const TASA_DE_CAMBIO = 0.055;

// Selección de los elementos del formulario
const pesos = document.getElementById('pesos');
const dolares = document.getElementById('dolares');
const btnConvertir = document.getElementById('btnConvertir');

// Función que convierte pesos mexicanos a dólares
function convertir() {
    const valor = pesos.value.trim();

    // Validación: el campo no debe estar vacío
    if (valor === '') {
        alert('Debes ingresar una cantidad en pesos mexicanos.');
        dolares.value = '';
        return;
    }

    // Validación: el valor debe ser numérico
    if (isNaN(valor)) {
        alert('El valor ingresado debe ser numérico.');
        dolares.value = '';
        return;
    }

    const cantidad = Number(valor);

    // Validación: el valor debe ser positivo
    if (cantidad <= 0) {
        alert('La cantidad debe ser un número positivo.');
        dolares.value = '';
        return;
    }

    // Fórmula: USD = MXN * tasa_de_cambio
    const resultado = cantidad * TASA_DE_CAMBIO;

    dolares.value = resultado.toFixed(2) + ' USD';
}

// Asignar la función al botón "Convertir"
btnConvertir.addEventListener('click', convertir);
