require ('colors')


const { nombre } = require('./proy_modules/text.js');
const texto = require ('./proy_modules/text.js')

console.clear();

console.log(texto.nombre("JOnaTan" , "hernAnDEz"));
console.log(texto.nombreMayus("jonatan"));
console.log(texto.nombreMinus("ESTIVEN"));
console.log(texto.cantidad("Jonatan", "salazar"));


let nombre1 = "Estiven";
let nombre2 = "Salazar";

let nombres = nombre1 + "  " + nombre2;

console.log(nombres);

 let i = nombres.length;
 let y = 1;

 while (i > 0) {
    console.log(y  + '  ' + nombres.substring(0,i));
    i--;
    y++;
 }

 
 