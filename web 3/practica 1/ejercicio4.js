function miFuncion(numeros) {
    var mayor = numeros[0];
    var menor = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        var num = numeros[i];
        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num;
        }
    }
    return {
        mayor: mayor,
        menor: menor
    };
}

var obj = miFuncion([3,1,5,4,2]);
console.log(obj);