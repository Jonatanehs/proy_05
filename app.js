require ('colors')


const { nombre } = require('./proy_modules/text.js');
const texto = require ('./proy_modules/text.js')

console.clear();

console.log(texto.nombre("JOnaTan" , "hernAnDEz"));
console.log(texto.nombreMayus("jonatan"));
console.log(texto.nombreMinus("ESTIVEN"));
console.log(texto.cantidad("Jonatan", "salazar"));


 let i = nombre.length;
 let y = 1;

 while (i > 0) {
    console.log(y  + '  ' + nombre.substring(0,i));
    i--;
    y++;
 }