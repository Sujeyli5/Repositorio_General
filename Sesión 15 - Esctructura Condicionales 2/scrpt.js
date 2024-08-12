//Variables
var clima = 'nublado';
var fruta = 'manzana';
var diasemana = 'martes';

//Estructura Switch Case
switch (clima) {
    case 'lluvioso':
        console.log('Recuerda llevar tu paraguas');
        break;
    case 'soleado':
        console.log('Viste ligero');
        break;
    case 'nublado':
        console.log('Sal a la calle');
        break;
    default:
        console.log('Tipo de Clima desconocido.');
        break;
}

//Si la fruta es manzana el precio es de S./5
//Si la fruta es platano el precio es S./2
//Si la fruta es mango el precio es S./4
//Si es cualquiera otra fruta no se tiene esa fruta.
switch (fruta) {
    case 'manzana':
        console.log("El precio es de S./5");
        break;
    case 'platano':
        console.log("El precio es de S./2");
        break;
    case 'mango':
        console.log("El preciol es de S./4");
        break;
    default:
        console.log("No se tiene esa fruta");
        break;
}

//Dias de la Semana
switch (diasemana) {
    case 'lunes':
        console.log("Hoy es Lunes.");
        break;
    case 'martes':
        console.log("Hoy es Martes.");
        break;
    case 'miércoles':
        console.log("Hoy es Miércoles.");
        break;
    case 'jueves':
        console.log("Hoy es Jueves.");
        break;
    case 'Viernes':
        console.log("Hoy es viernes.");
        break;
    case 'sabado':
        console.log("Hoy es Sabado.");
        break;
    case 'domingo':
        console.log("Hoy es domingo.");
        break;
    default:
        console.log("No existe es día.");
        break;
}