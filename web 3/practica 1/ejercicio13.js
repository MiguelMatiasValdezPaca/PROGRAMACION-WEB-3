function paso1(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1:", valor);
            resolve(valor + 1);
        }, 1000);
    });
}

function paso2(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2:", valor);
            resolve(valor + 1);
        }, 1000);
    });
}

function paso3(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3:", valor);
            resolve(valor + 1);
        }, 1000);
    });
}

async function ejecutar() {
    const resultado1 = await paso1(8);
    const resultado2 = await paso2(resultado1);
    const resultadoFinal = await paso3(resultado2);
    console.log("Resultado final:", resultadoFinal);
}

ejecutar();


/* Uso con promesas anidadas
paso1(5)
    .then(resultado1 => {
        paso2(resultado1)
            .then(resultado2 => {
                paso3(resultado2)
                    .then(resultadoFinal => {
                        console.log("Resultado final:", resultadoFinal);
                    });
            });
    });

*/