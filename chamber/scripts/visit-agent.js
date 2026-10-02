const storageName = "visited";
const millisecondsInADay = 86400000;
const welcomeMessage = document.querySelector("#welcome-message");

const currentTime = Date.now();
let lastTimeVisited = localStorage.getItem(storageName);

if (lastTimeVisited == null) {
    welcomeMessage.innerHTML = `Welcome! Let us know if you have any questions.`;
}
else {
    const passedTime = currentTime - lastTimeVisited;
    
    if (passedTime < millisecondsInADay) {
        welcomeMessage.innerHTML = `Back so soon! Awesome!`;
    }
    else {
        const days = Math.floor(passedTime / millisecondsInADay);
        
        if (days > 1) {
            welcomeMessage.innerHTML = `You last visited ${days} days ago.`;
        }
        else {
            welcomeMessage.innerHTML = `You last visited ${days} day ago.`;
        }
    }
}

localStorage.setItem(storageName, currentTime);