//Variables
const preguntas = [
    "¿Con qué frecuencia realizas deporte? <br> Considera como deporte cualquier actividad que acelre tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuántos vasos de agua (200ml) bebes al día? <br> No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de fruta y verduras consumes diariamente?"]

const opcional = [["3 ó más veces por semana",
    "Entre 1 y 2 veces a la semana",
    "Al menos 4 veces al mes"],
["Al menos 8 vaso al día",
    "Entre 5 y 8 depende del día",
    "Cuando me acuerdo"],
["5 ó más",
    "2 a 4",
    "Al menos 1 vez al día"]
];

const clave = [
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3],
];

var i = 0;
var puntaje = 0;
var intervalo;

function mostrarpreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opcional[i][0];
    document.getElementById('op2').innerHTML = opcional[i][1];
    document.getElementById('op3').innerHTML = opcional[i][2];
   iniciarcronometro();
}
 
function iniciarcronometro() {
    const duración = 15;
    const cronometro = document.getElementById('cronometro');
    iniciartiempo (duración, cronometro);
}

function iniciartiempo(tiempo, elemento) {
    intervalo = setInterval(() => {
        if (tiempo == 0) {
            
            clearInterval(intervalo);
            i = i+1
            mostrarpreguntas();
        } else { 
            tiempo = tiempo - 1;
            elemento.textContent = "00" + tiempo;
        }
    }, 1000);
}

function actualizarPuntaje(valor) {  console.log(preguntas.length)
    puntaje = clave[i][valor] + puntaje;
    i = i + 1;
    if (preguntas.length > i) {
        mostrarpreguntas();
    } else {
        respuestas();
    }}













//eventos
document.getElementById('op1').addEventListener("click", function () {
    actualizarPuntaje(0);
})
document.getElementById('op2').addEventListener("click", function () {
    actualizarPuntaje(1);
})
document.getElementById('op3').addEventListener("click", function () {
    actualizarPuntaje(2);
})

//Funciones

function respuestas() {
    document.getElementById('titulo').innerHTML = "Respuestas";
    document.getElementById('contenido').innerHTML = `
    <p class = "resultado">Tu puntaje es de ${puntaje}</p>
    `;
}


mostrarpreguntas();
/*
function mostrarpreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opcional[i][0];
    document.getElementById('op2').innerHTML = opcional[i][1];
    document.getElementById('op3').innerHTML = opcional[i][2];
}

*/

