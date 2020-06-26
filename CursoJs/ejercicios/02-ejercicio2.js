'use strict'

//mostrar la suma la media de los numeros introducidos hasta introducir un numero negativo y ah mostrar el resultado 
// utillizar un bucle

var suma = 0;
var cont = 0;

do {
    var num = parseInt(prompt("Ingresa numeros hasta que metas un numero negativo, 0"));
    if(isNaN(num)){
        num = 0;
    }else if (num>=0){
        suma= suma + num;
        cont++;
    }
} while (num>=0);

alert('la suma de los numeros introducidos es '+suma);
alert('la media de los numeros introducidos es '+(suma/cont));