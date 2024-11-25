
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show"); // Oculta el menú
    } else {
      navbarCollapse.classList.add("show"); // Muestra el menú
    }
  });
});
