
let nLastModified = new Date(document.lastModified);

let date = nLastModified.getDate();
let month = nLastModified.getMonth();
let year = nLastModified.getFullYear();
let hour = nLastModified.getHours();
let minutes = nLastModified.getMinutes();
let seconds = nLastModified.getSeconds();



// this is the last-modified span for the footer
let updatedDateParagraphSpanFooter = document.querySelector(".lastModificationFooter");
updatedDateParagraphSpanFooter.textContent = `Last modification: ${date}/${month}/${year}  ${hour}:${minutes}:${seconds}`;

// this is the copyright paragraph for the footer. 

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const hamburgerBtn = document.getElementById("hamburgerBtn");
hamburgerBtn.onclick = toggleMenu;



// if (self.innerWidth < 1000){
//     document.querySelector(".hero-image").src = "./images/square-main-hero-picture.jpg";
// }
// else if (window.innerWidth > 1000){
//     document.querySelector(".hero-image").src = "./images/small-hero-picture.jpg";
// }

