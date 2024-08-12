/*const frutas =["manzana", " pera", " platano", " naranja"];

var texto ="";
for(let i=0; i<frutas.length; i++){
    texto += frutas[i] + "<br>";
}

document.getElementById("frutas").innerHTML = texto;
*/

const numeros = [7, 9, 15, 5, 8, 2, 18, 13];

var texto ="";
for(let i=0; i<numeros.length; i++){

    if(numeros[i]){
        texto += numeros[i] + "<br>";
    }
    
}

document.getElementById("numeros").innerHTML = texto;