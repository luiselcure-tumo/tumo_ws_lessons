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



// RECORDEMOS LO QUE SON LOS ARREGLOS O ARRAYS

// Los arrays son contenedores donde podemos almacenar datos de forma ordenada

 let miInventario = ["🗡️espada","🛡️escudo","🧪poción","🐴caballo","📜mapa",];
 console.log(miInventario)

// let misCancionesFavoritas = ["Wish you were here","Run to the hills","In the End"];
// console.log(misCancionesFavoritas)

// let arrayDeNumeros = [2, 5, 7, 89, 34, 46, 98, 32, 54, 71, 5, 45];
// console.log(arrayDeNumeros)



// // 1. split(",") -> Corta el texto donde haya comas y lo vuelve una lista

// let regaloEnTexto = "josefa. eres una gran persona. todo lo puedes logra. exitos. pepe";
// let nuevosItems = regaloEnTexto.split("."); 
// console.log(nuevosItems)

// // 2. push() -> Agrega un elemento al final del array

// miInventario.push("🏹arco");
// console.log(miInventario)


// // 3. pop() -> Elimina un elemento al final del array

// miInventario.pop();
// console.log(miInventario)

// // 4. shift() -> Elimina el primer elemento en el array

// miInventario.shift();
// console.log(miInventario)

// // 5. unshift() -> Agregas un elemento al inicio del array 

// miInventario.unshift("👑corona");
// console.log(miInventario)



// FUNCIONES MATEMÁTICAS BÁSICAS EN JAVASCRIPT

// funcion Math

// // 1. Math.round() (El Redondeador)

let precio = 4.7;
let precioFinal = Math.round(precio); 
// Resultado: ?(Porque está cerca del ?)

let otroPrecio = 4.2;
console.log(Math.round(otroPrecio)); 
// Resultado: ? (Porque está cerca del ?)|


// // 2. Math.sqrt() (La Raíz Cuadrada)

// let areaCuadrado = 64;
// let lado = Math.sqrt(areaCuadrado);
// // Resultado: ? (Porque ? x ? = ?)


// 3. Math.abs() (El Optimizador de Positivos)
// Si el número es negativo, le quita el menos. Si es positivo, lo deja igual.

// let puntajePerdido = -50;
// let modulo = Math.abs(puntajePerdido);
// // Resultado: ? (Simplemente ignora el signo ?)


// 4. Math.random() (número loco)
// lanza un número al azar entre 0 y 1

// let numeroLoco = Math.random();
// console.log(numeroLoco);
// // Resultado: Puede ser 0.123456... (¡Casi nunca sale el mismo!)


// existen dos tipos de funciones las que tienen argumentos y las que no, sabemos que las 
// funciones son bloques de codigo que realizan una o varias tareas per ahora pensemos las 
// funciones como robots, existen robots que realizan tareas y no se le tiene que brindar 
// ninguna herramienta o elemento y otros a los que se les necesita dar una herramienta o 
// elemento para que cumpla la tarea.

// también sirve como ejemplos los NPC de de un juego

// Ejemplo función sin argumentos

// function saludarNPC() {
//   console.log("¡Hola, aventurero! Bienvenido al juego.");}

// // Para que trabaje, solo se tiene que llamar la función por su nombre
// saludarNPC(); 


// Ejemplo función con argumentos

// Los argumentos son los datos que tú le lanzas al robot para que él los use.
// Ejemplo: El Robot que personaliza el saludo.


// El (nombre) es el argumento, como una etiqueta vacía
// function saludarPersonalizadoNPC(nombre) {
//   console.log("¡Hola, " + nombre + "! Bienvenido al juego.");
// }

// // Ahora, cuando lo llamas, tienes que darle el dato:
// saludarPersonalizadoNPC("Zelda"); // Resultado: "¡Hola, Zelda!..."
// saludarPersonalizadoNPC("Mario"); // Resultado: "¡Hola, Mario!..."


// si los resultados de la función no son nuevos, se dice que la función está vacía (es nula). 
// No tiene sentido usar el resultado de funciones vacías en la operación de atribución. 

// Siguiendo con la idea de los robots, la diferencia está en si el robot hace su trabajo 
// y se queda callado, o si después de trabajar vuelve corriendo hacia ti para entregarte 
// un resultado en la mano.


// 1. Funciones que no devuelven nada

// function pintarPared(color) {
//   console.log("¡He pintado la pared de color " + color + "!");
//   // El robot termina su tarea y se apaga.
// }

// let resultado = pintarPared("Azul");
// console.log(resultado); // ¡Saldrá 'undefined'! Porque el robot no te entregó nada.


// 2. Funciones que DEVUELVEN algo 

// function exprimirNaranjas(cantidad) {
//   let jugo = cantidad * 2; // Digamos que cada naranja da 2 chorritos
//   return jugo; // <-- LA MAGIA: El robot vuelve con el jugo
// }

// // Ahora sí podemos guardar lo que el robot nos dio:
// let miVaso = exprimirNaranjas(5); 
// console.log("Tengo " + miVaso + " chorritos de jugo."); // Resultado: 10



// TAREA

// Utilizar las funciones que vimos para crear un programa que dibuje triangulos de diferentes 
// tamaños, colores, grosor de linea y en diferentes lugares de la pantalla.

//--- 1. TAREA, CREAR NUESTROS DEPÓSITOS DE DATOS (ARRAYS) ---

// let x = [];
// let y = [];
// let tamaños = [];
// let colores = [];


// // --- 2. TAREA, LLENAMOS LOS ARRAYS CON INFORMACIÓN  ---
// for (let i = 0; i < 100; i++) {

//   // Coordenadas entre -350 y 350
//   x.push(Math.round(Math.random() * 700 - 350));
//   y.push(Math.round(Math.random() * 700 - 350));

//   // Tamaños entre 10 y 60
//   tamaños.push(Math.round(Math.random() * 100));

//   // Colores al azar de nuestra paleta
//   let colorAzar = randomColor_h();
//   colores.push(colorAzar);
// }

// // --- 3. CREAMOS LA FUNCIÓN QUE DIBUJA EL TRIANGULO---
// // Ahora recibe 4 instrucciones: dónde (x, y), qué tan grande y de qué color
// function dibujarTrianguloPro(posx, posy, tam, col) {
//   goto(posx, posy);
//   color(col);
//   width(Math.random()* 7);
//   left(Math.random()* 10);

//   for (let i = 0; i < 3; i++) {
//     forward(tam);
//     right(120);
//   }
// }

// // --- 4. UTILIZAMOS UN BUCLE PARA CREAR DIFERENTES TRIANGULOS EN DIFERENTES LUGARES ---
// for (let i = 0; i < x.length; i++) {
//   // Le pasamos a la función el dato guardado en la posición 'i' de cada array
//   dibujarTrianguloPro(x[i], y[i], tamaños[i], colores[i]);
// }

// console.log("¡Obra de arte  terminada!");

