
let lastModificationHeader = document.querySelector(".currentDate");

let entireDate = new Date();
let dayNumber = entireDate.getDay();

let dayName = null; 
switch(dayNumber){
    
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 0:
        dayName = "Sunday";
        break;
}
let monthNumber = entireDate.getMonth();
let monthNu = null;
switch(monthNumber){

    case 0:
        monthName = "January";
        break;
    case 1:
        monthName = "February";
        break;
    case 2:
        monthName = "March";
        break;
    case 3:
        monthName = "April";
        break;
    case 4:
        monthName = "May";
        break;
    case 5:
        monthName = "June";
        break;
    case 6:
        monthName = "July";
        break;
    case 7:
        monthName = "August";
        break;
    case 8:
        monthName = "September";
        break;
    case 9:
        monthName = "October";
        break;
    case 10:
        monthName = "November";
        break;
    case 11:
        monthName = "December";
        break;

}

// let monthName= entireDate.getMonth();
// let d = ;
let thisYear = entireDate.getFullYear();
lastModificationHeader.textContent = `${dayName}, ${monthName} ${entireDate.getDate()}, ${thisYear}`;



let meetingBoxAdvice = document.querySelector("#meeting-box-advice");
if (dayName == "Monday" || dayName == "Tuesday"){
    meetingBoxAdvice.innerHTML = "There will be a meeting on 21st Thursday";
    meetingBoxAdvice.classList.toggle("dayDisplay");
}
// "Current Date: " + dayName + ", " + monthName + " " + d.getDate() +", " + year;