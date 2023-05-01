const carouselContainer = document.querySelector('.carousel-container');
const carouselNextButton = document.querySelector('.carousel-button-next');
const carouselPrevButton = document.querySelector('.carousel-button-prev');
let carouselPosition = 0;

carouselNextButton.addEventListener('click', () => {
  if (carouselPosition > -80) {
    carouselPosition -= 10;
    carouselContainer.style.transform = `translateX(${carouselPosition}%)`;
  }
});

carouselPrevButton.addEventListener('click', () => {
  if (carouselPosition < 0) {
    carouselPosition += 10;
    carouselContainer.style.transform = `translateX(${carouselPosition}%)`;
  }
});
