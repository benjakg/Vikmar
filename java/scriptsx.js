
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  });
});

const navLinks = document.querySelectorAll('.nav-item.nav-link');

const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
