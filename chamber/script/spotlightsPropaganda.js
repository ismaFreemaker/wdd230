const requestUrl = "https://ismafreemaker.github.io/wdd230/chamber/data.json";

async function publicEnterprises(){
    let response = await fetch(requestUrl);
    if (response.ok){
        let data = await response.json();
        putEnterprisesInSpotligths(data);
    }  else{
        throw Error(response.statusText);
    } 
}

function putEnterprisesInSpotligths(data){
    const spotlightOne = document.querySelector(".spotlight-1");
    const spotlightOneHeading = document.querySelector(".spotlight1-heading");
    const spotlightOneImageContainer = document.querySelector(".spotlight1-image-container");
    const spotlightOneImage = document.createElement("img");
    const spotlightOneInfo = document.querySelector(".spotlight1-info");
    
    const spotlightTwo = document.querySelector(".spotlight-2");
    const spotlightTwoHeading = document.querySelector(".spotlight2-heading");
    const spotlightTwoImage = document.querySelector(".spotlight-2-image");
    
    
    const spotlightThree = document.querySelector(".spotlight-3");
    const spotlightThreeHeading = document.querySelector(".spotlight3-heading");
    const spotlightThreeImage = document.querySelector(".spotlight-3-image");

    console.log(data.enterprises[0].name);
    const randomEnterprises = [];

    for (let i = 0; i < 3; i++){
        let randomElementNumber = getRandomInt(data.enterprises.length);
        // randomEnterprises.push(randomElementNumber);
    }
    const enterprise = data.enterprises;
    spotlightOneHeading.textContent = `${data.enterprises[0].name}`;
    spotlightOneImage.setAttribute('src', `${data.enterprises[0].imagelink}`);
    spotlightOneImage.setAttribute('alt', `${data.enterprises[0].name} logo`);
    spotlightOneImageContainer.appendChild(spotlightOneImage);
    spotlightOneInfo.innerHTML = `${enterprise[0].propaganda}<br>${enterprise[0].phonenumber}<br>${enterprise[0].website}`;
    console.log(randomEnterprises);

    


}


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

publicEnterprises();
