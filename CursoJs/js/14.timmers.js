'use strict'

window.addEventListener('load', ()=>{

    function intervalo(){
        var tiempo  = setInterval(()=>{
        var bg      = document.querySelector('#titulos');
            if (bg.style.background == 'green') {
                bg.style.background = 'orange';
            } else {
                bg.style.background = 'green';
            }
        }, 500);
        return tiempo;
    }

        var tiempo  = intervalo();
        
        var stop    = document.querySelector('#stop')
        stop.addEventListener('click', ()=>{
            alert('Has detenido la animacion');
            clearInterval(tiempo);
        });

        var start   = document.querySelector('#start');
        start.addEventListener('click', function(){
            alert('Has iniciado la animacion');
            intervalo();
        });

});