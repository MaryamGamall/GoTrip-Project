// js for navbar
var open_nav = document.querySelector(".mobile-nav i");
var sidenav = document.querySelector(".mob-navbar");
var closenav = document.querySelector(".close i");

open_nav.onclick = function () {
  sidenav.style.left = "0%";
};
closenav.onclick = function () {
  sidenav.style.left = "-100%";
};
// js for scroll to top

var scroll = document.querySelector(".scroll");

window.onscroll = function () {
  if (scrollY > 200) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
};

scroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

