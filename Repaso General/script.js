//Variables 
var num1 = 1;
var num2 = 2;
var texto1 = '4';
var num3 = 8;
var nombre = "Anna"
//Salidas
console.log(num2>num1);
console.log(num1==texto1);
console.log(num1===texto1);

//Operadores Lógicos
//El num1 es mayor al num 2 o num3 es menor al num1
console.log(num1 < num2 || num3 > num1);

//El num1 es mayor al num2 y num2 es mayor a num3
console.log(num1 < num2 && num2 < num3)

//Condicional
//Si num1 es mayor a num2 "Maria gana el juego"
//Si num3 es mayor a num2 "Mario gana el juego"
//Caso contrario "Juan gana el juego"
if(num1 > num2){
    console.log ("María gana el juego")
}
else if(num3 > num2){
    console.log ("Mario gana el juego")
}
else{
console.log("Juan gana el juego")
}
//Si la primera letra del nombres es 'A' entonces colocar "Tu nombre inicia con 'A'"
//Si la primera letra del nombre es 'B' entonces colocar "Tu nombre inica con 'B'"
//Caso contrario colocar "No sé como  inicia tu nombre"

if(nombre[0] == "A" ){
    console.log ("Tu nombre inicia con A")
}else if (nombre[0] == "B") {
    console.log ("Tu nombre enpieza con B")
}
else {
    console.log ("No sé la inicial de tu nombre")
}