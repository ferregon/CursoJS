'use strict'

//Programa que pida dos numeros y que nos diga cual es el mayor el menor y si son iguales
//validar que los datos introducidos sean numeros enteros

var num1 = parseInt(prompt("Ingresa el primer numero, 0"));
var num2 = parseInt(prompt("Ingresa el segundo numero, 0"));

while (num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2) ){
    num1 = prompt("Ingresa el primer numero, 0");
    num2 = prompt("Ingresa el segundo numero, 0");
}
    if(num1 == num2){
        console.log('El numero '+ num1 + ' es igual que ' + num2 );
    }else if (num2 > num1){
        console.log('El numero '+ num2 + ' es mayor que ' + num1 );
    }else{
        console.log('El numero '+ num1 + ' es mayor que ' + num2 )
    }

    /* 
if(num1 == num2)
    console.log('Los numeros son iguales');
if(num1 > num2)
    console.log('El numero '+ num1 + ' es mayor que ' + num2 );
if (num2 > num1)
    console.log('El numero '+ num2 + ' es mayor que ' + num1 ); */