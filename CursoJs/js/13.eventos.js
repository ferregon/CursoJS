'use strict'

window.addEventListener('load', ()=> {

function cambiarColor(){
    var bg = boton.style.background;    
   
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }
   
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
   
    return true;
   
   }
   
   var boton = document.querySelector("#boton");
   // envento click
   boton.addEventListener('click', function(){
       cambiarColor();
   });
   //mouse over
   boton.addEventListener('mouseover', function(){
       boton.style.background = "blue";
   });
   //mouse out
   boton.addEventListener('mouseout', function(){
       boton.style.background = "#ccc";
   });
   
   //envento focus
   var input = document.querySelector("#campoNombre")
   input.addEventListener('focus', function(){
       console.log("[Focus] Estas dentro del input");
   });
   
   
   //evento blur
   input.addEventListener('blur', function(){
       console.log("[Blur] Estas fuera del input");
   });
   
   //evento key down
   input.addEventListener('keydown', function(event){
       console.log("[KeyDown] Estas pulsando la tecla ", String.fromCharCode(event.keyCode));
   });
   //envento key press
   input.addEventListener('keypress', function(event){
       console.log("[KeyPress] La tecla mantenida pulsada es ", String.fromCharCode(event.keyCode));
   });
   // evento key up
   
   input.addEventListener('keyup', function(event){
       console.log("[KeyUp] La tecla soltada es ", String.fromCharCode(event.keyCode));
   });
}); //end load
