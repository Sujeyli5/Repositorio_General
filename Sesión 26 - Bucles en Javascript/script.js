//Ejercicio 1
//Imprimir los números del 0 al 5
/*
var numero = 1;
while(numero <=12){
    document.getElementById("resultado").innerHTML += numero + "<br>";
    numero = numero + 2;
}

const paises = ['Perú' , 'México' , 'Venezuela'];
let i = 0;
while(paises.length > i) {
    console.log(paises[i]);
    i = i +1
}
*/

//Mostrar prompt para capturar nombre


    var i = 0;
    while (i < 5){
         var name = prompt("¿Cúal es tu nombre?")
        document.getElementById("resultadito").innerHTML += name  + "<br>"
        i = i +1
    }
   


