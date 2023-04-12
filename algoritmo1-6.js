/* let nombre = prompt("Escriba su nombre");

console.log (nombre);
document.querySelector("body").innerHTML = "<h1> "+ nombre +" </h1>";
document.write("<h2> Mi nombre es "+ nombre +" </h2>"); */

let nombre = prompt("Nombre y Apellido");
let numeroEntero = prompt("Ingrese un número entero");
let booleano = prompt("Ingrese el tipo de dato booleano");
let numeroDecimal = prompt("Ingrese un número decimal");
let caracter = prompt("Ingrese un caracter");
let palabra = prompt("Ingrese una palabra");

document.write("<h1> Hola " + nombre + "</h1>");
document.write("<h2> Número entero elegido: "+ numeroEntero + "</h2>");
document.write("<h2> Dato booleano elegido: " + booleano + "</h2>");
document.write("<h2> Número decimal elegido: " + numeroDecimal + "</h2>");
document.write("<h2> Caracter ingresado: " + caracter + "</h2>");
document.write("<h2> Palabra elegida: " + palabra + "</h2>");