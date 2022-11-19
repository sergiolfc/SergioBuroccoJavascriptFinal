const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className= "card"
    content.innerHTML = `
    <img src="${product.foto}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>  
`;     	

shopContent.append(content);

let comprar = document.createElement("button");
    comprar.innerText = "Agregar al Carrito";
    comprar.className= "compar"; 

    content.append(comprar); 

 comprar.addEventListener("click", () =>{

const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);    

if (repeat) {
    carrito.map((prod) => {
        if(prod.id === product.id) {
        prod.cantidad++; 
        }      
    });
} else{
    carrito.push({
        id: product.id,
        foto: product.foto,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
    })
}
console.log(carrito); 
contador ();     
saveLocal();

});  
    });

    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito)); 
        }
        
 

        