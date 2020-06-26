'use strict'
function estilos(colorB,colorF) {
    caja.style.background = colorB;    
    caja.style.color = colorF
}

//Ejercicio de conseguir elementos con un id en concreto
//var caja = document.getElementById('saludo');
var caja = document.querySelector('#saludo');
caja.innerHTML = "Hola Mundo desde Js";
caja.style.background = 'green';
caja.style.color = 'white';


//conseguir elementos por sus etiquetas

var divs = document.getElementsByTagName('div');


 var hr = document.createElement('hr');
 var seccion = document.querySelector("#miseccion");
 var valor
for (valor in divs) {
    if (typeof divs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(divs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
        
    }
}
seccion.append(hr);
//console.log(divs);
//conseguir elementos por su clase
