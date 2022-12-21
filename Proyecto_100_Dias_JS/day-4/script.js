// Variables
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content')

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// Open modal function
function openModal(e){
    e.preventDefault();
    modal.style.display = "block";
}

// Close modal function

function closeModal(){
    modalContent.classList.add("slice-up");

    setTimeout(()=>{
        modal.style.display = "none";
        modalContent.classList.remove("slice-up");
    }, 500);

}
