const pintarCarrito = () =>{
    modalContainer.innerHTML="";
    modalContainer.style.display="flex";
    const modalHeader = document.createElement ("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito.</h1>
    `;
modalContainer.append(modalHeader);

const modalbutton = document.createElement("h2");
modalbutton.innerText = "x";
modalbutton.claseName="modal-header-button";

modalbutton.addEventListener("click", () => {
    modalContainer.style.display="none";
});

modalHeader.append(modalbutton);

carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className="modal-content";
    carritoContent.innerHTML = `
        <img src="${product.foto}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        <p>Cant.:  ${product.cantidad} </p>  
        <span class="restar"> ➖ </span>
        <p>Subtotal : ${product.cantidad * product.precio}</p> 
        <span class="sumar"> ➕ </span>

    `;

    modalContainer.append(carritoContent);

let restar = carritoContent.querySelector(".restar")
restar.addEventListener("click", () => {
    if (product.cantidad !== 1) {
    product.cantidad--;
    }
    saveLocal ();
    pintarCarrito();
 
});

let sumar = carritoContent.querySelector(".sumar")
sumar.addEventListener("click", () => {
    product.cantidad++;
    saveLocal ();
    pintarCarrito();
});

    let eliminar = document.createElement("span");
    eliminar.innerText= "❌";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);
    
    eliminar.addEventListener("click", eliminarProducto);
});


    const total = carrito.reduce((acc,el) =>acc + el.precio *el.cantidad, 0 );

    const totalCompra =document.createElement("div")
    totalCompra.className= "total-content"
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalCompra);
}
verCarrito.addEventListener("click", pintarCarrito );

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => { 
        return carritoId !== foundId;
});
contador();
 
pintarCarrito(); 
};

const contador = () => {
    cantidadCarrito.style.display = "block" ;
    const  carritoLength= carrito.length;
    localStorage.setItem ("carritoLength",  JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem ("carritoLength")); 
}; 

contador ();