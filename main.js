//menú hamburguesa

/* Selecting the elements from the DOM. */
const navToggle =document.querySelector(".varNav__toggle");
const navMenu= document.querySelector(".varNav__sections");
const firstChild= document.getElementById('firstChild');
const secondChild= document.getElementById('secondChild');
const lastChild= document.getElementById('lastChild');

/* The above code is adding an event listener to the navToggle element. When the navToggle element is
clicked, the firstChild, secondChild, and lastChild elements will toggle the class "first",
"second", and "last" respectively. The navMenu element will toggle the class
"varNav__sections-visible". */
navToggle.addEventListener("click",()=>{
    firstChild.classList.toggle("first");
    secondChild.classList.toggle("second");
    lastChild.classList.toggle("last");
    navMenu.classList.toggle("varNav__sections-visible");
});


// scroll container portfolio

/* Selecting the elements from the DOM. */
const prev= document.querySelector(".prev");
const next= document.querySelector(".next");
const slider= document.querySelector(".portfolio__gallery-cont");

prev.addEventListener("click",()=>{
    slider.scrollLeft -=310; //scrollLeft desplza a la izq
})

next.addEventListener("click",()=>{
    slider.scrollLeft +=310; //scrollLeft desplza a la izq
})