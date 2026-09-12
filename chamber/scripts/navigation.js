const mainNav = document.querySelector("#main-nav");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    mainNav.classList.toggle("show");
});