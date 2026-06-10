// scripts for personal portfolio

// NAVBAR
// Show menu when hamburger is clicked
const toggle = document.getElementById('navbar-toggle');
const navbar = document.querySelector('.navbar');

if (toggle && navbar) {
    toggle.addEventListener('click', () => {
        navbar.classList.toggle('show-menu');
    });
}
// If click outside navbar toggle hamburger
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbar.contains(event.target);
    const isToggleButton = toggle.contains(event.target);
    if (!isClickInsideMenu && !isToggleButton){
        navbar.classList.remove('show-menu');
    }
});
// Scroll to bottom on contact click
const contactBtn = document.querySelector(".contact-button");
const contactSection = document.getElementById("contact");
contactBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
});

// ETHICS CAROUSEL
const ethicsTrack = document.getElementById("ethics-carousel-track");
const ethicsSlides = document.querySelectorAll(".ethics-carousel-slide");
let index = 0;

function updateCarousel() {
  ethicsTrack.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % ethicsSlides.length;
  updateCarousel();
}

let autoSlide = setInterval(nextSlide, 4000);

const carousel = document.querySelector(".ethics-carousel-wrapper");
if (carousel) {
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseleave", () => {
        autoSlide = setInterval(nextSlide, 4000);
    });
}

// SEE MORE EXTENSION

const seeMoreButtons = document.querySelectorAll(".see-more-button");

seeMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const moreInfo = button.nextElementSibling;

    if (moreInfo.style.display === "block") {
      moreInfo.style.display = "none";
      button.textContent = "See more";
    } else {
      moreInfo.style.display = "block";
      button.textContent = "See less";
    }
  });
});



