import { getMusic } from "./music-courier.mjs";

const collection = document.querySelector(`.collection`);
const music = await getMusic();

displayMusic();

function displayMusic() {
    collection.innerHTML = ``;

    music.forEach((entry) => {
        const section = document.createElement(`section`);
        section.classList.add(`card`);

        section.innerHTML =
            `<h2><a class="dark-link" href="music/${entry.fileName}" target="_blank">${entry.name}</a></h2>
            <p>Author: ${entry.author}</p>
            <p>License: ${entry.license}</p>
            <p>${entry.description}<p>`;

        collection.appendChild(section);
    });
}