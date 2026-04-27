// Simple sticky header shadow on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});


const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".menu-close");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  toggle.classList.toggle("active");
});

/* close with X */

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  toggle.classList.remove("active");
});

/* close with overlay */

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  toggle.classList.remove("active");
});