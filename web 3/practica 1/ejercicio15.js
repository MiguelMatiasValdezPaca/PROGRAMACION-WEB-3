/* Callback original
function sumar(a, b, callback) {
    setTimeout(() => {
        const resultado = a + b;
        callback(resultado);
    }, 1000);
}*/

// Convertir callback en promesa
function sumarPromesa(a, b) {
    return new Promise((resolve) => {
        sumar(a, b, (resultado) => {
            resolve(resultado); 
        });
    });
}

async function ejecutar() {
    const resultado = await sumarPromesa(3, 4); 
    console.log("Resultado usando promesa:", resultado);
}

ejecutar();