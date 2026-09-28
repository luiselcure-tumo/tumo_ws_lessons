
// VARIABLES Y OPERADORES ARITMÉTICOS


// OPERADORES ARITMÉTICOS

// +
// -
// *
// /
// %

// let numero1 = 5; 
// let numero2 = 7;


// console.log(numero1+numero2)
// console.log(numero1-numero2)
// console.log(numero1*numero2)
// console.log(numero1/numero2)


// let edadUsuario = parseInt(prompt("¿Cual es tu edad?"))
// if (edadUsuario % 2 == 0){
//     alert(edadUsuario + " es un número par")
// }
// else{
//     alert(edadUsuario + " es un número impar")
// }




// TIPOS DE DATOS QUE GUARDAN LAS VARIABLES

// Variables Simples o de tipo primitivo 

// Son los valores más básicos y son inmutables.

// Number: Números de cualquier tipo (enteros o decimales). Ejemplo: 15 o 3.14.
// let numero = 23;
// String: Cadenas de texto. Siempre van entre comillas. Ejemplo: "Hola Mundo".
// let nombre = "Pedro";
// Boolean: Valores lógicos. Solo pueden ser true (verdadero) o false (falso).
// let esMayor = false;




// OPERADORES DE COMPARACIÓN

// Son símbolos que utilizamos para comparar dos valores y que siempre nos devuelven un 
// resultado booleano: true (verdadero) o false (falso).

// let a = 5;
// let b = 7;
// let c = "5";

// console.log(a == b);
// console.log(a > b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);
// console.log(a == c);
// console.log(a === c);



// Errores comunes

// console.log(a => b);
// console.log(a =< b);
// console.log(a =! b);




// OPERADORES LÓGICOS

// let completoNivel_1 = true;
// let completoNivel_2 = false;


// if (completoNivel_1 && completoNivel_2){
//     console.log("Puede acceder a los laboratorios de aprendizaje")
// }
// else{
//     console.log("Debes tener los dos niveles aprobados para accedes a los laboratorios de aprendizaje")
// }



// if (completoNivel_1 || completoNivel_2){
//     console.log("Puede acceder a los laboratorios de aprendizaje")
// }
// else{
//     console.log("Debes tener los dos niveles aprobados para accedes a los laboratorios de aprendizaje")
// }


// let tieneTiempoLibre = true;

// if (completoNivel_1 && completoNivel_2 && tieneTiempoLibre){
//     console.log("Puede acceder a los laboratorios de aprendizaje")
// }
// else{
//     console.log("Debes tener los dos niveles aprobados para accedes a los laboratorios de aprendizaje y tiempo libre")
// }


// if (completoNivel_1 || completoNivel_2 && tieneTiempoLibre){
//     console.log("Puede acceder a los laboratorios de aprendizaje")
// }
// else{
//     console.log("Debes tener los dos niveles aprobados para accedes a los laboratorios de aprendizaje y tiempo libre")
// }

// ! no logico, es una forma de negar la premisa

// let a = 5;
// let b = 5;

// console.log(a != b);



// TAREA SESSION 2: CREAR UNA CALCULADORA BÁSICA CON TODO LO VISTO EN CLASE, 
// QUE MUESTRE LOS RESULTADOS POR LA CONSOLA DEL NAVEGADOR


// let num1 = parseFloat(prompt("Ingrese el primer número"));
// let num2 = parseFloat(prompt("Ingrese el segundo número"));
// let operacion = prompt("Ingrese la operación arimética que desea realizar")

// if (operacion == "+"){
//     alert(num1 + num2)
// }
// if (operacion == "-"){
//     alert(num1 - num2)
// }
// if (operacion == "/"){
//     if (num2 == 0){
//         alert("no se puede dividir un número en 0")
//     }else{
//         alert(num1 / num2)
//     }
// }
// if (operacion == "*"){
//     alert(num1 * num2)
// }