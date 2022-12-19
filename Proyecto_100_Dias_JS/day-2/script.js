'use strict';

const number = document.querySelector('.number') ;
// La constante number nusca en el DOM el elementop que tenga la clase .number
const btn = document.querySelector('.generate');
// La constante btn busca en el DOM el elemento con la clase .generate

const generateNumber = () =>{
    // Esta funcion genera un numero aleatorio y lo guarda en la variable randomNumber y añade este valor guardado como el valor del span .number
    const randomNumber = Math.floor(Math.random()*10+1);
    number.innerHTML = randomNumber;
};

btn.addEventListener('click', generateNumber); // Evento que al escuchar un click llama la función anterior.

// generateNumber();    // Si queremos que al recargar o iniciar la pagina el número generado sea un numero aleatorio llamamos la funcion sin un evento.