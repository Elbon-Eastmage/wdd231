const info = new URLSearchParams(window.location.search);
const div = document.querySelector("div");
const membership = info.get("membership");
const timestamp = new Date(info.get("timestamp"));
let rank = "";

switch (membership) {
    case "np":
        rank = "Nonprofit";
        break;
    case "bronze":
        rank = "Bronze";
        break;
    case "silver":
        rank = "Silver";
        break;
    case "gold":
        rank = "Gold";
        break;
}

div.innerHTML = `
    <div>
    <p class="description">Title: ${info.get("title")}</p>
    <p class="description">First Name: ${info.get("first-name")}</p>
    <p class="description">Last Name: ${info.get("last-name")}</p>
    <p class="description">Email: ${info.get("user-email")}</p>
    <p class="description">Phone Number: ${info.get("user-phone")}</p>
    <p class="description">Organization Name: ${info.get("company-name")}</p>
    <p class="description">Membership Level: ${rank} Rank</p>
    <p class="description">Form Accessed at ${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}</p>
    </div>`;