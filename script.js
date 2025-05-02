// script.js

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// mapas

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".map-container svg path, .map-container svg polygon");
  targets.forEach(shape => {
    shape.addEventListener("click", () => {
      shape.classList.toggle("clicked");
      const name = shape.getAttribute("id") || "Sin nombre";
      alert(`Clic en: ${name}`);
    });
  });
});



