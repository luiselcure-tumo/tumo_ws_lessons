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
  



// Draw an equilateral triangle / Dibujar un triangulo equilátero

goto(0,0)
forward(200)
right(120)
forward(200)
right(120)
forward(200)
right(120)



// Draw a rectangle / Dibujar un  rectangulo

// goto(0,0)
// forward(100)
// right(90)
// forward(200)
// right(90)
// forward(100)
// right(90)
// forward(200)
// right(90)



// Draw a pentagon by asking the user for its sides / Dibujar un pentagono preguntando al usuario sus lados

// let lados = parseInt(prompt("Ingrese la cantidad de lados del polígono (ej. 5 para pentágono)"));

// let angulo = 360 / lados;

// for (let i = 0 ; i < lados ; i++){
//     forward(50)
//     right(angulo)
// }