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


// EJERCICIOS PARA CONOCER TURTLE.JS


// DIBUJAR FUEGOS ARTIFICIALES UTILIZANDO BUCLES FOR


// for(let i = 0 ; i < 180 ; i++){
//     color("red")
//     goto(0,0)
//     forward(100)
//     right(5)
// } 


// for(let i = 0 ; i < 200 ; i++){
//     color("green")
//     goto(180,180)
//     forward(80)
//     right(2)
// } 


// for(let i = 0 ; i < 100; i++){
//     color("blue")
//     width(3) 
//     goto(-180,-180)
//     forward(100)
//     right(4)
// } 



// DIBUJAR UN LABERINTO


// for(let i = 0 ; i < 30; i++){
//     forward(200 - i * 7)
//     left(90)
// } 


// ARREGLOS (ARRAYS) EN JAVASCRIPT


// 👜📦 ¿Qué es un arreglo?

// Un arreglo es una estructura contenedora que nos permite almacenar varios datos dentro de una sola variable. 

// Es como una mochila. Es una sola estructura que puede guardar muchas cosas adentro, 
// una al lado de la otra, en un orden específico, en los arrays el orden es muy importante.

// En un video juego, se ve así:
// inventario 🧰 = ["🗡️Espada", "🛡️Escudo", "🧪Poción", "📜Mapa"];

// En JavaScript, se ve así:
// let inventario = ["Espada", "Escudo", "Poción", "Mapa"];

// Los arreglos o arrays están diseñados para almacenar varios valores dentro de un nombre. 



// PARA TRABAJAR CON ARREGLOS O ARRAYS, TENEMOR QUE CONOCER 3 COSAS IMPORTANTES:

// 1. El índice empieza en CERO:

// 2. Puedes mezclar cosas: números, textos, ¡o incluso otros arreglos! que es como tener un bolso dentro 
// de una mochila. Pero no es lo recomendable, la mejor practica es guardar datos del mismo tipo en un mismo 
// arreglo, por ejemplo, solo números o solo textos.

// 3. Son dinámicos: Puedes hacer que la caja crezca o se encoja cuando quieras.




// TAREA


// 1. dibujar fuegos artificiales con un arreglo 

// let arr =   [191, 56, 152, 116, 220, 249, 177, 107, 233, 66, 180, 170, 200, 210, 68, 
//              149, 96, 55, 52, 218, 109, 70, 201, 129, 159, 226, 133, 218, 155, 219, 
//              182, 121, 218, 69, 245, 133, 165, 176, 51, 116, 84, 108, 208, 167, 181, 
//              157, 134, 147, 92, 213, 170, 68, 91, 197, 53, 150, 60, 151, 130, 216, 
//              146, 127, 243, 139, 213, 66, 66, 156, 51, 217, 227, 185];



// Bucle for para recorrer el arreglo "arr" y dibujar los fuegos artificiales

// for (let i = 0 ; i < arr.length ; i++){
//     color("blue")
//     goto(0,0)
//     forward(arr[i])
//     right(5)
// }


// 2. Imprimir por consola todos los numeros superiores a 100 del array "arr"

// for (let i = 0 ; i < arr.length ; i++){
//    if (arr[i] > 100){
//     console.log(arr[i])
//    }
// }




// OBJETOS EN JS


// let obj = {
//     'nombre':'Erika',
//     'edad': 23,
//     'apellido': 'Fulanita',
//     'tumo estudiante': true
// }


// Si los arreglos eran como una mochila, los objetos son algo mucho más potente.

// Un objeto es eso, un objeto que se copia del mundo real al mundo digital

// Supongamos que en nuestro video juego nuestro personaje ahora no solo tiene su mochila inventario, que es un array. 
// Ahora tu jugador adquirió un nuevo objeto, un auto.
// Este nuevo auto de tu personaje tiene unas propiedades(características) y unos métodos(acciones)


// caracteristicas del objeto auto

// color
// marca
// modelo
// numero de puertas
// velocidad
// nuevo

// acciones del objeto auto

// encender
// apagar 
// acelerar
// frenar


// En JavaScript, usamos llaves {} para crear con codigo los objetos.

// let miCoche = {
//     color: "Rojo",
//     marca: "Ferrari",
//     modelo: "2026",
//     puertas: 2,
//     velocidad: 320,
//     nuevo: false,
//  }

// A diferencia de los arreglos donde usabas números (0, 1, 2) para encontrar las cosas, osea su indice, 
// en los objetos usas nombres (llamados "claves"). Es como el indice pero busca la palabra clave y obtienes su valor.

// console.log(miCoche.color);
// console.log(miCoche.modelo);
// console.log(miCoche.velocidad);
// console.log(miCoche.nuevo);


// Ya tenemos declarado un objeto con sus caracteristicas (propiedades), ahora vamos a crear lo que un
// objeto tipo coche puede hacer.

// Acciones (Métodos)

// let miCoche = {
//     color: "Rojo",
//     marca: "Ferrari",
//     modelo: "2026",
//     puertas: 2,
//     velocidadMax: 320,
//     nuevo: false,


// // Acciones que puede realizar nuestro objeto coche
//     acelerar() {
//         console.log("Ramm ramm rammm")
//     },

//     encender() {
//         console.log("Vroom vroom vroooom")
//     },

//     apagar() {
//         console.log("Shhhhhh")
//     }
// };
// miCoche.encender();
// miCoche.acelerar();
// miCoche.apagar();




// Los Arrays y los Objetos son simplemente dos tipos de cajas distintas para organizar datos.


// 1. El Array: La fila ordenada
// Un Array es como una caja de cartón larga donde guardas cosas una al lado de la otra. Lo más importante 
// aquí es el orden.

// let misFrutas = ["Manzana", "Pera", "Plátano"];
// La Manzana está en la posición 0, la Pera en la 1...

// 2. El Objeto: La mochila con etiquetas
// Un Objeto es más como una mochila o un cofre con compartimentos, y cada compartimento tiene una etiqueta y
// Guardas cosas por parejas de clave: valor. Es como un perfil de personaje de un videojuego.

// let miJugador = {
//     nombre: "Zeldita77",
//     nivel: 15,
//     esPro: true
// };

// array usa corchetes []

// los objetos llaves {y dentro dato clave : valor separados por comas}



// TAREA



// 1. crear un objeto que cumpla con los siguientes parámetros:


// color
// longitud de lado
// ángulo
// coordenadas x, y 


// 2. Deben escribir un programa que utilice este objeto para dibujar fuegos artificiales.


// let listaFuegos = [
//     {
//         color: "red",
//         longitud: 100,
//         angulo: 2,
//         coordenadas: [0, 0]
//     },
//     {
//         color: "blue",
//         longitud: 80,
//         angulo: 5,
//         coordenadas: [150, 150]
//     },
//     {
//         color: "green",
//         longitud: 130,
//         angulo: 7,
//         coordenadas: [-200, -200]
//     }
// ];

// for (let i = 0; i < listaFuegos.length; i++) {
//     let cohete = listaFuegos[i];

//     for (let j = 0; j < 200; j++) {
//         goto(cohete.coordenadas[0], cohete.coordenadas[1]);
//         color(cohete.color);        
//         forward(cohete.longitud);  
//         right(cohete.angulo); 
//     }
// };