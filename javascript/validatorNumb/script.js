// Seleccionar los elementos del DOM
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const parrafo = document.createElement("p");

// Función para validar el número de teléfono
const numbValid = (number) => {
    // Expresión regular para validar el formato del número de teléfono
    const filtro1 = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    if (number.trim() === "") {
        // Mostrar alerta si no se proporciona un número de teléfono
        alert("Please provide a phone number");
    } else if (filtro1.test(number)) {
        // Devolver mensaje si el número de teléfono es inválido
        return `Valid US number: ${number}`;
    } else {
        // Devolver mensaje si el número de teléfono es válido
        return `Invalid US number: ${number}`;
    }
};

// Evento click para el botón de verificar
checkBtn.addEventListener("click", function () {
    // Obtener el resultado de la validación del número de teléfono
    const showResult = numbValid(userInput.value);
    // Establecer el texto del párrafo con el resultado
    parrafo.textContent = showResult;
    // Agregar el párrafo al contenedor de resultados
    resultsDiv.appendChild(parrafo);
    // Limpiar el valor del input
    userInput.value = "";
});

// Evento click para el botón de limpiar
clearBtn.addEventListener("click", function () {
    // Limpiar el contenido del contenedor de resultados
    resultsDiv.textContent = "";
});
