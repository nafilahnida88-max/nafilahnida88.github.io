// Menu navigasi HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// Menutup menu setelah link diklik
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});

// Tahun otomatis pada footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Tombol download CV
function downloadCV() {
    window.print();
}