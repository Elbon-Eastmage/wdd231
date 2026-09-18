const body = document.querySelector("body");
const header = document.querySelector("header");
const themeButton = document.querySelector("#theme-button");
const controlSection = document.querySelector(".control-section");
const membershipArea = document.querySelector("#membership-area");
const footer = document.querySelector("footer");

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    themeButton.classList.toggle("dark");
    hamburger.classList.toggle("dark");
    controlSection.classList.toggle("dark");
    membershipArea.classList.toggle("dark");
    footer.classList.toggle("dark");
});