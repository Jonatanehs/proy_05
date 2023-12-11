// se crea una constante llamada texto que contiene un objeto vacio 
const texto = {}

/* se utiliza una nueva funcion llamada nombre y tendra como parametros
a y b */
function nombre (a,b) {

/* se crea una nueva variable que contiene a a y su primer caracter se obtendra en 
mayuscula, los caracteres apartir del caracter desde la posicion 1 sera en minuscula.  */
    let nombreCompleto = a[0].toUpperCase() + a.substring(1).toLowerCase() +

/* el caracter que se encuentre en la posicion 0 sera en mayuscula y los caracteres que
se encuentren en la posicion 1 sera en minuscula */
        ' ' + b[0].toUpperCase() + b.substring(1).toLowerCase()

// se retornara lo que esta en nombreCompleto 
        return nombreCompleto;

}

// se crea una nueva funcion con nombre nombreMayus y tendra como parametro name 
function nombreMayus (name) {

// se retornara name en mayusculas
    return name.toUpperCase();
}

// se crea una funcion llamada nombreMinus y tendra como parametro name 
function nombreMinus(name) {

// se retorna name en minusculas
    return name.toLowerCase();
}

// se crea una funcion llamada cantidad y tendra como parametros c y d 
function cantidad (c,d) {

// se retornara el paramentro c y d que tendra la cantidad de caracteres 
    return (c).length  + (d).length;
} 

// texto.nombre contendra lo que esta en nombre y en las otras funciones
texto.nombre = nombre;
texto.nombreMayus = nombreMayus;
texto.nombreMinus = nombreMinus;
texto.cantidad = cantidad;

// se exporta el modulo que contiene texto 
module.exports = texto