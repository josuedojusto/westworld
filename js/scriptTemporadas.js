import { westworld } from "./temporadasData.js";

// Espero a que el DOM esté completamente cargado para ejecutar el script.
document.addEventListener("DOMContentLoaded", function () {
  // Verifico si el array 'westworld' con los datos de las temporadas existe.
  if (typeof westworld !== "undefined" && westworld.length > 0) {
    // Creo un objeto para manejar los parámetros de la URL.
    const params = new URLSearchParams(window.location.search);
    // Obtengo el id de la URL. Será un string o null si no existe.
    const idTemporada = params.get("temporada");

    let temporadaSeleccionada = westworld[0]; // Por defecto, la primera temporada.

    // Si existe 'id' en la URL.
    if (idTemporada) {
      // Convierto el id a un número entero y obtengo el índice del array (restando 1).
      const indice = parseInt(idTemporada, 10) - 1;

      // Verifico si el índice es válido y está dentro de los límites del array.
      if (indice >= 0 && indice < westworld.length) {
        temporadaSeleccionada = westworld[indice];
      } else {
        // Si el id no es válido muestro un mensaje en consola.
        console.warn(
          `El id de temporada '${idTemporada}' no es válido. Se mostrará la temporada 1.`
        );
      }
    }

    // Carga los datos de la temporada seleccionada (o la de por defecto).
    cargarDatosTemporada(temporadaSeleccionada);
  } else {
    console.error(
      "Los datos de las temporadas de Westworld no se encontraron o están vacíos."
    );
  }
});

/**
 * Cargo los datos del objeto de temporada en los elementos del DOM.
 * @param {object} temporada - El objeto de la temporada para mostrar.
 */
function cargarDatosTemporada(temporada) {
  // Valido que el objeto temporada no sea nulo o indefinido.
  if (!temporada) {
    console.error("El objeto de la temporada proporcionado es inválido.");
    return;
  }

  // Referencia al title de la pagina
  const title = document.querySelector("title");

  // Referencias por clase
  const subtituloH2 = document.querySelectorAll(".subtitulo-1");
  const subtituloH3 = document.querySelector(".subtitulo-2");

  // Referencias por ID
  const poster = document.getElementById("poster-temporada");
  const titulo = document.getElementById("titulo-temporada");
  const subtitulo = document.getElementById("subtitulo-temporada");
  const anio = document.getElementById("anio-temporada");
  const episodios = document.getElementById("cantidadEpisodios-temporada");
  const duracion = document.getElementById("duracionCapitulos-temporada");
  const creadores = document.getElementById("creadores");
  const musica = document.getElementById("musica-temporada");
  const resumen = document.getElementById("resumen");
  const header = document.getElementById("header");
  const episodiosContainer = document.getElementById("listado-episodios");
  const iframeTrailer = document.getElementById("iframe-trailer");

  // Asigno los datos de la temporada a los elementos del DOM referenciados.
  if (title) {
    title.textContent = `Westworld - Temporada ${temporada.id}`;
  }
  if (subtituloH2) {
    subtituloH2.forEach((element) => {
      element.textContent = `Temporada ${temporada.id}`;
    });
  }
  if (subtituloH3) {
    subtituloH3.textContent = `"${temporada.titulo}"`;
  }
  if (poster) {
    poster.src = temporada.caratula;
    poster.alt = `Póster de ${temporada.titulo}`;
    poster.classList.add("img-fluid"); // Clase de Bootstrap para imágenes responsivas
  }
  if (titulo) {
    titulo.textContent = `"${temporada.titulo}"`;
  }
  if (subtitulo) {
    subtitulo.innerHTML = temporada.subtitulo;
  }
  if (anio) {
    anio.innerHTML = `<strong>Año:</strong> ${temporada.anio}`;
  }
  if (episodios) {
    episodios.innerHTML = `<strong>Episodios:</strong> ${temporada.numEpisodios}`;
  }
  if (duracion) {
    duracion.innerHTML = `<strong>Duración x capítulo:</strong> ${temporada.duracionTipica}`;
  }

  if (creadores) {
    creadores.innerHTML = `<strong>Creadores:</strong> ${temporada.creadores}`;
  }
  if (musica) {
    musica.innerHTML = `<strong>Música:</strong> ${temporada.musica}`;
  }
  if (resumen) {
    resumen.innerHTML = `${temporada.resumen}`;
  }
  if (iframeTrailer && temporada.linkTrailer) {
    iframeTrailer.src = temporada.linkTrailer;
  }
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

  /* EPISODIOS */
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
                    class="img-fluid rounded-start"
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
                      <strong>Duracion:</strong> ${episodio.duracionMin} min <br />
                      <strong>Sinopsis:</strong> ${episodio.sinopsis}
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary"
                        >Temporada ${temporada.id}, Episodio ${episodio.nro}</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </article>`;
    });
  }
}
