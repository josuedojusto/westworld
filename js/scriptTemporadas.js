// Importo los datos de las temporadas
import { westworld } from "./temporadasData.js";

document.addEventListener("DOMContentLoaded", function () {
  // Verifico si el array con los datos de las temporadas existe
  if (typeof westworld !== "undefined" && westworld.length > 0) {
    // Creo un objeto para manejar los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    // Tomo el id de la URL (string o null si no existe)
    const idTemporada = params.get("temporada");
    // Por defecto, la primera temporada
    let temporadaSeleccionada = westworld[0];

    // Si vino una temporada por URL, la busco en el array
    if (idTemporada) {
      temporadaSeleccionada = westworld.find(
        (temporada) => temporada.id === parseInt(idTemporada, 10)
      );
    } else {
      console.log(
        "La temporada llegó vacía en la URL, se carga la temporada 1 por defecto."
      );
    }

    // Cargo los datos de la temporada seleccionada (o la de por defecto)
    cargarDatosTemporada(temporadaSeleccionada);
  } else {
    console.error(
      "Los datos de las temporadas de Westworld no se encontraron o están vacíos."
    );
  }
});

/**
 * Cargo los datos del objeto de temporada en los elementos del DOM
 * @param {object} temporada - El objeto de la temporada para mostrar
 */
function cargarDatosTemporada(temporada) {
  // Valido que el objeto temporada no sea nulo o indefinido
  if (!temporada) {
    console.error("El objeto de la temporada proporcionado es inválido.");
    return;
  }

  // Referencia al title de la pagina
  const title = document.querySelector("title");
  // Referencias por clase
  const subtituloH2 = document.querySelector(".subtitulo-1");
  const subtituloH3 = document.querySelector(".subtitulo-2");
  // Referencias por ID
  const header = document.getElementById("header");
  const temporadaInfo = document.getElementById("temporada-info");
  const temporadaTrailer = document.getElementById("temporada-trailer-iframe");
  const episodiosContainer = document.getElementById("listado-episodios");

  // Asigno los datos de la temporada a los elementos del DOM
  if (title) {
    title.textContent = `Westworld - Temporada ${temporada.id}`;
  }
  if (subtituloH2) {
    subtituloH2.textContent = `Temporada ${temporada.id}`;
  }
  if (subtituloH3) {
    subtituloH3.textContent = `"${temporada.titulo}"`;
  }

  // INFORMACION DE TEMPORADA
  if (temporadaInfo) {
    temporadaInfo.innerHTML = `<article class="card mb-3 p-4" style="max-width: 840px">
          <div class="row g-0">
            <div class="col-md-5 d-flex align-items-center justify-content-center">
              <img
                src="${temporada.caratula}"
                alt="Poster Westworld Temporada ${temporada.id} - ${temporada.titulo}"
                id="poster-temporada"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="subtitulo-1" style="text-decoration: underline">Temporada ${temporada.id}</h5>
                <h4 class="card-title" style="margin-bottom: 10px;font-size: 1.8rem;">"${temporada.titulo}"</h4>
                <p class="card-text">
                  <p><strong>Año:</strong> ${temporada.anio}</p>
                  <p><strong>Episodios:</strong> ${temporada.numEpisodios}</p>
                  <p"><strong>Duración x capítulo:</strong> ${temporada.duracionTipica}</p>
                  <p><strong>Creadores:</strong> ${temporada.creadores}</p>
                  <p><strong>Música:</strong> ${temporada.musica}</p>
                  <h4 style="text-decoration: underline">Resumen</h4>
                  <p>${temporada.resumen}</p>
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Temporada ${temporada.id}</small>
                </p>
              </div>
            </div>
          </div>
        </article>`;
  }

  // IFRAME TRAILER
  if (temporadaTrailer && temporada.linkTrailer) {
    temporadaTrailer.innerHTML = `<iframe
              id="iframe-trailer"
              width="560"
              height="315"
              src="${temporada.linkTrailer}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`;
  }

  // BACKGROUND PARA HEADER SEGUN TEMPORADA
  if (header) {
    switch (temporada.id) {
      case 1:
        header.style.background = `url("./img/westworld-background-t1.jpg")`;
        header.style.backgroundPosition = "center";
        break;
      case 2:
        header.style.background = `url("./img/westworld-background-t2.jpg")`;
        header.style.backgroundPosition = "top";
        break;
      case 3:
        header.style.background = `url("./img/westworld-background-t3.jpg")`;
        header.style.backgroundPosition = "center";
        break;
      case 4:
        header.style.background = `url("./img/westworld-background-t4.jpg")`;
        header.style.backgroundPosition = "center";
        break;
      default:
        header.style.background = `url("./img/westworld-hero.jpg")`;
        header.style.backgroundPosition = "center";
        break;
    }
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
  }

  // LISTADO DE EPISODIOS
  if (episodiosContainer) {
    temporada.episodios.forEach((episodio) => {
      episodiosContainer.innerHTML += `
            <article class="card mb-3 p-4" style="max-width: 840px">
              <div class="row g-0">
                <div
                  class="col-md-4 d-flex align-items-center justify-content-center"
                >
                  <img
                    src="./img/westworld-logo-ancho-negro.png"
                    class="img-fluid"
                    alt="Logo Westworld Negro"
                    width="200"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <h6 style="text-decoration: underline">Episodio ${episodio.nro}</h6>
                    <h4 class="card-title">"${episodio.titulo}"</h4>
                    <p class="card-text">
                      <strong>Director:</strong> ${episodio.director}<br />
                      <strong>Guión:</strong> ${episodio.guion} <br />
                      <strong>Estreno:</strong> ${episodio.estreno} <br />
                      <strong>Duración:</strong> ${episodio.duracionMin} min <br />
                      <strong>Sinopsis:</strong> ${episodio.sinopsis}
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary"
                        >Temporada ${temporada.id} - Episodio ${episodio.nro}</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </article>`;
    });
  }
}
