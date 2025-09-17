// Genero SubMenu de Temporadas y Menu de Footer De Temporadas Dinámicamente
import { westworld } from "./temporadasData.js";
const temporadasMenu = document.getElementById("temporadas-submenu");
const footerTemporadas = document.getElementById("footer-menu-temporadas");

document.addEventListener("DOMContentLoaded", function () {
  if (typeof westworld !== "undefined" && westworld.length > 0) {
    westworld.forEach((temporada) => {
      //Submenu Dinamico de Temporadas
      temporadasMenu.innerHTML += `<li>
                      <a
                        class="dropdown-item"
                        href="temporadas.html?temporada=${temporada.id}"
                      >
                        <img
                          src="./img/posters/westworld-season${temporada.id}-thumb.jpg"
                          alt="Poster Temporada ${temporada.id}"
                          class="dropdown-poster"
                        />
                        T${temporada.id} - ${temporada.titulo}
                      </a>
                    </li>`;
      // Menu dinamico de Temporadas en Footer
      footerTemporadas.innerHTML += `<div>
                    <a href="temporadas.html?temporada=${temporada.id}"
                      ><img
                        src="./img/posters/westworld-season${temporada.id}-thumb.jpg"
                        alt="Poster Temporada ${temporada.id}"
                        class="footer-poster"
                      />Temporada ${temporada.id} - ${temporada.titulo} </a>
                  </div>`;
    });
  } else {
    console.error(
      "Los datos de las temporadas de Westworld no se encontraron o están vacíos."
    );
  }
});

// Genero un Toggle para hacer blur de fondo al clickear menu hamburguesa
const burgerMenu = document.querySelector("#btn-menu");

// Evento click sobre menu hamburguesa
burgerMenu.addEventListener("click", () => {
  // Variables
  const navMenu = document.querySelector(".logo");
  const navbar = document.querySelector(".navbar");
  const dropdown = document.querySelector(".dropdown-menu");

  // Toggle
  navMenu.classList.toggle("blur");
  navbar.classList.toggle("fondoNav");
  dropdown.classList.toggle("fondoNone");
});
