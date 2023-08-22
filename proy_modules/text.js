const texto = {}

function nombre (a,b) {

    let nombreCompleto = a[0].toUpperCase() + a.substring(1).toLowerCase() +
        ' ' + b[0].toUpperCase() + b.substring(1).toLowerCase()
        return nombreCompleto;

}

function nombreMayus (name) {
    return name.toUpperCase();
}

function nombreMinus(name) {
    return name.toLowerCase();
}

function cantidad (c,d) {
    return (c).length  + (d).length;
} 

texto.nombre = nombre;
texto.nombreMayus = nombreMayus;
texto.nombreMinus = nombreMinus;
texto.cantidad = cantidad;

module.exports = texto