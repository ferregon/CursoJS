'use strict'
//mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

var num1 = parseInt(prompt("Ingresa el primer numero, 0"));
var num2 = parseInt(prompt("Ingresa el segundo numero, 0"));
document.write('Del ' + num1 + ' a ' + num2 + ' estos numeros son impares'+"<br/>");
while(num1 < num2){
    num1++
    if (num1 % 2 != 0) {
        document.write(num1 + '-');
    }
}
