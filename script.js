const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const totalItems = carouselItems.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + offset + ')';
}

setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", function() {
  const cartButton = document.querySelector(".cart-button");
  const buyButton = document.querySelector(".buy-btn");

  cartButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Insufficient Balance");
  });

  buyButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Insufficient Balance. Try Again!");
  });
});