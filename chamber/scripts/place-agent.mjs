import { places } from "../data/places.mjs";

const gridArea = document.querySelector(".grid-area");

for (const place of places) {
    const section = document.createElement("section");
    section.classList.add("card");

    section.innerHTML =
        `<h2>${place.name}</h2>
        <figure>
        <img src="${place.imageFileName}" alt="${place.imageText}" loading="lazy" width="300" height="200">
        </figure>
        <p>${place.description}</p>
        <address>${place.address}</address>
        <div>
        <button class="card-button">Learn More</button>
        </div>`;

    gridArea.appendChild(section);
}