// Variables
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindromo); // Escucha al avento click sobre el boton "check" y ejecuta la funcion palindromo

// Function palindromo
function palindromo(){
    /* Esta funcion extrae el valor del input lo convierte a minusculas y lo gurada en una variable.
    Despues se manda a llamar al metodo split para convertir la cadena en un array,
    a continuación invierte el orden del array,
    y por último vuelve a unir el array en una cadena. */
    const palabra = document.querySelector(".input-text").value.toLowerCase();
    let palindro = palabra.split("").reverse().join('');
    if (palabra === palindro){ // Compara si la nueva cadena es igual a la palabra en el input
        result.innerHTML = `${palabra.toUpperCase()} is a palindrome :)`;
        //En caso de que sea igual regresa el mensaje indicandolo
    }else{
        result.innerHTML = `${palabra.toUpperCase()} is Not a palindrome`;
        // En caso de que no sea igual indica que no es un palindromo.
    }
    
}
