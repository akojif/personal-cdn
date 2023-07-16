const trackLastSec = document.querySelector(".lastSec-track");
const slidesOfLastSec = Array.from(trackLastSec.children);

const nextButtonLastSec = document.querySelector(".last-rightBtn");
const prevButtonLastSec = document.querySelector(".last-leftBtn");

const slideSizeLastSec = slidesOfLastSec[0].getBoundingClientRect();
const slideWidthLastSec = slideSizeLastSec.width;

// Move each slide to the left * their index
const setSidePositionLastSec = (slide, index) => {
  slide.style.left = slideWidthLastSec * index + "px";
};
slidesOfLastSec.forEach(setSidePositionLastSec);

let currentIndex = 0;
const numSlides = slidesOfLastSec.length;
const autoSlideInterval = 5000; // Interval in milliseconds

// Function to update the heading and sub-heading elements when the image changes
const updateSlideData = (index) => {
  const currentImage = slidesOfLastSec[index];
  const $heading = currentImage.querySelector("h1");
  const $subHeading = currentImage.querySelector("h2");
  const headingText = $heading.dataset.heading;
  const subHeadingText = $subHeading.dataset.subheading;
  $heading.textContent = headingText;
  $subHeading.textContent = subHeadingText;
};

// Function to move to the next slide
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % numSlides;
  updateSlideData(currentIndex);
  moveSlides();
};

// Function to move to the previous slide
const prevSlide = () => {
  currentIndex = (currentIndex - 1 + numSlides) % numSlides;
  updateSlideData(currentIndex);
  moveSlides();
};

// Function to move the slides
const moveSlides = () => {
  const newPosition = currentIndex * slideWidthLastSec;
  trackLastSec.style.scrollBehavior = "smooth";
  trackLastSec.scrollLeft = newPosition;
};

// Click event handler for the left button
prevButtonLastSec.addEventListener("click", (e) => {
  prevSlide();
});

// Click event handler for the right button
nextButtonLastSec.addEventListener("click", (e) => {
  nextSlide();
});

// Automatically move to the next slide after the specified interval
setInterval(() => {
  nextSlide();
}, autoSlideInterval);
