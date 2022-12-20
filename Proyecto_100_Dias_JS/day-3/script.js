/*Para este ejercicio vamos a utilizar unos cuantos metodos, 
para generar los numeros aleatorios que despues vamos a útilizar como codiog hexadecimal
utilizaremos el Math.random que nos vas a entregar una serie de números aleatorios.
Para convertir estos numeros aleatorios en hexadecimales utilizaremos el metodo toString(16) 
el 16 indica que queremos hexadeximales. Y por último vamos a tomar solo 6 numeros de esos
con el metodo substring(de aquí, hasta aquí)  como los números ya son una cadena que convina numeros
y letras ahora le vamos a indicar que desde el indice 2 hastra el 8.*/

// Buscamos el elemento hex, donde vamos a imprimir el codigo del color en pantalla.
const hex = document.querySelector('.hex');
// Buscamos el elemento del boton.
const btn = document.querySelector('.generate')

// Función para generar el código de color
const generateColor = ()=>{
    // Color guarda el número random lo transforma en hex y lo corta en 6 digitos
    const color = Math.random().toString(16).substring(2, 8);
    // Cambia el background-color de la página.
    document.body.style.backgroundColor = '#' + color;
    // Imprimimos el código concatenado con un '#'
    hex.innerHTML = '#' + color;
}

// Llamamos la función cuando se escuche el evento click
btn.addEventListener('click', generateColor);