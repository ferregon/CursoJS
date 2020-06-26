'use strict'

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tu apellido");

var texto = `
 <H1>Hola</H1>
 <h3>Mi nombre es ${nombre}</h3>
 <h3>Y mi apellido es ${apellidos}</h3>
 `;

document.write(texto);