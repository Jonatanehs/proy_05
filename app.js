// se importa la biblioteca de colores de node js 
require ('colors')


// se importa en texto todo lo que se exporto en el modulo text.js
const texto = require ('./proy_modules/text.js')

// se limpia la consola 
console.clear();

// se imprimen mensajes en consola llamando a las funciones
console.log(texto.nombre("JOnaTan" , "hernAnDEz"));
console.log(texto.nombreMayus("jonatan"));
console.log(texto.nombreMinus("ESTIVEN"));
console.log(texto.cantidad("Jonatan", "salazar"));

// se crean dos nuevas variables que contienen un string cada una 
let nombre1 = "Estiven";
let nombre2 = "Salazar";

// se crea una nueva variable que contenga las dos anteriores variables 
let nombres = nombre1 + "  " + nombre2;

// se imprime lo que contenga la variable nombres 
console.log(nombres);

// se crea una variable llamada i que contendra la cantidad de caracteres de nombres 
 let i = nombres.length;

//  se crea una variable llamada y que obtendra un 1 
 let y = 1;

// se crea un bucle que se ejecute mientras i sea mayor que 0
 while (i > 0) {

// se imprime un mensaje en consola que va a tener a nombres de 0 hasta i 
    console.log(y  + '  ' + nombres.substring(0,i));

// i decrementa una en una
    i--;

// y aumenta uno en uno 
    y++;
 }

// i obtendra un valor en 0 
i = 0;

// y tendra el valor de 1 
y = 1;

// se creara un bucle que se ejecuta mientras i sea menor que la cantidad de nombres 
while (i < nombres.length) {

// se imprimira un mensaje donde estara lo obtenido en y y nombres que comienza desde i 
    console.log(y + '  ' + nombres.substring(i + 0));

// i aumenta uno en uno 
    i++;

// y aumenta uno en uno 
    y++;
} 