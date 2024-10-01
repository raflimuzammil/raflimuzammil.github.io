const hamburger = document.getElementById("nav__hamburger");
const hamburger_top = document.getElementById("nav__hamburger__top");
const hamburger_mid = document.getElementById("nav__hamburger__mid");
const hamburger_bottom = document.getElementById("nav__hamburger__bottom");
const menu = document.getElementById("nav__menu");

window.addEventListener("click", function (e) {
  if (
    e.target == hamburger ||
    e.target == hamburger_top ||
    e.target == hamburger_mid ||
    e.target == hamburger_bottom
  ) {
    hamburger_top.classList.toggle("transform__top");
    hamburger_mid.classList.toggle("transform__scale");
    hamburger_bottom.classList.toggle("transform__bottom");
    menu.classList.toggle("active");
  }
});
