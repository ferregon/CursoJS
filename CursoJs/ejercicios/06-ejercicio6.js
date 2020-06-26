'use strict'

//hacer un programa que nos diga si un numero es par o impar
//que lea el numero por teclado y validar que sea entero 

var numero = parseInt(prompt('Introduce un numero', 0));

while (isNaN (numero)){
    numero = parseInt(prompt('Introduce un numero', 0));
}


if (numero%2==0) {
    document.write('El numero introducido es PAR');
}else{
    document.write('El numero introducido es IMPAR');
}