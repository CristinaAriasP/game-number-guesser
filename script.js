const numeroSecreto = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById('inputNumero');
const boton = document.getElementById('botonAdivinar');
const mensaje = document.getElementById('mensaje')

boton.addEventListener('click', function() {
    const intento = Number(input.value);

    if (intento === numeroSecreto) {
        mensaje.textContent = "¡Felicidades! 🎉 ¡Has acertado!";
        mensaje.style.color = "green";
    } else if (intento > numeroSecreto) {
        mensaje.textContent = "Demasiado alto. ¡Prueba otra vez! 👇";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Demasiado bajo. ¡Prueba otra vez! 👆";
        mensaje.style.color = "red";
    }
});