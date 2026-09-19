import { getMembers } from "./member-courier.mjs";

const companyArea = document.querySelector("#company-area");
const members = await getMembers();

selectMembers();

function selectMembers() {
    const selectedMembers = [];
    const maxIndex = members.length - 1;

    while (selectedMembers.length < 3) {
        let index = Math.floor(Math.random() * 10);

        if (index > maxIndex) {
            index = maxIndex;
        }

        const member = members[index];

        if (member.membershipLevel > 1 && !selectedMembers.includes(member)) {
            selectedMembers.push(member);
        }
    }

    for (const member of selectedMembers) {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
            `<h3>${member.name}</h3>
            <img src="${member.imageFileName}" alt="${member.imageText}" width="80" height="80">
            <div>
                <span class="underline emphasize">Address</span>
                <p>${member.address}<br>${member.city}</p>
                <p><span class="emphasize">Phone:</span> ${member.phone}</p>
                <p>
                <span class="emphasize">URL:</span>
                <a href="https://${member.url}"target="_blank">${member.url}</a>
                </p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>`;
        
        companyArea.appendChild(div);
    }
}