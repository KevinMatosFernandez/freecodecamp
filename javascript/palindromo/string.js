const entradaUsuario = document.getElementById('text-input');
const btnver = document.getElementById('check-btn');
const resultp = document.getElementById('resultado');

const chequeo = function (input){
    const inpOrig = input;

    if (input === ''){
        alert("Por favor Rellene la entrada de texto ");
        return;
    }

    const inputMayuscula = input.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
    const inpArray = [...inputMayuscula]; // Convertir a un array
    const inpReverse = [...inpArray].reverse(); // Invertir el array
    const inpReverseStr = inpReverse.join(''); // Convertir el array invertido a una cadena

    if (inputMayuscula === inpReverseStr){
        resultp.textContent = `${input} es un palíndromo`; // Usar textContent en lugar de innerText

    } else {
        resultp.textContent = `${input} no es un palíndromo`; // Usar textContent en lugar de innerText
    }
};

btnver.addEventListener('click', function() {
    chequeo(entradaUsuario.value);
    entradaUsuario.value = '';
    resultp.removeAttribute("hidden");
});
