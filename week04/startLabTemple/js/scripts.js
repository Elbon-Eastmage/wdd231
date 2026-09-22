import { temples } from "../data/temples.js";
import { url } from "../data/temples.js";

const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

myclose.addEventListener("click", () => mydialog.close());
displayItems(temples);

function displayItems(data) {
    console.log(data);
    data.forEach(temple => {
        console.log(temple);
        const photo = document.createElement("img");
        photo.src = `${url}${temple.path}`;
        photo.alt = temple.name;
        photo.addEventListener("click", () => showStuff(temple));
        showHere.appendChild(photo);
    });
}

function showStuff(temple) {
    mytitle.innerHTML = temple.name;
    myinfo.innerHTML = `Dedicated ${temple.dedicated} by ${temple.person} as temple number ${temple.number}`;
    mydialog.showModal();
}