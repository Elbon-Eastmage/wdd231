import { getMembers } from "./member-courier.mjs";

const membershipArea = document.querySelector("#membership-area");
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const members = await getMembers();
let usingGrid = false;

gridButton.addEventListener("click", () => {
    displayMembers(true);
});

listButton.addEventListener("click", () => {
    displayMembers(false);
});

displayMembers(true);

function displayMembers(useGrid) {
    if ((usingGrid && !useGrid) || (!usingGrid && useGrid)) {
        usingGrid = !usingGrid;
        membershipArea.innerHTML = "";

        membershipArea.classList.toggle("grid");
        membershipArea.classList.toggle("list");

        let useStripe = true;

        for (const member of members) {
            const section = document.createElement("section");

            if (!useGrid) {
                section.classList.add("line");

                if (useStripe) {
                    section.classList.add("stripe");
                }

                useStripe = !useStripe;

                section.innerHTML =
                    `<p>${member.name}</p>
                    <p>${member.address}<br>
                    ${member.city}</p>
                    <p>${member.phone}</p>
                    <p><a href="https://${member.url}" target="_blank">${member.url}</a></p>`;
            }
            else {
                section.classList.add("card");

                section.innerHTML =
                    `<h2>${member.name}</h2>
                    <img src="${member.imageFileName}" alt="${member.imageText}" width="80" height="80">
                    <div>
                    <span class="underline emphasize">Address</span>
                    <p>${member.address}<br>${member.city}</p>
                    <p><span class="emphasize">Phone:</span> ${member.phone}</p>
                    <p>
                    <span class="emphasize">URL:</span>
                    <a href="https://${member.url}"target="_blank">${member.url}</a>
                    </p>
                    </div>`;
            }

            membershipArea.appendChild(section);
        }
    }
}