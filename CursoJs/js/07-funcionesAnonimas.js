'use strict'

var num1 = parseInt(prompt('Ingrese el 1er numero', 0));
var num2 = parseInt(prompt('Ingrese el 2do numero', 0));
//funciones anonimas
function sumame(num1, num2, sumayMuestra, sumaXdos) {
    var sumar = (num1+num2);
    sumayMuestra(sumar);
    sumaXdos(sumar);

    return sumar;
}

sumame(num1,num2, function (dato) {
    console.log( 'La suma es: '+ dato);
}, function (dato) {
    console.log('La suma multiplicado por dos es; '+(dato*2));
}
);