// Selección de los elementos del formulario
const numeros = document.getElementById('numeros');
const mayor = document.getElementById('mayor');
const menor = document.getElementById('menor');
const promedio = document.getElementById('promedio');
const btnCalcular = document.getElementById('btnCalcular');

// Función que calcula el mayor, el menor y el promedio
function calcular() {
    const valor = numeros.value.trim();

    // Validación: el campo no debe estar vacío
    if (valor === '') {
        alert('Debes ingresar una serie de números separados por comas.');
        limpiar();
        return;
    }

    // split(): separa la cadena en un arreglo usando la coma como delimitador
    const cadenas = valor.split(',');

    // map(): convierte cada elemento del arreglo en número
    const lista = cadenas.map(Number);

    // Validación: todos los valores deben ser números válidos
    const sonValidos = cadenas.every(elemento => elemento.trim() !== '') &&
                       lista.every(numero => !isNaN(numero));

    if (!sonValidos) {
        alert('Debes ingresar únicamente números válidos separados por comas.');
        limpiar();
        return;
    }

    // Math.max() y Math.min() con el operador spread (...)
    const maximo = Math.max(...lista);
    const minimo = Math.min(...lista);

    // reduce(): suma todos los elementos para obtener el promedio
    const suma = lista.reduce((acc, numero) => acc + numero, 0);
    const media = suma / lista.length;

    mayor.value = maximo;
    menor.value = minimo;
    promedio.value = media;
}

// Función que limpia las cajas de resultado
function limpiar() {
    mayor.value = '';
    menor.value = '';
    promedio.value = '';
}

// Asignar la función al botón "Calcular"
btnCalcular.addEventListener('click', calcular);
