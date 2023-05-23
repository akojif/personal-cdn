// How it works : last section code

const trackLastSec = document.querySelector(".lastSec-track");
const slidesOfLastSec = Array.from(trackLastSec.children);

const nextButtonLastSec = document.querySelector(".last-rightBtn");
const prevButtonLastSec = document.querySelector(".last-leftBtn");

const slideSizeLastSec = slidesOfLastSec[0].getBoundingClientRect();
const slideWidthLastSec = slideSizeLastSec.width;

// this code is used to move each slides to the left * their index
const setSidePositionLastSec = (slide, index) => {
  slide.style.left = slideWidthLastSec * index + "px";
};
slidesOfLastSec.forEach(setSidePositionLastSec);

// when you click left , move slides to the left
prevButtonLastSec.addEventListener("click", (e) => {
  const currentPosition = trackLastSec.scrollLeft;
  const newPosition = currentPosition - slideWidthLastSec;
  if (newPosition < 0) {
    let loopPosition = trackLastSec.scrollWidth;
    newPosition === loopPosition;

    trackLastSec.style.scrollBehavior = "smooth";
    trackLastSec.scrollLeft = loopPosition;
  } else {
    trackLastSec.style.scrollBehavior = "smooth";
    trackLastSec.scrollLeft = newPosition;
  }
});

// when you click right, move slides to the right

nextButtonLastSec.addEventListener("click", (e) => {
  const currentPosition = trackLastSec.scrollLeft;

  const newPosition = currentPosition + slideWidthLastSec;

  const maxScrollPosition = trackLastSec.scrollWidth;

  if (newPosition >= maxScrollPosition) {
    const loopPosition = 0;
    trackLastSec.scrollTo({
      behavior: "smooth",
      left: loopPosition,
    });
  } else {
    trackLastSec.scrollTo({
      behavior: "smooth",
      left: newPosition,
    });
  }
});

jQuery(document).ready(function($) {
        var $slider = $('#slider');
        var $heading = $slider.find('.top-lastSec h1');
        var $subHeading = $slider.find('.slider-txt h2');
        var $images = $slider.find('.lastSec-track img');
        var currentIndex = 0;
        var numSlides = $images.length;
        
        // initialize the heading and sub-heading elements
        $heading.text($images.eq(0).data('heading'));
        $subHeading.text($images.eq(0).data('subheading'));
        
        // update the heading and sub-heading elements when the image changes
        function updateSlideData(index) {
            var $currentImage = $images.eq(index);
            $heading.text($currentImage.data('heading'));
            $subHeading.text($currentImage.data('subheading'));
        }
        
        // handle the click event for the left button
        $slider.on('click', '.last-leftBtn', function() {
            currentIndex = (currentIndex - 1 + numSlides) % numSlides;
            updateSlideData(currentIndex);
        });
        
        // handle the click event for the right button
        $slider.on('click', '.last-rightBtn', function() {
            currentIndex = (currentIndex + 1) % numSlides;
            updateSlideData(currentIndex);
        });
    });