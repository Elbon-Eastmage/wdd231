export async function getMembers() {
    const data = await fetch("https://elbon-eastmage.github.io/wdd231/chamber/data/members.json");
    const members = await data.json();
    return members.companies;
}