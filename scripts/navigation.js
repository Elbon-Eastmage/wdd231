const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    mainNav.classList.toggle("show");
});