let nLastModified = new Date(document.lastModified);

let day = nLastModified.getDate();
let month = nLastModified.getMonth();
let year = nLastModified.getFullYear();
let hour = nLastModified.getHours();
let minutes = nLastModified.getMinutes();
let seconds = nLastModified.getSeconds();

let updatedDateParagraphSpan = document.querySelector(".last-update");

updatedDateParagraphSpan.textContent = `The last day that was modified was: ${day}/${month}/${year}  ${hour}:${minutes}:${seconds}`;
// updatedDateParagraphSpan.textContent = `${nLastModified}`;

let copyrightParagraph = document.querySelector("#copyright-parag");
copyrightParagraph.innerHTML = `&copy 2022 - R. Ismael Rojas - Argentina`;



