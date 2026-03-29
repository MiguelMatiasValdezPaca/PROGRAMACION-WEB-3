/*
function obtenerNumero() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000);
    });
}

function duplicarNumero() {
    obtenerNumero()
        .then(num => {
            const resultado = num * 2;
            console.log("Resultado con promesa:", resultado);
        });
}

duplicarNumero();*/
function obtenerNumero() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000);
    });
}

// Migramos duplicarNumero a async/await
async function duplicarNumero() {
    const num = await obtenerNumero();  
    const resultado = num * 2;
    console.log("Resultado con async/await:", resultado);
}

duplicarNumero();

