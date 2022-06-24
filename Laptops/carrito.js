import { laptops } from "./baseDeDatos.js";

let carritoCompras = [];

export const carritoDeCompras = (productoID) => {
  let productoEnCarrito = " ";

  const renderProductoCarrito = () => {
    let producto = laptops.find((producto) => producto.id == productoID);
    carritoCompras.push(producto);

    // producto.stock = 1;

    productoEnCarrito = `
    <tr>
      <td>
        <img
        src="${producto.img}"
        class="card-img-top"
        alt="..."
        style="width: 100px; height: 70px"
        />
      </td>
      <td>${producto.nombre}</td>
      <td>1</td>
      <td>
        <button class="incrementar"><i class="fa-solid fa-plus"></i></button>
        <button class="decrementar"><i class="fa-solid fa-minus"></i></button>
        </td>
      <td>${producto.pDescuento}</td>
    </tr>
    
    `;

    document.querySelector("#pAgregados").innerHTML += productoEnCarrito;
  };

  renderProductoCarrito();
};
