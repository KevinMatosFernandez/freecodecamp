const entradaUsuario = document.getElementById('text-input');
const botonVer = document.getElementById('check-btn');
const resultP = document.getElementById('resultado');

const chequeo = function (input) {
    const inpOrig = input;

    if (input === '') {
        alert("Please input a value");
        return;
    }

    const inputMayuscula = input.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
    const inpArray = [...inputMayuscula];
    const inpReverse = [...inpArray].reverse();
    const inpReverseStr = inpReverse.join('');

    if (inputMayuscula === inpReverseStr) {
        resultP.innerHTML = `${input} is a palindrome`;


    } else {
        resultP.textContent = `${input} is not a palindrome`;
    }
};

botonVer.addEventListener('click', function () {
    chequeo(entradaUsuario.value);
    entradaUsuario.value = '';
    resultP.removeAttribute('hidden');
});
