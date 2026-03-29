function miFuncion(callback) {
    setTimeout(callback, 2000); // 2000
}

miFuncion(function() {
    console.log("Hola mundo");
});