const quoteButton = document.querySelector("#quote-button");
const closeButton = document.querySelector("dialog button");
const dialog = document.querySelector("dialog");

quoteButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => dialog.close());