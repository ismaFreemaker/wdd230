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
        let h2Name = document.createElement('h2');        
        let brand = document.createElement('img');        
        let pAddress = document.createElement('p');        
        let pPhoneNumber = document.createElement('p');        
        let website = document.createElement('a');   
        
        h2Name.textContent = `${enterprise.name}`;
        brand.setAttribute('src', `${enterprise.imagelink}`);
        brand.setAttribute('alt', `${enterprise.name} logo`);
        brand.setAttribute('loading', 'lazy');
        pAddress.textContent = `${enterprise.address}`;
        pPhoneNumber.textContent = `${enterprise.phonenumber}`;
        website.textContent = `${enterprise.website}`;
        website.setAttribute('href', `${enterprise.website}`);
        

        card.append(h2Name);
        card.append(brand);
        card.append(pAddress);
        card.append(pPhoneNumber);
        card.append(website);
        


        cards.append(card);
    });
}

getEnterprises();




















