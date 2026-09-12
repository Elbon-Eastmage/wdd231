const cards = document.querySelector(".cards");

async function getMembers() {
    const data = await fetch("https://elbon-eastmage.github.io/wdd231/chamber/data/members.json");
    const members = await data.json().companies;
    displayMembers(members);
}

function displayMembers(members) {
    for (const member of members) {
        const card = document.createElement("section");
        card.classList.add("card");
        card.innerHTML =
            `<h2>${member.name}</h2>
            <img src="${imageFileName}" loading="lazy" alt="${member.name}" height="80" width="80">
            <p>
            <span class="emphasize">Address: </span>${member.address}<br>"
            <span class="emphasize">Phone: </span>${member.phone}<br>"
            <span class="emphasize">URL: </span>${member.url}"
            </p>`;
        
        cards.appendChild(card);
    }
}