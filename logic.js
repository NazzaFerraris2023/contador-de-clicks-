const contenedorArchivo = document.getElementById('contenedor-archivo');
contenedorArchivo.classList.add('contenedor-archivo');
const contenedorContador = document.createElement('div');
contenedorContador.classList.add('contenedor-contador');
const tituloContador = document.createElement('h1');
tituloContador.classList.add('titulo-contador');
tituloContador.innerText = 'Contador de clicks';
const display = document.createElement('div');
display.classList.add('display');
const contenedorBtn = document.createElement('div');
contenedorBtn.classList.add('contenedor-botones');

const contenedorBtnReinicio = document.createElement('div');
contenedorBtnReinicio.classList.add('contenedor-btn-reinicio');



const botonSuma = document.createElement('button');
botonSuma.classList.add('btn');
botonSuma.innerText = '+'
const botonResta = document.createElement('button');
botonResta.classList.add('btn');
botonResta.innerText = '-';
const botonReinicio = document.createElement('button');
botonReinicio.classList.add('btn-reinicio');
botonReinicio.innerText = 'reiniciar'







contenedorArchivo.append(tituloContador, contenedorContador);
contenedorContador.append(display, contenedorBtn, contenedorBtnReinicio)
contenedorBtn.append(botonSuma, botonResta,)
contenedorBtnReinicio.append(botonReinicio)


// Logica
let btnSumaPresionado = false;
let btnRestaPresionado = false;
let btnReinicioPresionado = false;

display.textContent = 0

botonSuma.addEventListener('click', () => {
    btnSumaPresionado = true
    numero = parseInt(display.textContent);
    numero++;
    display.textContent = numero.toString();
});


botonResta.addEventListener('click', () => {
    btnRestaPresionado = true
    numero = parseInt(display.textContent);// esta lineaa de codigo convierte el texto que esta en el display '0' en un numero 0, para asi poder aumentar o disminuir el valor 
    numero--;
    display.textContent = numero.toString();//esta linea devuelve el numero anteriormente pasado, a un string, debido a que text content solo puede almacenar strings
});


botonReinicio.addEventListener('click', () => {
    btnReinicioPresionado = true
    display.textContent = 0;
})

let numero
if (btnSumaPresionado == true) {
    numero = parseInt(display.textContent);
    numero++;
    display.textContent = numero.toString()

} else if (btnRestaPresionado == true) {
    numero = parseInt(display.textContent);
    numero--;
    display.textContent = numero.toString();

} else if (btnReinicioPresionado == true) {
    numero = parseInt(display.textContent);
    display.textContent = 0

}