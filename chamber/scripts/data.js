const entries = document.querySelector("#entries");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
let isGrid = true;

gridButton.addEventListener("click", () => {
    isGrid = true;
    getMembers();
});

listButton.addEventListener("click", () => {
    isGrid = false;
    getMembers();
})

getMembers();

async function getMembers() {
    const data = await fetch("https://elbon-eastmage.github.io/wdd231/chamber/data/members.json");
    const members = await data.json();
    displayMembers(members.companies);
}

function displayMembers(members) {
    entries.innerHTML = "";

    if (isGrid) {
        entries.classList.add("cards");
        entries.classList.remove("list");
    }
    else {
        entries.classList.remove("cards");
        entries.classList.add("list");
    }

    for (const member of members) {
        const entry = document.createElement("section");
        entry.classList.add("entry");

        if (isGrid) {
            entry.innerHTML =
                `<h2>${member.name}</h2>
                <img src="${member.imageFileName}" loading="lazy" alt="${member.name}" height="80" width="80">
                <p>
                <span class="emphasize">Address: </span>${member.address}<br>
                <span class="emphasize">Phone: </span>${member.phone}<br>
                <span class="emphasize">URL: </span>${member.url}
                </p>`;
        }
        else {
            entry.innerHTML =
                `<h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.url}</p>`;
        }

        entries.appendChild(entry);
    }
}