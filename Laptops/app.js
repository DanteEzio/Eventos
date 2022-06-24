import { laptops } from "./baseDeDatos.js";
import { carritoDeCompras } from "./carrito.js";

const cargarProductos = (laptops) => {
  let cards = " ";

  laptops.forEach((item) => {
    cards = `
      <div class="col">
              <div class="card">
                <a href="">
                  <img
                  src="${item.img}"
                  class="card-img-top"
                  alt="..."
                  style="width: 100%; height: 250px"
                />
                </a>
                <div class="card-body">
                  <a href="">
                    <h5 class="card-title">
                      ${item.descripcion}
                    </h5>
                  </a>
                  <p class="text-muted">${item.sku}</p>
                  <h6><s>$${item.pReal.toLocaleString()} MXN</s></h6>
                  <h6>$${item.pDescuento.toLocaleString()} MXN</h6>
                  <p>Disponibles: ${item.stock}pzs.</p>
                  <button type="button" class="btn btn-secondary agregarCarrito" id=boton${
                    item.id
                  }>
                    Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
       </div>
    `;
    document.querySelector("#contenedorLaptops").innerHTML += cards;

    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", ()=> {
      carritoDeCompras(item.id);
      alert(`Se agrego ${item.nombre} al carrito`);
    });
  });
};

cargarProductos(laptops);
