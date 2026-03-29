const miPromesa = () => 
    new Promise(resolve => 
        setTimeout(() => resolve("¡Éxito después de 3 segundos!"), 3000)
    );

const prom = miPromesa();

prom.then(function(mensaje) {
    mostrarMensaje(mensaje);
});

function mostrarMensaje(texto) {
    console.log(texto);
}