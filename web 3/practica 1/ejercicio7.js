function miFuncion(arreglo) {
    var [ , , ...resto] = arreglo;
    return resto;
}

var resultado = miFuncion([10, 20, 30, 40, 50]);
console.log(resultado); // [30, 40, 50]