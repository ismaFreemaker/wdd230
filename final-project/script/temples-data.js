const requestUrl = "https://ismafreemaker.github.io/wdd230/final-project/temples.json";
const cards = document.querySelector(".cards");

async function getTemples(){
    let response = await fetch(requestUrl);
    if (response.ok){
        let data = await response.json();
        builtTemplesCard(data);
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
        // let membershipLevel = document.createElement('p');


        h3Name.textContent = `${temple.name}`;
        templeImage.setAttribute('src', `${temple.imagelink}`);
        templeImage.setAttribute('alt', `${temple.name} logo`);
        templeImage.setAttribute('loading', 'lazy');
        pAddress.textContent = `${temple.address}`;
        pPhoneNumber.textContent = `${temple.phonenumber}`;
        templeLink.textContent = `${temple.website}`;
        templeLink.setAttribute('href', `${temple.website}`);
        membershipLevel.textContent = `${temple.membershiplevel} Membership`;        

        card.append(h3Name);
        card.append(templeImage);
        card.append(pAddress);
        card.append(pPhoneNumber);
        card.append(templeLink);
        card.append(membershipLevel);

        cards.append(card);
    });
}

getTemples();

// making the code for the cards view

let gridButton = document.querySelector('#grid-button');
let listButton = document.querySelector('#list-button');

gridButton.addEventListener("click", () =>{
    cards.classList.add('grid');
    cards.classList.remove('list');
    gridButton.classList.add("active-button");
    listButton.classList.remove("active-button");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
    gridButton.classList.remove("active-button");
    listButton.classList.add("active-button");

});










