// CREAR DIFERENTES ELEMENTOS CON MOVIMIENTO PRIORIZANDO EL USO DE FUNCIONES
// Y LAS FUNCIONES PROPIAS DE TURTLE.JS SETTIMEOUT Y SETINTERVAL



// CIRCULO QUE CAMBIA DE COLORES Y SE MUEVE

    // 1. Dividimos el problema en partes mas pequeñas: primero creamos una función
    // que se encarga solo de dibujar el circulo.
function circle(){
    for(let i =0; i<36;i++){
        forward(10)
        right(10)
    }
}

    // 2. Definimos una variable que se encarga de manejar el desplazamiento sobre el eje x
let x = -200;


    // 3. Seguimo con nuestra buena practica de dividir el problema en problemas más pequeños,
    // por lo tanto, creamos una funcion que se encarga de dibujar el circulo en la posición inicial 
    // donde declaramos por primera vez la variable x, luego utilizando el metodo color() y la función 
    // randomColor_h(), ya definidas en la libreria turtle.js, mas la función circle que creamos nosotros. 
function dibujarCirculo() {
    clear();
    goto(x, 0);
    color(randomColor_h());
    circle(30);
}

    // 4. Por último, utilizamos la función setInterval(), para dibujar el circulo, haciendo el llamado a la
    // función dibujar circulo que creamos previamente y que se va a repetir cada 200 milisegundos. NOTA 
    // IMPORTANTE. Es necesario resaltar el uso de la función clear() al inicio del bloque de código de la 
    // función setInterval ya que como el circulo se genera cada 200 milisegundo sino limpiamos el código
    //al inicio quedaria una stella de otros circulos dibujados previamente.
    //Intentemos comentar la linea donde esta la función clear() y veamos que resultado optenemos
setInterval(() => {
    dibujarCirculo();

    x = x + 10;
}, 200);