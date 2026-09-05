const copyright = document.querySelector(".copyright");
const lastModified = document.querySelector(".last-modified");

copyright.innerHTML = `© ${new Date().getFullYear()}`;
lastModified.innerHTML = document.lastModified;