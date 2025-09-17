// Variables
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
