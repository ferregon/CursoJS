'use strict'

//realizar una calculadora

var num1 = parseInt(prompt('Introduce el primer numero', 0));
var num2 = parseInt(prompt('Introduce el segundo numero', 0));
var operacion = prompt('Introduce la operacion a realizar', '+');
var resul = 0;
while (isNaN (num1) && isNaN (num2)) {
    num1 = parseInt(prompt('Introduce el primer numero', 0));
    num2 = parseInt(prompt('Introduce el segundo numero', 0));
    operacion = prompt('Introduce la operacion a realizar', '+');
}

switch (operacion) {
    case '+':
        resul = 'El resultado de la operacion es: '+ (num1 + num2);
    break;

    case '-':
            resul = 'El resultado de la operacion es: '+ (num1 - num2);
    break;
        
    case '/':
            resul = 'El resultado de la operacion es: '+ (num1 / num2);
    break;
    
    case '*':
        resul = 'El resultado de la operacion es: '+ (num1 * num2);
    break;
    
    default:
        break;
}
document.write(resul);
console.log(resul);