'use strict'

//hacer un progrma que muestre todos los numeros que hay entre esos numeros

var num1 = parseInt(prompt("Ingresa el primer numero, 0"));
var num2 = parseInt(prompt("Ingresa el segundo numero, 0"));
document.write('Del ' + num1 + ' a ' + num2 + ' hay estos numeros')
for (let i = num1; i < num2; i++) {
    document.write(i+"<br/>");
}

