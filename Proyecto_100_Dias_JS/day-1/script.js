// Primero vamos a crear variables que hagan referencia a un elemento del HTML
const countNumber = document.querySelector('.count'); //El número que va a cambiar en la pantalla
const buttons = document.querySelector('.buttons'); //Esto lo hacemos ya que es un contenedor que tiene ya los 3 botones y asi podemos usar la metodologia DRY

//Al tener una sola variable solo vamos a escuchar un evento y dependiendo de lo que el target class nos diga vamos hacer una accion o la otra

buttons.addEventListener('click', (e) => { //Target es una referencia al evento clickado.
    // console.log(e.target);
    //Si la clase contenida que obetenemos de del target es alguna de las opciones hacemos algo.
    if (e.target.classList.contains('add')) countNumber.innerHTML++; cambioDeColor();
    //Contains devuelve un booleano si el elemento indicado el mismo
    //En este caso preguntamos si alguna de estas clases coincide con el elemento indicado
    if (e.target.classList.contains('subtract')) countNumber.innerHTML--; cambioDeColor();
    if (e.target.classList.contains('reset')) countNumber.innerHTML = 0; cambioDeColor();
});

function cambioDeColor() { /*Por último creamos una función que detecte si el número es mayor, igual o menor a 0, 
                            y dependiendo de eso cambiamos el color del número */
    if (countNumber.innerHTML > 0) {
        countNumber.style.color = 'yellow';
    } else if (countNumber.innerHTML < 0) {
        countNumber.style.color = 'red';
    } else {
        countNumber.style.color = '#fff';
    }
}