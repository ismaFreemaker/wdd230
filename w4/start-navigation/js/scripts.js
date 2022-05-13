function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
hamburgerBtn.onclick = toggleMenu;




