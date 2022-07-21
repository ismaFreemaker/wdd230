
//this is the javascript file where we can calculate the windchill

// let lastModificationHeader = document.querySelector(".currentDate");

let entireDate = new Date();

let dayNumber = entireDate.getDay();
let dayName = null; 
gettingDay(dayNumber);
function gettingDay(dayNum){
    switch(dayNum){
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
    return dayName;
    
}

let monthNumber = entireDate.getMonth();
let monthName = null;
gettingMonth(monthNumber);

function gettingMonth(monthNum){    
    switch(monthNum){     
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
    return monthName;
}
                
// let monthName= entireDate.getMonth();
// let d = ;



// let meetingBoxAdvice = document.querySelector("#meeting-box-advice");
// if (dayName == "Monday" || dayName == "Tuesday"){
//     meetingBoxAdvice.innerHTML = "There will be a meeting on 21st Thursday";
//     meetingBoxAdvice.classList.toggle("dayDisplay");
// }
// "Current Date: " + dayName + ", " + monthName + " " + d.getDate() +", " + year;

const mainUrl = `https://api.openweathermap.org//data/2.5/weather?q=Lujan&units=metric&appid=e01b7c091c6bb04f4c02d5241f7fdb95`;
const secondUrl = `https://api.openweathermap.org//data/2.5/forecast?q=Lujan&units=metric&appid=e01b7c091c6bb04f4c02d5241f7fdb95`;
const thirdUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=-34.5703&lon=-59.105&except=hourly&units=metric&appid=fa4de36ea4317378726b65a1eab16bfe`;

let currentTemp = document.querySelector("#current-temperature");
let windVelocityBox = document.querySelector(".windVelocity");
let windChill = document.querySelector(".windChill");
let humidity = document.querySelector('.humidity');
let weatherIcon = document.querySelector("#weather-icon");
let figcaption = document.querySelector('#fig-caption');

let weathersSection = document.querySelector('.three-days-temperature-forecast');
let weatherAlert = document.querySelector(".weather-alert");

// the temperature has to be <=50°F(10C°)  and  >3.0mph(4.82803 km/h)

// let result = null; // initializing the final result variable

// initializing variables to be more usable in the formula. 
 

// this is the formula 
function calculateWindChill(windVelocity, temperature){

    return (35.74 + (0.6215 * temperature) - (35.75 * (windVelocity**0.16)) + (0.4275 * temperature * (windVelocity**0.16)));
}

//appending the result in the windChill as content of teh span

async function apiFetch(){
    try {
        const response = await fetch(thirdUrl);
        const response2 = await fetch(secondUrl);
        const response3 = await fetch(thirdUrl);
        if (response.ok){
            const data = await response.json();
            const data2 = await response2.json();
            const data3 = await response3.json();
            // console.log(data);
            displayResults(data);
            displayWeathers(data2);
            checkAndDisplayAlert(data3);
            // console.log(data2);
            console.log(data3);

        }else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    
}
    
apiFetch();
    
    
function displayResults(weatherdata){

    currentTemp.innerHTML = ``;
    currentTemp.innerHTML = `<strong>${weatherdata.current.temp.toFixed(0)}</strong>`;
    
    const windSpeed = parseFloat(weatherdata.current.wind_speed);
    const currentTemperature = parseFloat(weatherdata.current.temp);
    
    
    let windChillFactor= calculateWindChill(windSpeed, currentTemperature)
    let result = null;
    // conditional for the result
    if (currentTemperature <= 10 && windSpeed > 4.828){
        result = `${windChillFactor.toFixed(2)} °C`;
    }else{
        result = "N/A"; 
    }
    // console.log(weatherdata)
    const icon = `https://openweathermap.org/img/w/${weatherdata.current.weather[0].icon}.png`;
    const description = weatherdata.current.weather[0].main;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);

    windVelocityBox.textContent = windSpeed;
    figcaption.textContent = description;
    windChill.textContent = result;
    humidity.textContent = `${weatherdata.current.humidity}%`;
}


function displayWeathers(weatherdata){
    for(let i = 0; i < 40; i++){ //loop for the weather days
        if (i===1 || i === 9 || i === 17){
            // creating the elements of the weather boxes
            const dayBox = document.createElement('div');
            const dayHeading = document.createElement('h2');
            const dayForecastTemperatureData = document.createElement("p");
            const dayForecasImage = document.createElement("img");
            
            // This is the day of the weather box
            dayHeading.textContent = `${gettingDay(new Date(weatherdata.list[i].dt_txt).getDay())}`;

            // this are the weather conditions. 
            // weather temperature and status in the next 24 hours as well as the icon
            dayForecastTemperatureData.innerHTML = `${weatherdata.list[i].weather[0].main} <br> ${weatherdata.list[i].main.temp.toFixed(0)}°C`;
            dayForecasImage.setAttribute('src', `https://openweathermap.org/img/w/${weatherdata.list[i].weather[0].icon}.png`);
            dayForecasImage.setAttribute('alt', `${weatherdata.list[i].main}`);

            // appending the created elements to each weather box 
            dayBox.appendChild(dayHeading);
            dayBox.appendChild(dayForecastTemperatureData);
            dayBox.appendChild(dayForecasImage);
            dayBox.classList.add("weather-boxes");

            // appending the weather box in the container of the weather boxes 
            
            weathersSection.appendChild(dayBox);

        }
        
    }   
}

function checkAndDisplayAlert(data){
    if (data.alerts){
        weatherAlert.style.display = "block";
        weatherAlert.textContent = `Weather Alert: ${data.alerts.event}; starts: ${data.alerts.start}, ends: ${data.alerts.end}`;
        weatherAlert.style.backgroundColor = "red";
        weatherAlert.style.color = "white";
        
    }else{
        weatherAlert.style.display = "none";
    }
}
