// scripts for personal portfolio

// NAVBAR
// This toggles the `.show-menu` class on `.navbar` when hamburger is clicked
const toggle = document.getElementById('navbar-toggle');
const navbar = document.querySelector('.navbar');
toggle.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
});
// This listens for any clicks on the document.
// If the click is NOT on the navbar or the toggle, it removes `.show-menu`
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbar.contains(event.target);
    const isToggleButton = toggle.contains(event.target);
    if (!isClickInsideMenu && !isToggleButton){
        navbar.classList.remove('show-menu');
    }
});

const track = document.getElementById("ethics-carousel-track");
const slides = document.querySelectorAll(".ethics-carousel-slide");
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateCarousel();
}

let autoSlide = setInterval(nextSlide, 4000);

const carousel = document.querySelector(".ethics-carousel-wrapper");
carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextSlide, 4000);
});
