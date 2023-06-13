const closeBtn = document.getElementById("banner-close");
const container = document.getElementById("banner-container");

const banner = document.getElementsByClassName("banner-header");
closeBtn.addEventListener("click", function () {
  container.style.display = "none";
});