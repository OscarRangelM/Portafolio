// Word alamacena el objeto con la clase input-text que en este caso como su clase lo indica es un input donde recibimos lo que el usurario quiere verificar.
const word = document.querySelector(".input-text");
// Objeto boton.
const btn = document.querySelector(".btn");
// Un parrafo donde vamos a ver el resultado en la pantalla.
const result = document.querySelector('.result');

// Despues de declarar nuestras variables agregamos un escucha de eventos para que cuando exista un click llame loa función countVowel
btn.addEventListener("click", countVowel);

/* Para este proyecto reciclamos la estructura de nuestro proyecto del día anterior. */

function countVowel(){
    // Declaramos un string vacio que va almacenar todas las coincidencias de las vocales.
    let vowelCount = [];
    // En wordVal guardamos el valor del objeto input y lo transformamos a minisculas.
    let wordVal = word.value.toLowerCase();
    /* Para saber cuantas vocales hay nos ayudamos del metodo match que encuentra las coincidencias en una cadena de caracteres
    para que este no pare en la primer coincidencia vamos a poner la letra g al final del arreglo que busca, esto nos devuleve todas las coincidencias y
    ahora las guardamos en nuestro aray vacio. */
    vowelCount = wordVal.match(/[a,e,i,o,u]/g);
    // Imprimimos el largo de la cadena con los resultados de la busqueda.
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount.length} vowels`;
}
