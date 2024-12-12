var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//comentarios 
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Cada error en el programa es una oportunidad de aprendizaje y cada línea de código, una prueba de tu ingenio.')
    .pauseFor(2500)
    //caracteres que se borraran 
    .deleteChars(109)
    .typeString('<strong>construye sueños en forma de algoritmos.</strong>')
    .pauseFor(2500)
    .start();