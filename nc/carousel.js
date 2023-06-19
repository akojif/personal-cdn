// Carousel  Info card

const carouselWrapper = document.querySelector(".wrapper");
const caroLeftBtn = document.querySelector(".left-btn");
const caroRightBtn = document.querySelector(".right-btn");
const infoCards = Array.from(carouselWrapper.children);

const cardWidth = infoCards[0].offsetWidth * 2;

caroRightBtn.addEventListener("click", () => {
  const currentPosition = carouselWrapper.scrollLeft;
  const newPosition = currentPosition + cardWidth;
  carouselWrapper.scrollLeft = newPosition;
  carouselWrapper.style.scrollBehavior = "smooth";
});

caroLeftBtn.addEventListener("click", () => {
  const currentPosition = carouselWrapper.scrollLeft;
  const newPosition = currentPosition - cardWidth;
  carouselWrapper.scrollLeft = newPosition;
  carouselWrapper.style.scrollBehavior = "smooth";
});