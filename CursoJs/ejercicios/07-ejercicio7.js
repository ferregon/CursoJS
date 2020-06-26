'use strict'

//realizar la tabla de multiplicar de un numero introducido por teclado

var numero = parseInt(prompt('Introduce un numero',1));
document.write('La table de multiplicar del numero ' + numero + ' es'+'<br/>')
for (let i = 1; i <= 10; i++) {
    document.write(numero + 'x' + i + '= ' + (numero*i)+ '<br/>' );
    
}