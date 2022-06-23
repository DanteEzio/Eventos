//Esta es mi base de datos
let data = [
  {
    id: 1,
    img: "imagenes/FABRICA-BMW.jpg",
    title: "Desbloqueando el Siguiente Nivel de Digital Twins",
    text: "Descubra cómo BMW Group y NVIDIA Omniverse utilizan la potencia",
  },
  {
    id: 2,
    img: "imagenes/ngc-gtc-corp-blog-promo-google-cloud-blog-1280x680-1.jpg",
    title: "NVIDIA y Google Cloud Ayudan a las Empresas a Desarrollar IA Más Rápido",
    text: "La nueva función One Click Deploy de NVIDIA NGC, que acelera el proceso de creación de IA de última generación,simplifica los complejos pasos de ejecución de un Jupyter",
  },
];


function agregarTarjetas() {
    let cards = " ";

    data.forEach((item) => {
      cards += `
    <div class="col">
            <div class="card tarjeta-index">
              <a href="">
                <img
                  src="${item.img}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${item.title}
                  </h5>
                  <p class="card-text">
                    ${item.text}
                  </p>
                </div>
              </a>
            </div>
          </div>    
    `;
    });

    const newCards = document.getElementById("contenedorCards");

    newCards.innerHTML += cards;
}

agregarTarjetas();