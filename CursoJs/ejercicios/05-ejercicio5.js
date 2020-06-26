'use strict'

//mostrar todos los numeros divisores de un numero introducidos en un promt

var num = parseInt(prompt('Introduce un numero', 0));
document.write('Los divisores de ' + num + ' son:'+ '<br/>');
for (let i = 1; i <= num; i++) {
    if (num%i==0) {
        document.write(i +"<br/>");        
    }
    
}