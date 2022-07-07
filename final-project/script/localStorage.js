const todayDislplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");
const daysPassed = document.querySelector(".days-passed");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem('visits-ls'));
let startDayVisit = Number(window.localStorage.getItem("last-visit"));
let endDayVisit = Number(window.localStorage.getItem('first-visit'));

// Determine if this is the first visit or display the number of visits
if (numVisits !== 0){
    visitDisplay.textContent = numVisits;
}else{
    visitDisplay.textContent = "This is your first visit!";
}

// increment the number of visits
numVisits++;

// setting the today's day visit
endDayVisit = Date.now();



// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// store the last date visited 
localStorage.setItem('last-visit', endDayVisit);

// converting the start and end dates to a date from the large date display in oreder to tell the user about how many days she/he hasn't come the the discover page. 
endDayVisit = new Date(endDayVisit).getDate();
startDayVisit = new Date(startDayVisit).getDate();

// setting a variable that gives the space of time between the last visit. 
let timePassed = endDayVisit - startDayVisit;

// displaying the result to the page about how many days passed
daysPassed.innerHTML = `Days since your last visit: ${((timePassed))}`; // Showing in the console the number of minutes or whatever

// setting the item of the start visit in the local storage
localStorage.setItem('first-visit', startDayVisit);
startDayVisit = endDayVisit;


