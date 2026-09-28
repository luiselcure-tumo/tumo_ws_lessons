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



// Crear un programa que dibuje trinagulos de diferente tamaño, ancho de línea y ubicación.


// // --- 1. TAREA, CREAR NUESTROS DEPÓSITOS DE DATOS (ARRAYS) ---

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

// console.log("¡Obra de arte terminada!");




// TAREA


// Crear un programa que dibuje cuadros de diferente tamaño, ancho de línea, color y ubicación.


// --- 1. TAREA, CREAR NUESTROS DEPÓSITOS DE DATOS (ARRAYS) ---

// let x = [];
// let y = [];
// let tamaños = [];


// // --- 2. TAREA, LLENAMOS LOS ARRAYS CON INFORMACIÓN  ---
// for (let i = 0; i < 100; i++) {

//     // Coordenadas entre -350 y 350
//     x.push(Math.round(Math.random() * 700 - 350));
//     y.push(Math.round(Math.random() * 700 - 350));

//     // Tamaños entre 10 y 100
//     tamaños.push(Math.round(Math.random() * 100 + 10));
// }

// // --- 3. CREAMOS LA FUNCIÓN QUE DIBUJA EL CUADRADO---
// // Ahora recibe 4 instrucciones: dónde (x, y), qué tan grande y de qué color
// function dibujarCuadrado(posx, posy, tam) {
//     goto(posx, posy);
//     width(Math.random() * 7);
//     left(Math.random() * 10);
//     randomColor_h();

//     for (let i = 0; i < 4; i++) {
//         forward(tam);
//         right(90);
//     }
// }

// // --- 4. UTILIZAMOS UN BUCLE PARA CREAR DIFERENTES CUADRADOS EN DIFERENTES LUGARES ---
// for (let i = 0; i < x.length; i++) {
//     // Le pasamos a la función el dato guardado en la posición 'i' de cada array
//     dibujarCuadrado(x[i], y[i], tamaños[i]);
// }

// console.log("¡Obra de arte terminada!");




// EJEMPLOS PROYECTOS FINALES TUMO

// 1. Auto y paisaje

// let x = -300;
// let y = 200;
// let a = 5;
// let z = 20;
// let x_gic = -265
// let m = 1

// function fon() {
//     width(800)//sky
//     goto(0, -300)
//     color(139, 195, 74)
//     forward(300)
//     goto(0, 0)
//     color(135, 206, 235)
//     forward(350)


//     goto(-350, -300)//road
//     right(90)
//     width(100)
//     color(192, 192, 192)
//     forward(700)


//     color(0, 0, 0)//car
//     width(10)
//     goto(-200, -250)
//     left(90)
//     for (i = 0; i < 180; i++) {
//         forward(3)
//         right(1)
//     }
//     right(90)
//     let radius = 540 / Math.PI
//     let lar = radius * 2
//     forward(lar)
//     right(90)

// }
// function ak() {
//     color(0, 0, 0)
//     width(10)
//     for (i = 0; i < 360; i++) {
//         forward(0.6)
//         left(1)
//     }
// }
// function ak_2() {
//     color(0, 0, 0);
//     width(3);

//     for (i = 0; i < 12; i++) {
//         goto(-100 - 34.4, -250)
//         forward(34.4)
//         left(30)
//     }
// }
// function ak_3() {
//     color(0, 0, 0);
//     width(3);

//     for (i = 0; i < 12; i++) {
//         goto(100 - 34.4, -250)
//         forward(34.4)
//         left(30)
//     }
// }
// function sun() {
//     width(3)//sun
//     color("yellow")
//     for (i = 0; i < 36; i++) {
//         goto(x, y)
//         forward(30)
//         goto(x, y)
//         left(10)
//     }
//     if (x < 0) {
//         x += 6
//         y += 2
//     }
//     else if (x >= 0 & x < 300) {
//         y -= 2
//         x += 6
//     }
//     if (x > 290) {
//         x = -300;
//         y = 200;
//     }
// }
// function mount() {
//     color(50, 100, 255)
//     goto(60, 0)
//     let w = 400;
//     for (i = 0; i < 100; i++) {
//         width(w -= 4)
//         forward(1)
//         if (i > 70) {
//             color(100, 150, 255)
//         }
//     }


//     color(50, 100, 255)
//     w = 200;
//     goto(-140, 0)
//     for (i = 0; i < 50; i++) {
//         width(w -= 4)
//         forward(1)
//         if (i > 40) {
//             color(100, 150, 255)
//         }
//     }

// }
// function gic() {
//     x_gic = -265 + (m * 35)
//     m *= -1
//     width(25)
//     right(90)
//     color(255, 255, 255)
//     for (i = 0; i < 7; i++) {
//         goto(x_gic, -300)
//         forward(70)
//         x_gic += 140
//     }
//     left(90)
// }
// function akk_ynd() {
//     goto(-100, -250)
//     left(a)
//     a *= -1
//     ak();
//     ak_2();
//     goto(100, -250)
//     ak();
//     ak_3();
//     right(a * (-1))
// }
// function car_color() {
//     goto(-100 - 34.4 + 14, -246)
//     width(150)
//     color("red")
//     angle(0)
//     for (i = 1; i < 360; i++) {
//         forward(0.8)
//         right(.5)
//     }
//     goto(-27, -246)
//     width(35)
//     angle(0)
//     forward(30)
//     goto(-100 - 34.4, -250)
//     angle(0)
// }

// function flag() {
//     goto(62, 95)
//     angle(0)
//     width(5)
//     color("black")
//     forward(70)
//     right(90)
//     width(10)
//     goto(62, 160)
//     color("red")
//     forward(70)

//     goto(62, 150)
//     color("blue")
//     forward(70)


//     color("orange")
//     goto(62, 140)
//     forward(70)
//     angle(0)

// }
// function sky(n, m, g) {
//     goto(n, m)
//     color("white")
//     width(100)
//     for (i = 0; i < 360; i++) {
//         forward(g)
//         left(1)
//     }
// }
// function anim() {
//     setInterval(() => {
//         clear();
//         fon();
//         car_color();
//         gic();
//         akk_ynd();
//         mount();
//         flag();
//         sky(-220, 220, 0.3);
//         sky(-180, 214, 0.4);
//         sky(-140, 214, 0.3)
//         sky(-100, 200, 0.2)

//         sky(240, 230, 0.3);
//         sky(200, 230, 0.4);

//         sky(160, 220, 0.3)
//         sky(120, 220, 0.2)
//         sun();
//     }, 100)
// }
// anim()

// By Samvel
// Thanks for watching!



// 2. Auto en carretera

// let q = 0
// let x = -130
// let y = -40
// let z = 130
// let i = 350

// let r = 40
// function draw() {
//     clear()
//     angle(0)

//     right(90)
//     color("B7E0FF")
//     goto(-350, 350)
//     width(550)
//     forward(700)

//     goto(-350, -210)
//     color("green")
//     width(550)
//     forward(700)



//     color("gray")
//     goto(-350, -60)
//     width(300)
//     forward(700)
//     i--
//     goto(i - 500, -100)
//     width(10)
//     color("white")
//     forward(100)

//     i--
//     goto(i - 250, -100)
//     width(10)
//     color("white")
//     forward(100)

//     i--
//     goto(i, -100)
//     width(10)
//     color("white")
//     forward(100)


//     width(20)
//     goto(-350, -170)
//     forward(700)
//     color("black")
//     width(1)
//     for (let a = 1; a <= 360; a++) {
//         goto(x, y)
//         penup()
//         forward(r)
//         pendown()
//         forward(1)
//         left(1)

//     }
//     for (let a = 1; a <= 360; a++) {
//         goto(z, y)
//         penup()
//         forward(r)
//         pendown()
//         forward(1)
//         left(1)

//     }
//     goto(x, y)
//     penup()
//     forward(r)
//     pendown()
//     forward(180)
//     goto(x, y)
//     left(90)
//     angle(q)
//     q++
//     for (let a = 1; a <= 5; a++) {
//         forward(40)
//         goto(x, y)
//         left(360 / 5)
//     }

//     goto(z, y)
//     left(90)
//     angle(q)
//     q++
//     for (let a = 1; a <= 5; a++) {
//         forward(40)
//         goto(z, y)
//         left(360 / 5)
//     }
//     angle(0)
//     right(90)
//     penup()
//     forward(r)
//     pendown()
//     forward(55)
//     left(90)
//     forward(60)
//     left(80)
//     forward(125)
//     right(50)
//     forward(70)
//     left(60)
//     forward(230)
//     left(70)
//     forward(90)
//     left(20)
//     forward(55)
//     left(90)
//     forward(20)
//     goto(105, 41)
//     left(180)
//     forward(185 + 105)
//     goto(-40, -40)
//     right(90)
//     forward(143)
//     goto(x, 103)
//     right(180)
//     forward(60)
//     goto(105, 41)
//     forward(45)

//     angle(q)
//     color("yellow")
//     for (let a = 1; a <= 200; a++) {
//         goto(350, 350)

//         forward(r)

//         left(10)
//         forward(10)
//         left(1)


//     }

//     requestAnimationFrame(draw)
// }


// requestAnimationFrame(draw)






// 3. Monigote


// let r = 25
// let a = 0
// let u = 160
// let o = 230
// let v = 75
// let m = 125


// function marmin (){
//     clear()
//     angle(0)
//     a++
//     u++
//     o--
//     goto(a,0)
//         if(u >= 230){
//             u--
//         }else if( u <= 160){
//             u++
//         }


//         if(o <= 160){
//             o++
//         }else if(o >= 230){
//             o--
//         }


//     width(5)
//     forward(100)

//     goto(a,0)
//     angle(u)
//     forward(80)
//     goto(a,0)
//     angle(o)
//     forward(80)

//     goto(a,v)
//     angle(u)
//     forward(80)
//     goto(a,v)
//     angle(o)
//     forward(80)

//     for(let i = 0; i <= 3600; i++){
//         goto(a,125)
//         width(5)
//         penup()
//         forward(r)
//         pendown()
//         forward(1)
//         right(.1) 
//     }
//     requestAnimationFrame(marmin)


// }

// requestAnimationFrame(marmin)   




// 4. Audifono


// setInterval(() => {
//     clear()
//     angle(0)
//     color("339CFF")
//     width(5)
//     for (let i = 0; i < 180; i++) {
//         goto(-180, 10)
//         forward(150)
//         forward(10)
//         goto(0, 0)
//         left(360 / 360)
//     }


//     for (let i = 0; i < 180; i++) {
//         goto(180, 10)
//         forward(150)
//         forward(10)
//         goto(0, 0)
//         left(360 / 360)
//     }

//     color("4c33FF")
//     width(10)
//     right(90)
//     for (let a = 0; a < 180; a++) {
//         goto(0, 120)
//         penup()
//         forward(200)
//         pendown()
//         forward(10)
//         goto(0, 0)
//         left(360 / 360)
//     }

//     //waves
//     width(4)
//     color("CACFD2")
//     left(90)
//     let x = -170
//     for (let c = 0; c < 23; c++) {
//         goto(x, 120)
//         let f = Math.random() * 200
//         forward(f)
//         x += 15
//     }

// }, 1000);




// 5. Paisaje y sol


// function sun() {
//     color("#f1c40f")
//     width(650)
//     for(i = 0; i < 360; i++) {
//         goto(x, y)
//         forward(0.2)
//         left(1)
//     }
// }


// let x = -300
// let y = 80

// let sun_X_Y = true

// setInterval(() => {
//     clear()

//     let widthCount_1 = 1
//     let widthCount_2 = 1
//     let widthCount_3 = 1

//     goto(-350, -250)
//     color("#1d8348")
//     width(530)
//     angle(90)
//     forward(700)

//     goto(-350, 350)
//     color("#5dade2")
//     width(670)
//     angle(90)
//     forward(700)

//     sun()

//     if(x <= -6 && y <= 300.5 && sun_X_Y == true) {
//         goto(x+= 1, y+= .7)

//         if(x == -6 && y == 285.7999999999976) {
//             sun_X_Y = false
//         }
//     }
//     else if(sun_X_Y == false) {
//         goto(x+= 1.5, y-= 1)
//     }
//     console.log(x, y)

//     color("#21618c")
//     goto(-240, 110)

//     for(i = 0; i <= 100; i++) {
//         width(widthCount_1 += 2)
//         angle(180)
//         forward(1)
//     }

//     goto(235, 155)
//     color("#1b4f72")

//     for(i = 0; i <= 145; i++) {
//         width(widthCount_3 += 1.4)
//         angle(180)
//         forward(1)
//     }

//     goto(0,210)
//     color("#154360")

//     for(i = 0; i <= 200; i++) {
//         width(widthCount_2 += 1.5)
//         angle(180)
//         forward(1)
//     }

// goto(0, -270)
// width(10)
// color("#145a32")
// angle(0)
// forward(150)

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#f1c40f")
//     goto(0,-120)
//     forward(25)
//     right(1)
// }

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#e74c3c")
//     goto(-35,-140)
//     forward(25)
//     right(1)
// }

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#e74c3c")
//     goto(0,-160)
//     forward(25)
//     right(1)
// }

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#e74c3c")
//     goto(35,-140)
//     forward(25)
//     right(1)
// }

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#e74c3c")
//     goto(0,-80)
//     forward(25)
//     right(1)
// }

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#e74c3c")
//     goto(-35,-100)
//     forward(25)
//     right(1)
// }

// for(i = 0; i<=360; i++) {
//     width(1)
//     color("#e74c3c")
//     goto(35,-100)
//     forward(25)
//     right(1)
// }

// }, 100)






// 6.  Pendulos


// function cradle() {
//     width(3)
//     goto(-200, -100)
//     forward(400)
//     right(90)
//     forward(400)
//     right(90)
//     forward(400)
//     goto(-280, -200)

//     for (let i = 0; i < 2; i++) {

//         left(90)
//         forward(560)
//         left(90)
//         forward(100)

//     }
//     goto(-120, 300)

//     for (let i = 0; i < 1; i++) {
//         if (b < 35) {
//             right(b)

//         }
//         pendown()
//         forward(250)
//         right(90)
//         circle(-120, 0)
//         angle(180)

//     }

//     goto(-40, 300)
//     for (let i = 0; i < 1; i++) {
//         pendown()
//         forward(250)
//         right(90)
//         circle(-120, 0)
//         angle(180)
//         goto(40, 300)
//     }

//     for (let i = 0; i < 1; i++) {
//         pendown()
//         forward(250)
//         right(90)
//         circle(-120, 0)
//         angle(180)
//         goto(120, 300)
//         if (a > 0 && b == 0) {
//             left(a)
//         }
//     }

//     for (let i = 0; i < 1; i++) {
//         pendown()
//         forward(250)
//         right(90)
//         circle(-120, 0)
//         angle(180)

//     }

//     function circle() {
//         for (let i = 0; i < 360; i++) {
//             forward(0.70)
//             left(1)
//         }

//     }

// }

// let a = 35
// let b = 0
// setInterval(() => {
//     clear()
//     angle(0)
//     cradle()
//     if (a > 0) {
//         a--
//     }
//     if (a <= 0 && b < 35) {
//         b++
//     }

// }, 50);





// 7. Porcentaje reloj 



// let c = 0
// let x = 0
// let count = 1
// let y = 20
// setInterval(() => {
//     if (count > 100) {
//         console.log("your phone is charged")
//         count = 0
//         y = 20
//     }
//     angle(0)
//     goto(0, 0)
//     clear()

//     setFont('40px sans-serif')
//     write(count)
//     goto(40, 0)
//     write("%")
//     for (let i = 0; i < count; i++) {

//         color(y, 0, 0)
//         goto(0, 0)
//         penup()
//         forward(100)
//         pendown()
//         forward(20)
//         left(360 / 100)

//     }
//     y += 2, 55
//     count++

// }, 200)



// 8.  Tumo


// let x = 0;
// let y = 0;
// let r = 100;
// let flag = true;
// function fon() {
//     color(0, 0, 0 )
//     goto(x++,y++);
//     for (let i = 0; i < 3600; i++) {
//         penup();
//         forward(r);
//         pendown();
//         forward(1);
//         right(.1);

//     }
//     if(flag){
//         requestAnimationFrame(fon)

//     }

// }

// let aa =requestAnimationFrame(fon)




// setTimeout(() => {
//     flag = false;
// }, 20000);

// function Tumo () {
//     color(23, 32, 42 );
//     goto(-134,0);
//     for (let i = 0; i < 3; i++) {
//         forward(50);
//         right(90);
//     }
//     for (let i = 0; i < 3; i++) {
//         forward(35);
//         right(90);
//     }
//     goto(-65,50)
//     forward(50);
//     left(90);
//     forward(10);
//     left(90);
//     forward(40);
//     right(90);
//     forward(30);
//     right(90);
//     forward(40);
//     left(90);
//     forward(10);
//     left(90);
//     forward(50);
//     left(90);
//     forward(50);
//     goto(-6,0);
//     right(90);
//     forward(50);
//     right(90);
//     forward(10);
//     right(90);
//     forward(20);
//     left(90);
//     forward(10);
//     right(90);
//     forward(10);
//     right(90);
//     forward(10);
//     left(90);
//     forward(20);
//     right(90);
//     forward(10);
//     goto(20,0);
//     right(90);
//     forward(50);
//     right(90);
//     forward(10);
//     right(90);
//     forward(40);
//     left(90);
//     forward(30);
//     left(90);
//     forward(40);
//     right(90);
//     forward(30);
//     right(90);
//     forward(10);
//     right(90);
//     forward(20);
//     left(90);
//     forward(40);
//     right(90);
//     forward(50);
//     goto(100,0);
//     right(90);
//     forward(50);
//     right(90);
//     forward(40);
//     right(90);
//     forward(50);
//     right(90);
//     forward(10);
//     right(90);
//     forward(40);
//     left(90);
//     forward(20);  
//     left(90);
//     forward(40); 
//     right(90);
//     forward(10); 
// }
// Tumo()

