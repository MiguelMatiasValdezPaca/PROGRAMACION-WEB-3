function miFuncion(texto) {
    var invertido = "";

    for (var i = texto.length - 1; i >= 0; i--) {
        invertido = invertido + texto[i];
    }

    if (texto == invertido) {
        return true;
    } else {
        return false;
    }
}

var band = miFuncion("oruro");
console.log(band); // true

var band = miFuncion("hola");
console.log(band); // false