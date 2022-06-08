const todayDislplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem('visits-ls'));

// Determine if this is the first visit or display the number of visits
if (numVisits !== 0){
    visitDisplay.textContent = numVisits;
}else{
    visitDisplay.textContent = "This is your first visit!";
}

// increment the number of visits
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date
todayDislplay.textContent = new Date(Date.now());

