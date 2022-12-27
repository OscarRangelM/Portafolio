
const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault(); // Si un evento es cancelable este previene que no ocurra sin detener el resto del funcionamiento del evento.

    navigator.clipboard.writeText(coupon.value).then(() => {
        /* De esta manera copiamos el valor de coupon a nuestro portapapeles y luego hacemos la acción del arrow function */
        btn.textContent = "Copied!!!"; // Cambia el texto del boton por 3000 ms y luego regresa al texto original.
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 3000)
    })

    // coupon.select();
    // coupon.setSelectionRange(0,99999);
    // document.execCommand('copy'); // Este metodo ya no es util ni se recomienda usarlo, muchos navegadores ya no lo admiten. Anteriormente servia para copiar el texto.

    // btn.textContent = "Copied!!!";
    // setTimeout(() => {
    //     btn.textContent = "Copy";
    // }, 3000)
}

btn.addEventListener("click", copyText);
