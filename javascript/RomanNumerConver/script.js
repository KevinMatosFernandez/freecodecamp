// Arrays para las representaciones romanas
const unidadesRomanas = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const decenasRomanas = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const centenasRomanas = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const millaresRomanos = ['', 'M', 'MM', 'MMM'];

// Función para convertir números a romanos
function convertirANumerosRomanos(entrada) {
    // Verificar si la entrada está vacía
    if (entrada === "") {
        return "Please enter a valid number";
    }

    // Verificar si la entrada es un número y está dentro del rango permitido
    if (/[^-a-zA-Z]/g.test(entrada)) {
        const num = parseInt(entrada);
        if (num <= 0) {
            return "Please enter a number greater than or equal to 1";
        }
        if (num <= 3999) {
            const millar = millaresRomanos[Math.floor(num / 1000)];
            const centena = centenasRomanas[Math.floor((num % 1000) / 100)];
            const decena = decenasRomanas[Math.floor((num % 100) / 10)];
            const unidad = unidadesRomanas[num % 10];
            return millar + centena + decena + unidad;
        } else {
            // La entrada está fuera del rango permitido
            return "Please enter a number less than or equal to 3999";
        }
    } else {
        // La entrada no es un número válido
        return "Please enter a valid number";
    }
}

// Obtener referencia al botón y al input
const botonConvertir = document.getElementById("convert-btn");
const inputNumero = document.getElementById("number");
const showResult = document.getElementById("output");

// Agregar un event listener para el clic en el botón
botonConvertir.addEventListener("click", function () {
    // Obtener el valor del input
    const entrada = inputNumero.value;
    // Convertir el número y mostrar el resultado
    const resultado = convertirANumerosRomanos(entrada);
    showResult.innerText = resultado;
    inputNumero.value = '';
    showResult.style.display = 'block';
    showResult.style.border = 'solid';
    
});
