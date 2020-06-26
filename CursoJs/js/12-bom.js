'use strict'

//el bom es el browser object model
function getBoom() {
 
console.log(window.innerHeight);
console.log(window.innerWidth);   
}

function newWindow(url) {
   window.open(url);
}

getBoom();