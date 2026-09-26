import { levels } from "../data/levels.mjs";

const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");
const h2 = document.querySelector("dialog h2");
const cost = document.querySelector(".cost");
const ul = document.querySelector("dialog ul");

const nonprofitButton = document.querySelector("#nonprofit-button");
const bronzeButton = document.querySelector("#bronze-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");

closeButton.addEventListener("click", () => dialog.close());
nonprofitButton.addEventListener("click", () => displayModal(levels[0]));
bronzeButton.addEventListener("click", () => displayModal(levels[1]));
silverButton.addEventListener("click", () => displayModal(levels[2]));
goldButton.addEventListener("click", () => displayModal(levels[3]));

function displayModal(level) {
    ul.innerHTML = ``;
    h2.innerHTML = `${level.name} Membership`;
    cost.innerHTML = `Cost: ${level.cost}`;
    
    for (const benefit of level.benefits) {
        const li = document.createElement("li");
        li.innerHTML = benefit;
        ul.appendChild(li);
    }
    
    dialog.showModal();
}