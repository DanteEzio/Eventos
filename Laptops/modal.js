const modalContainer = document.querySelector(".modalCarrito");

const abrirCarrito = document.getElementById("open");

const cerrarCarrito = document.getElementById("cerrar");

abrirCarrito.addEventListener("click", () => {
  modalContainer.classList.toggle("modal-active");
});

cerrarCarrito.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
})