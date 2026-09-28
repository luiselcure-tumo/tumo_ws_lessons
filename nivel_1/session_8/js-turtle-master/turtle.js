/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/


// PROYECTO FINAL NIVEL 1

let alturaY = -300;
let posicionX = 0;
let direccionX = 0;
let explotó = false;

// Variables para el cañon (empieza a la izquierda)
let cañonX = -350;
let cañonListo = false;

// FUNCIONES 

// Función para dibujar el fondo
function dibujarCielo() {
    penup();
    goto(0, 0);
    pendown();
    color("black");
    width(700);
    forward(700);
}

// Función para dibujar un cuadrado que representa el cañón 
function dibujarCañon() {
    penup();
    goto(cañonX, -310); // Un poco más abajo del cohete
    pendown();
    color("orange");
    width(20);
    forward(20);

    if (cañonX < 0) {
        cañonX += 5;
    } else {
        cañonListo = true; // cuando el cañon llega a o se lanza el cohete
    }
}

// Función para dibujar el cohete
function dibujarCohete() {
    penup();
    goto(posicionX, alturaY);
    pendown();
    color(randomColor_h());
    width(5);
    forward(20);

    alturaY += 10;
    posicionX += direccionX;
}

// Función que dibuja la explosión
function crearExplosion() {
    angle(0);
    for (let i = 0; i < 180; i++) {
        penup();
        goto(posicionX, alturaY);
        pendown();
        randomColor_h();
        width(3);
        forward(Math.random() * 120);
        left(4);
    }
}

// Función principal que llama a todas las otras funciones
function dibujarFuego() {
    clear();
    dibujarCielo();
    dibujarCañon();


    if (cañonListo == true) {
        if (explotó == false) {
            dibujarCohete();

            if (alturaY > 60) {
                explotó = true;
            }
        } else {
            crearExplosion();

            setTimeout(() => {
                if (explotó) {
                    alturaY = -300;
                    posicionX = 0;
                    direccionX = Math.random() * 10 - 5;
                    explotó = false;
                }
            }, 1000);
        }
    }
}

setInterval(dibujarFuego, 50);



