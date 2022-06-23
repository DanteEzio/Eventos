import { data } from "./stock.js";


// Definimos nuestro carrito donde vamos a guardar nuestros productos
let carritoCompras = [];

export const carritoLaptop = (itemId) => {
    const contenedorCarrito = document.getElementById("carritoContenedor")

    const renderProductoCarrito = () => {
        let producto = data.find((producto) => producto.id == itemId);
        carritoCompras.push(producto);

        producto.cantidad = 1;

        let div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = ``;

        contenedorCarrito.appendChild(div);
    }

    renderProductoCarrito()
}