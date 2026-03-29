function miFuncion(texto) {
    var resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    texto = texto.toLowerCase();

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];

        if (letra == "a") resultado.a++;
        if (letra == "e") resultado.e++;
        if (letra == "i") resultado.i++;
        if (letra == "o") resultado.o++;
        if (letra == "u") resultado.u++;
    }

    return resultado;
}

var obj = miFuncion("euforia");
console.log(obj);