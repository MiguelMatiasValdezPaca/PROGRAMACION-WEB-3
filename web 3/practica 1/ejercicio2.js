function miFuncion(texto) {
    var invertido = "";

    for (var i = texto.length - 1; i >= 0; i--) {
        invertido = invertido + texto[i];
    }

    return invertido;
}

var cad = miFuncion("abcd");
console.log(cad); // dcba