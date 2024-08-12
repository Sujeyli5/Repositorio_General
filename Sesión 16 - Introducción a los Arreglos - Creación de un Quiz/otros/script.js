//Variables
const diasemana = ["Lunes", " Martes", " Miércoles", " Jueves", " Viernes", " Sábado", " Domingo."]
const frutas = ["Manzana", " Platano", " Pera", " Fresa", " Uva", " Naranja", " Mango", " Mandarina."]

//Salida de Documento



//Longitud del arreglo frutas





document.getElementById("mostrar").addEventListener("click", 
    function mostrar() {
        document.getElementById("arreglo1").innerHTML = diasemana;
    
        document.getElementById("valor1").innerHTML = diasemana[6];
    
        document.getElementById("fruta1").innerHTML = frutas;
        
        document.getElementById("longitudfrutas").innerHTML = 'Hay ' + frutas.length + ' frutas'
    } )


