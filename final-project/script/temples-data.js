const requestUrl = "temples.json";
const cards = document.querySelector(".cards");

async function getTemples(){
    let response = await fetch(requestUrl);
    if (response.ok){
        let data = await response.json();
        builtTemplesCard(data);
        console.log(data);
    }  else{
        throw Error(response.statusText);
    } 
}

function builtTemplesCard(data){
    data.temples.forEach(temple => {
        let card = document.createElement('section');        
        let h3Name = document.createElement('h3');        
        let templeImage = document.createElement('img');        
        let pAddress = document.createElement('p');        
        let pPhoneNumber = document.createElement('p');        
        let templeLink = document.createElement('a');   
        let thumbUpIcon = document.createElement('i');   

        templeImage.setAttribute('src', `${temple.imagelink}`);
        templeImage.setAttribute('alt', `${temple.place} logo`);
        templeImage.setAttribute('loading', 'lazy');
        h3Name.textContent = `${temple.place}`;
        pAddress.textContent = `${temple.address}`;
        pPhoneNumber.textContent = `${temple.phonenumber}`;
        templeLink.textContent = `see more...`;
        templeLink.setAttribute('href', `${temple.templelink}`);
        templeLink.setAttribute('target', `blank`);
        thumbUpIcon.classList.add("fa");
        thumbUpIcon.classList.add("fa-thumbs-up");


        card.append(templeImage);
        card.append(h3Name);
        card.append(pAddress);
        card.append(pPhoneNumber);
        card.append(templeLink);
        card.append(thumbUpIcon);
        // card.append(membershipLevel);

        cards.append(card);
    });
}

getTemples();

// making the code for the cards view

// let gridButton = document.querySelector('#grid-button');
// let listButton = document.querySelector('#list-button');

// gridButton.addEventListener("click", () =>{
//     cards.classList.add('grid');
//     cards.classList.remove('list');
//     gridButton.classList.add("active-button");
//     listButton.classList.remove("active-button");
// });

// listButton.addEventListener("click", () => {
//     cards.classList.add("list");
//     cards.classList.remove("grid");
//     gridButton.classList.remove("active-button");
//     listButton.classList.add("active-button");

// });










