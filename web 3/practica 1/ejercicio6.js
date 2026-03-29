function miFuncion(arreglo) {
    var [a, b] = arreglo;

    return { a: a, b: b };
}

var obj = miFuncion([10, 20, 30]);
console.log(obj); // { a: 10, b: 20 }