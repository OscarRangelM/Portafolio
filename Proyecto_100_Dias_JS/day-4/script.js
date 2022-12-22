// Variables
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');

// Listener of event
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal); // Si acemos click en la X de la ventana modal se cierra
modal.addEventListener("click", closeModal); // Si acemos click en un lugar del modal se cierra

// Open modal function
function openModal(e){ // Esta función cambia el display del modal de none a block lo que le permite aparecer en pantalla
    e.preventDefault();
    modal.style.display = "block";
}

// Close modal function

function closeModal(){ // Esta función cambia el display del modal de block a none para que no se pueda ver en pantalla
    modalContent.classList.add("slice-up"); // Aparete tambien agrega la clase slice-up para que tenga una animación de salida

    setTimeout(()=>{ // Esta funcion se ejecuta despues de 500ms despues de ser llamada.
        modal.style.display = "none";
        modalContent.classList.remove("slice-up"); // Remueve la clase para que la animacion de salida no se buge
    }, 500);

}
