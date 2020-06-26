'use strict'

//pedir 6 numeros y meterlos en un array
//mosttrar todos los elementos del array en el cuerpo y en la consola
//tmbien sacar el array ordenado y mostrarlo
//invertir su orden y mostrarlo
//mostrar cuantos elementos tiene el array
//buscar un valor introducido por el usuario y que nos diga si esta y la posicion

var numeros = new Array(6);
//var numeros=[];
function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Array introducido "+textoCustom+"</h1>")
    document.write("<ul>");
        elementos.forEach(elemento => {
            document.write("<li>"+elemento+"</li>");      
        });
    document.write("</ul>");   
}


for (let index = 0; index < numeros.length; index++) {
    numeros[index] = parseInt(prompt('Introduce un numero',0));
    //numeros.push(parseInt(prompt('Introduce un numero',0)) );
}
///mostrar array en el cuerpo
mostrarArray(numeros);


//mostraer array ordenado
numeros.sort(function (a ,b){ return a-b});  
mostrarArray(numeros,'Ordenado');
//mostraer array invertido
numeros.reverse();  
mostrarArray(numeros,'Invertido');

document.write("<br/>"+"El array tiene "+numeros.length +" elementos ");

//busqueda
var buscar = prompt('Busca un numero',0);

var posicion = numeros.findIndex(numero => numero==buscar);

if (posicion && posicion != -1) {
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
    
}else{
    document.write("<h1>No Encontrado</h1>");
}