// Selección de los elementos del formulario
const edad = document.getElementById('edad');
const resultado = document.getElementById('resultado');
const btnVerificar = document.getElementById('btnVerificar');

// Función que verifica si la persona puede votar
function verificar() {
    const valor = edad.value.trim();

    // Validación: el campo no debe estar vacío
    if (valor === '') {
        alert('Debes ingresar tu edad.');
        resultado.value = '';
        return;
    }

    // Validación: el valor debe ser numérico
    if (isNaN(valor)) {
        alert('El valor ingresado debe ser numérico.');
        resultado.value = '';
        return;
    }

    const anios = Number(valor);

    // Validación: el valor debe ser positivo
    if (anios <= 0) {
        alert('La edad debe ser un número positivo.');
        resultado.value = '';
        return;
    }

    // Condición de validación: mayor o igual a 18 años
    if (anios >= 18) {
        resultado.value = 'Puedes votar';
    } else {
        resultado.value = 'No puedes votar';
    }
}

// Asignar la función al botón "Verificar"
btnVerificar.addEventListener('click', verificar);
