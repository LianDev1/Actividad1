// Funciones flecha para cada operación
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// Función principal: recibe la operación seleccionada, llama a la función
// flecha correspondiente y muestra el resultado
const calcularOperacion = (operacion) => {
    const numero1 = document.getElementById('numero1').value.trim();
    const numero2 = document.getElementById('numero2').value.trim();
    const resultado = document.getElementById('resultado');

    // Validación: los campos no deben estar vacíos
    if (numero1 === '' || numero2 === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Debes ingresar los dos números.'
        });
        resultado.value = '';
        return;
    }

    // Validación: los valores deben ser números
    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valores no válidos',
            text: 'Los valores ingresados deben ser números.'
        });
        resultado.value = '';
        return;
    }

    const a = Number(numero1);
    const b = Number(numero2);
    let valor;

    if (operacion === 'suma') {
        valor = sumar(a, b);
    } else if (operacion === 'resta') {
        valor = restar(a, b);
    } else if (operacion === 'multiplicacion') {
        valor = multiplicar(a, b);
    } else if (operacion === 'division') {
        valor = dividir(a, b);
    }

    // Si la división fue por cero se muestra el mensaje de error
    if (valor === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No es posible dividir entre cero.'
        });
        resultado.value = '';
        return;
    }

    resultado.value = valor;
};
