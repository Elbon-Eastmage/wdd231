const body = document.querySelector("body");
const header = document.querySelector("header");
const themeButton = document.querySelector("#theme-button");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    themeButton.classList.toggle("dark");
    main.classList.toggle("dark");
    footer.classList.toggle("dark");
});