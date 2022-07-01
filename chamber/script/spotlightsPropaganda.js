const requestUrl = "https://ismafreemaker.github.io/wdd230/chamber/data.json";
const spotlightContainer = document.querySelector('.spotlights-container');

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
    

    console.log(data.enterprises[0].name);
    const randomEnterprises = [];
    for (let i = 0; i < 3; i++){ //this loop is for the random enterprises
        let randomElementNumber = getRandomInt(data.enterprises.length);
        if(randomEnterprises.includes(randomElementNumber) === false){
            randomEnterprises.push(data.enterprises[randomElementNumber]);

        }
        
    }
    console.log(randomEnterprises);


    randomEnterprises.forEach(enterprise => {
        let card = document.createElement('section');        
        let h3Name = document.createElement('h3');        
        let brand = document.createElement('img');        
        let pAddress = document.createElement('p');        
        let pPhoneNumber = document.createElement('p');        
        let website = document.createElement('a');   
        let membershipLevel = document.createElement('p');
        let propagandaEnterprise = document.createElement('b');

        
        h3Name.textContent = `${enterprise.name}`;
        brand.setAttribute('src', `${enterprise.imagelink}`);
        brand.setAttribute('alt', `${enterprise.name} logo`);
        brand.setAttribute('loading', 'lazy');
        pAddress.textContent = `${enterprise.address}`;
        pPhoneNumber.textContent = `${enterprise.phonenumber}`;
        website.textContent = `${enterprise.website}`;
        website.setAttribute('href', `${enterprise.website}`);
        propagandaEnterprise.textContent = `${enterprise.propaganda}`
        propagandaEnterprise.style.textAlign = "center";
        
        // membershipLevel.textContent = `${enterprise.membershiplevel} Membership`;        

        // if (enterprise.membershiplevel === "Gold"){
        //     membershipLevel.classList.add("gold-membership-level");
        // }else if(enterprise.membershiplevel === "Silver"){
        //     membershipLevel.classList.add("silver-membership-level");
        // }else if(enterprise.membershiplevel === "Bronze"){
        //     membershipLevel.classList.add("bronze-membership-level");
        // }
        
        card.classList.add('enterprise-box-style');
        
        if (randomEnterprises[0]){
            card.classList.add("spotlight1-json");
        }
        else if (randomEnterprises[1]){
            card.classList.add("spotlight2-json");
        }
        else if (randomEnterprises[2]){
            card.classList.add("spotlight3-json");
            
        }
        
        card.append(h3Name);
        card.append(brand);
        card.append(propagandaEnterprise);
        card.append(pAddress);
        card.append(pPhoneNumber);
        card.append(website);
        card.append(membershipLevel);

        spotlightContainer.append(card);
    });
    
    
    // const spotlightOne = document.querySelector(".spotlight-1");
    // const spotlightOneHeading = document.querySelector(".spotlight1-heading");
    // const spotlightOneImageContainer = document.querySelector(".spotlight1-image-container");
    // const spotlightOneImage = document.createElement("img");
    // const spotlightOneInfo = document.querySelector(".spotlight1-info");
    
    // const spotlightTwo = document.querySelector(".spotlight-2");
    // const spotlightTwoHeading = document.querySelector(".spotlight2-heading");
    // const spotlightTwoImage = document.querySelector(".spotlight-2-image");
    
    
    // const spotlightThree = document.querySelector(".spotlight-3");
    // const spotlightThreeHeading = document.querySelector(".spotlight3-heading");
    // const spotlightThreeImage = document.querySelector(".spotlight-3-image");
    
    // const enterprise = data.enterprises;
    // spotlightOneHeading.textContent = `${data.enterprises[0].name}`;
    // spotlightOneImage.setAttribute('src', `${data.enterprises[0].imagelink}`);
    // spotlightOneImage.setAttribute('alt', `${data.enterprises[0].name} logo`);
    // spotlightOneImageContainer.appendChild(spotlightOneImage);
    // spotlightOneInfo.innerHTML = `${enterprise[0].propaganda}<br>${enterprise[0].phonenumber}<br>${enterprise[0].website}`;


}


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

publicEnterprises();
