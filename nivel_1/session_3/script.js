// Session 3


// =========================== OPERADORES DE INCREMENTO Y DECREMENTO ============================= //



// Los operadores aritméticos especiales de JS son como los operadores aritméticos normales en las
// matemáticas (➕, ➖, ✖️, ➗). Podemos decir que en JS existen ciertos operadores aritméticos
// que necesitamos conocer para poder hacer cálculos u operaciones aritméticas dentro de JS. Dos muy
// importantes son los operadores de Incremento (➕➕) y Decremento (➖➖), que suman y restan 1 al 
// valor de una variable.

// Debemos recordar, antes que nada, que los operadores aritméticos especiales de JS tienen resultados
// diferentes dependiendo de si se utilizan antes o después de una variable.

// Un ejemplo en la vida real sería la idea de que tu madre te pide que te comas lo que dejó preparado
// para la cena. Cuando tú revisas, te das cuenta de que tienes puré de papas con milanesa 🦪 y una torta 
// Oreo 🍰.

// Tu madre te indicó que comieras lo que ella preparó, pero no te indicó en qué orden hacerlo. Si te
// comes primero la torta Oreo 🍰 antes que la milanesa con puré 🦪, vas a tener un resultado diferente 
// al que si te comes primero la milanesa con puré 🦪 y luego la torta oreo 🍰.





// =========================== EJEMPLO OPERADORES DE INCREMENTO Y DECREMENTO ============================= //


// Post-Increment ❌➕➕

// let x = 5;
// console.log(x++);
// console.log(x);


// Post-Decrement ❌➖➖

// let y = 10;
// console.log(y--);
// console.log(y);


// Pre-Increment ➕➕❌

// let z = 5;
// console.log(++z)
// console.log(z)


// Pre-Decrement ➖➖❌

// let w = 10;
// console.log(--w);
// console.log(w);


// Prefix ++x → sum and then display 🆚 Postfix x++ → display and then sum

// “Programmers 👨‍💻👩‍💻 use ➕➕ and ➖➖ to count things: points, lives, steps, turns, attempts…”

// Now let's say we want to decrement ⬇️ from the number 10 to the number 1 using the increment and decrement operators
//, how can we do it?





// =========================== LOOPS ============================= //




// let i = 10

// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)
// console.log(i--)


// But there is another way, easier to code, faster to compile and better visually.



// =========================== BUCLE FOR ============================= //




/*What is a for loop? 🔄️

A for loop is a way to tell the computer: “Repeat this several times without me having to type it many times.” It's 
like saying:

“Do this 10 times”
“Count from 1 to 5”
“Repeat this movement”*/


// Now let's do the same task, printing the numbers from 1 to 10, but with a for loop 🔄️

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }


// A for loop has 3 important parts and handles two tasks:

// 1🚩for (1️⃣start; 2️⃣condition; 3️⃣change) {
//  2🚩Task: in our case the code that is repeated
// }


// 🎮 Video game example

// for (let lives = 3; lives > 0; lives--) {
// console.log("Game Over")
// console.log("You have", lives, "lives left");
// }


// The for loop 🔄️ is used when we know exactly how many turns or iterations we are going to use.




// =========================== BUCLE WHILE ============================= //




// Now let's learn about the while loop 🔁:


// The while loop is different. It's used when we don't know how many turns or iterations we're going to use,
// you only know that it should continue as long as a condition is met.



// let energia = 100;

// while (energia > 0) {
//     console.log("Sigo corriendo... Energía: " + energia);
//     energia -= 25;
//     if (energia <= 0) {
//         console.log("Me quedé sin energía, me detengo.");
//     }
// }


/* In summary, we use the for loop when we know how many iterations we will use,
and the while loop when we don't know how many iterations we will use
and only know that a condition must be met or not. */

/*Loop Comparison: for vs. while

Imagine a for loop as if someone asked us to run 🏃‍♂️‍➡️ a track exactly 3 times. In this case,
we repeat the running action, and we know that after the third lap, the task is complete.
This is a for loop: we know the number of repetitions or iterations of the loop.

Now we are asked to run 🏃‍♂️‍➡️ the same track, but this time we are not told how many times we must do it.
We don't know if it will be once, 100 times, or 1000 times. The only condition is that we stop running
the track when it starts to rain 🌧️.

In this second case, the only way to stop is if the condition "it is raining 🌧️" is true.
Unlike the previous case, here we don't know how many laps 🚩🏁🚩 we will complete until
the event occurs; this is a while loop.*/



// =========================== BUCLE INFINITO============================= //


// let itsRaining = false;

// while (itsRaining == false) {
// console.log("I'm still running because the sky is clear");

// }




// TASK 1 📚📕📖



// 💠 Print to the console all natural numbers between 5 and 60

// for (let x = 5; x <= 60; x++){
//   console.log(x)
// }



// 💠 Print all natural numbers between 100 and 5

// for (let x = 100; x >= 5; x--){
//   console.log(x)
// }



// 💠 Print all odd numbers between 20 and 200

// for (let i = 20; i <= 200; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }



// 💠 Print all even numbers between 90 and 30

// for (let i = 90; i >= 30; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }



// TASK 2



// 💠 Calculate the sum of all natural numbers between 5 and 60.


// let sumTotal = 0; // accumulator variable
// for (let i = 5; i <= 60; i++) {
// sumTotal += i; // This is the same as: sumTotal = sumTotal + i;
// console.log(sumTotal)
// }
// console.log("The sum of the numbers from 5 to 60 is: " + sumTotal);



//💠 Calculate the product of all numbers between 5 and 30 that are divisible by 7


// let productTotal = 1;

// for (let i = 5; i <= 30; i++) {
//   if (i % 7 === 0) {
//     productTotal *= i;  // Seguimos calculando el producto por si lo necesitas
//     console.log(productTotal)
//   }
// }

// console.log("the product of all numbers between 5 and 30 that are divisible by 7 is: " + productTotal);


