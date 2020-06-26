'use strict'
var peliculas = ['Iron man', 'Spiderman', 'hulk','Deapool'];
var series = ['GOT', 'Chernobyl','Vikingos','La casa de papel'];
/*
var i = parseInt(prompt('Introduce que indice mostrar', 0));

if(i >= peliculas.length){
    alert('Indice excede la cantidad de elementos ' + peliculas.length);
    
}else{
    alert("En el indice "+i+" se encuentra "+ peliculas[i]);
}


document.write("<h1>Lista de peliculas</h1>")

document.write("<ul>")
///FOR
for (let index = 0; index < peliculas.length; index++) {
    document.write("<li>"+peliculas[index]+"</li>");
    
}
//FOREACH
peliculas.forEach(peliculas => {
    document.write("<li>"+peliculas+"</li>");
});


document.write("</ul>")
*/

//****************ARRAY MULTIDIMENRSIONAL**************** */
var cine = [peliculas,series];
console.log(cine[1][1]);