const closeBtn = document.getElementById("close");
const container = document.getElementById("container");

const banner = document.getElementsByClassName("header");
closeBtn.addEventListener("click", function () {
  container.style.display = "none";
});
