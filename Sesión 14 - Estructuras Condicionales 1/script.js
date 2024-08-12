var color = "verde";
var tamaño = "mediano";
var precio = 1000;
var estación = "verano"

var nota = 16;

//Sí el color es verde y el precio es menor igual a 1000, 
//Entonces lo compro, caso contrario me compro otra cosa
if (color == "verde" && precio <= 1000) {
    console.log("Lo compró")
}
else {
    console.log("Compro otra cosa")
}


//Si el tamaño es mediano o el color es verde lo compró,
//Caso contrario me voy de viaje
if (tamaño == "mediano" || color == "verde") {
    console.log("Lo compró");
}
else {
    console.log("Me voy de viaje")
}


//Si la estación es invierno o la estación es otoño  "Lo compró"
//Caso contrario ahorro el dinero
if ( estación == "invierno" || estación == "otoño") {
    console.log("Lo compró")
}
else {
    console.log("Ahorro dinero")
}

//Si el tamaño es mediamo o el precio es menor igual a 1000 o el color es rojo entonces lo compro,
//Caso contrario lo pongo en el banco.
if( tamaño == "mediano" || precio >= 1000 || color == "rojo"){
    console.log ("Lo compro")
}
else {
    console.log("Lo pongo en el banco")
}

//Si la nota es mayor o igual a 10 y menor15 entonces tendra "C"
//Si la nota es mayor 15 y menor a 18, entonces tendra una "B"
//Caso contrario tendara una "A"
if ( nota>= 10 && nota< 15 ){
    console.log("C")
}
else if (nota>15 && nota <18) {
    console.log("B")
} 
else {
    console.log("A")
}