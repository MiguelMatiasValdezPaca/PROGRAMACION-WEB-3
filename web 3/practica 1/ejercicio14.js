function obtenerDato() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("¡Dato listo!");
        }, 2000);
    });
}

// Función que usa async/await para llamar al callback
async function obtenerDatoConCallback(callback) {
    const resultado = await obtenerDato(); 
    callback(resultado);                    
}

obtenerDatoConCallback(function(mensaje) {
    console.log(mensaje); 
});