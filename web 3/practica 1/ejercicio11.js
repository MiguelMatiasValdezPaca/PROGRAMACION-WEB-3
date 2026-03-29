function multiplicarPorDos(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num * 2), 3000);
    });
}

function sumarTres(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num + 3), 2000);
    });
}

async function ejecutar() {
    const resultado1 = await multiplicarPorDos(5);  
    console.log("Después de multiplicar por 2:", resultado1); 

    const resultadoFinal = await sumarTres(resultado1);      
    console.log("Después de sumar 3:", resultadoFinal);       
}

ejecutar();