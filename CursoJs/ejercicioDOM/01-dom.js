'use strict'

window.addEventListener('load', ()=>{
 var formulario = document.querySelector('#formulario');
 var box_dashed = document.querySelector('.dashed');
 box_dashed.style.display = 'none';
    
    formulario.addEventListener('submit', () =>{
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = document.querySelector('#edad').value;
        box_dashed.style.display = 'block';
        console.log(nombre,apellido,edad);
    });
});