const requestUrl = "https://ismafreemaker.github.io/wdd230/chamber/data.json";
const cards = document.querySelector(".cards");

async function getEnterprises(){
    let response = await fetch(requestUrl);
    if (response.ok){
        let data = await response.json();
        builtEnterpriseCard(data);
    }  else{
        throw Error(response.statusText);
    } 
}

function builtEnterpriseCard(data){
    data.enterprises.forEach(enterprise => {
        let card = document.createElement('section');        
        let h3Name = document.createElement('h3');        
        let brand = document.createElement('img');        
        let pAddress = document.createElement('p');        
        let pPhoneNumber = document.createElement('p');        
        let website = document.createElement('a');   
        let membershipLevel = document.createElement('p');


        h3Name.textContent = `${enterprise.name}`;
        brand.setAttribute('src', `${enterprise.imagelink}`);
        brand.setAttribute('alt', `${enterprise.name} logo`);
        brand.setAttribute('loading', 'lazy');
        pAddress.textContent = `${enterprise.address}`;
        pPhoneNumber.textContent = `${enterprise.phonenumber}`;
        website.textContent = `${enterprise.website}`;
        website.setAttribute('href', `${enterprise.website}`);
        membershipLevel.textContent = `${enterprise.membershiplevel} Membership`;        

        if (enterprise.membershiplevel === "Gold"){
            membershipLevel.classList.add("gold-membership-level");
        }else if(enterprise.membershiplevel === "Silver"){
            membershipLevel.classList.add("silver-membership-level");
        }else if(enterprise.membershiplevel === "Bronze"){
            membershipLevel.classList.add("bronze-membership-level");
        }
        card.classList.add('enterprise-box-style');

        card.append(h3Name);
        card.append(brand);
        card.append(pAddress);
        card.append(pPhoneNumber);
        card.append(website);
        card.append(membershipLevel);

        cards.append(card);
    });
}

getEnterprises();

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










