// select the HTML elements to work with the API's
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = `https://api.openweathermap.org//data/2.5/weather?q=Fairbanks&units=imperial&appid=e01b7c091c6bb04f4c02d5241f7fdb95`;

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
;        }
    } catch (error) {
        console.log(error);
    }    
}

apiFetch();


function displayResults(weatherdata){
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;

    
    const icon = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].main;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;


}



