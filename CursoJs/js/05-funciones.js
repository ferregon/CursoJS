'use strict'
var num1 = parseInt(prompt("Ingresa el primer numero, 0"));
var num2 = parseInt(prompt("Ingresa el segundo numero, 0"));
//Funciones
function calculadora(num1,num2, mostrar = false) {
    if (mostrar ) {
        porConsola(num1,num2);
    } else {
    porPantalla(num1,num2);
    }

}

function porConsola(num1, num2) 
{
    console.log('Suma: ' + (num1+num2));
    console.log('resta: ' + (num1-num2));
    console.log('division: ' + (num1/num2));
    console.log('producto: ' + (num1*num2)); 
}

function porPantalla(num1, num2) 
{
    document.write('Suma: ' + (num1+num2)+"<br/>");
    document.write('resta: ' + (num1-num2)+"<br/>");
    document.write('division: ' + (num1/num2)+"<br/>");
    document.write('producto: ' + (num1*num2)+"<br/>");    
}

calculadora(num1,num2);