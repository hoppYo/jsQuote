


const div = document.createElement("div");
div.classList.add("box");
document.body.appendChild(div);

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

const textParagraph = document.createElement("p");
textParagraph.textContent = "See you soon at the other side where we will discuss events in javascript. May the force be with you.";
textParagraph.classList.add("paragraph");

const openQuote = document.createElement("span");
openQuote.textContent = '"';
openQuote.classList.add("openQuotes");

const closeQuote = document.createElement("span");
closeQuote.textContent = '"';
closeQuote.classList.add("closeQuotes");

const blockQuote = document.createElement("blockquote");
blockQuote.appendChild(openQuote);
blockQuote.appendChild(textParagraph);
blockQuote.appendChild(closeQuote);

div.appendChild(blockQuote);