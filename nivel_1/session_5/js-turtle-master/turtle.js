/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/


// RELLENAR UN ARRAY O ARREGLO CON NÚMEROS ALEATORIOS Y USARLO PARA CREAR UN FUEGO ARTIFICIAL

// // 1. Creamos el array o arreglo vacio
// let misNumeros = [];

// // 2. Usamos un for para llenar la lista 36 veces
// for (let i = 0; i < 36; i++) {
//     // Generamos un número al azar entre 1 y 100
//     let numeroAlAzar = Math.floor(Math.random()*150 +1);

//     // Lo guardamos en nuestra lista
//     misNumeros.push(numeroAlAzar);
// };

// // 3. Ahora usamos otro for para imprimir cada número uno por uno
// for (let i = 0; i < misNumeros.length; i++) {
//     console.log(misNumeros[i]);
// };

// // 4. creamos un fuego artificial con el nuevo array que rellenamos de números aleatorios
// for (let i = 0; i < misNumeros.length; i++) {
//     goto(0,0)
//     color("red")
//     forward(misNumeros[i])
//     right(10)
// };


// CONCEPTOS DE CONTROL DE FLUJO: BREAK Y CONTINUE

// Estos dos son como los "controles remotos" de los bucles. un bucle repite una serie de tares, y tú 
// tienes el poder de saltarte tareas o apagar el bucle cuando cumpla una tarea específica.

// BREAK

//   1. El break: ¡El botón de APAGAR! 🛑
// El break sirve para detener el bucle por completo y salir de él, aunque todavía le falten vueltas por dar.

// let misNumeros = [20, 4, 50, 77, 22, 75, 14, 34, 89, 1,
//                   10, 15, 45, 78, 90, 43, 65, 78, 87, 5,
//                   7, 23, 45, 78, 65, 43, 65, 98, 43, 9 ];

// for (let i = 0; i < misNumeros.length; i++) {
//     if (misNumeros[i] === 7) {
//         console.log("¡Encontré el 7! Ya no quiero buscar más.");
//         break; // Aquí el bucle se detiene por completo
//     }
//     console.log("Buscando en la posición " + i);
// }



// CONTINUE

// 2. El continue: ¡El botón de SALTAR! ⏭️
// El continue no apaga el bucle. Lo que hace es decir: "cumpli con esta tarea, paso a la siguiente".

// let misNumeros = [20, 4, 50, 77, 22, 75, 14, 34, 89, 1,
//                   10, 15, 45, 78, 90, 43, 65, 78, 87, 5,
//                   7, 23, 45, 78, 65, 43, 65, 98, 43, 9 ];

// for (let i = 0; i < misNumeros.length; i++) {
//   console.log(misNumeros[i]);
//     if (misNumeros[i] === 7) {
//         console.log("encontramos el número 7 pero lo saltamos y pasamos al siguiente, no se detiene el programa")
//         continue; // Salta este número y vete directo a la siguiente vuelta del for
//     }
// }



// FUNCIÓNES setTimeout() y setInterval() 
// animando un personaje


// SETTIMEOUT() 

// setTimeout(): esta función configura un temporizador, y la función correspondiente se ejecuta 
// cuando finaliza el tiempo establecido.


// SETINTERVAL() 

// setInterval(): mediante esta función, una determinada acción puede repetirse varias veces 
// luego de un tiempo establecido.



// EJEMPLO DE UN PERSONAJE ANIMADO CON UN BUCLE FOR Y UNA FUNCIÓN SETINTERVAL

// let x = -150
// let y = 0
// let r = 100

// setInterval(function () {
//   clear()
//   x += 1
//   let a = r

//   for (let i = 0; i <= 360; i++) {
//     a++
//     goto(x, y)
//     if (a % 36 == 0) {
//       goto(x, y)
//       width(5)
//       forward(r)
//     }
//     else {
//       penup()
//       forward(r)
//     }

//     pendown()
//     forward(10)
//     right(1)
//   }
// }, 50)



// EJEMPLO DE UN PERSONAJE TIPO FUEGO ARTIFICIAL ANIMADO CON UN BUCLE FOR Y UNA FUNCIÓN SETINTERVAL


// let star = 300;

// setInterval(function () {
//   clear()
//   star--;

//   if (star == -350) {
//     star = 350;
//   }

//   for (let i = 0; i < 25; i++) {
//     color('red')
//     goto(0, star)
//     forward(20)
//     left(360 / 25)
//   }
// }, 10);


// TAREA

// Crear un personaje animado utilizando todo lo aprendido hasta ahora

// Ejemplo de mi personaje propio


// let x = 0;      // Posición horizontal
// let y = 0;      // Posición vertical
// let velX = 5;   // Velocidad en X (qué tan rápido va a los lados)
// let velY = 3;   // Velocidad en Y (qué tan rápido va arriba y abajo)

// setInterval(function () {
//   clear(); // Borramos la pantalla para que no se vea el rastro

//   // 1. Movemos la figura sumando la velocidad
//   x = x + velX;
//   y = y + velY;

//   // 2. ¿Chocó con la pared derecha (300) o izquierda (-300)?
//   if (x > 300 || x < -350) {
//     velX = velX * -1; // ¡Rebota! (cambia de dirección)
//   }

//   // 3. ¿Chocó con el techo (300) o el suelo (-300)?
//   if (y > 300 || y < -350) {
//     velY = velY * -1; // ¡Rebota!
//   }

//   // 4. Dibujamos la figura en la nueva posición
//   goto(x, y);
//   color("orange");
//   width(10);

//   // Hagamos un cuadrado simple
//   for (let i = 0; i < 4; i++) {
//     color(randomColor_h())
//     forward(50);
//     right(90);
//   }

// }, 20); // Se repite cada 20 milisegundos