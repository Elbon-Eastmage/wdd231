const storageName = `customQuotes`;

const input = new URLSearchParams(window.location.search);
const text = input.get(`quote-text`);
const author = input.get(`quote-author`);

const collection = document.querySelector(`.collection`);
let quotes = loadQuotes();

saveQuote(text, author);
displayQuotes();


function loadQuotes() {
    let quotes = localStorage.getItem(storageName) || [];

    if (quotes.length == 0) {
        return quotes;
    }
    else {
        return JSON.parse(quotes);
    }

}

function saveQuote(text, author) {
    if (text != null && author != null) {
        if (!quotes.some((quote) => quote.text == text)) {
            quotes.push({ text: `${text}`, author: `${author}` });
            localStorage.setItem(storageName, JSON.stringify(quotes));
        }
    }
}

function displayQuotes() {
    collection.innerHTML = ``;

    quotes.forEach((quote) => {
        const paragraph = document.createElement(`p`);
        paragraph.classList.add(`card`);
        paragraph.textContent = `${quote.text} - ${quote.author}`;
        collection.appendChild(paragraph);
    });
}