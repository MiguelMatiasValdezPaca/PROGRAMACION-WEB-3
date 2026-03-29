function miFuncion(numeros) {
    var resultado = {
        pares: [],
        impares: []
    };

    for (var i = 0; i < numeros.length; i++) {
        var num = numeros[i];

        if (num % 2 == 0) {
            resultado.pares.push(num);
        } else {
            resultado.impares.push(num);
        }
    }

    return resultado;
}

var obj = miFuncion([1,2,3,4,5]);
console.log(obj);