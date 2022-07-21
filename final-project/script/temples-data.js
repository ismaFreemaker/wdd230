// *************************************************************************
// *******************down here the sript for the temples *****************


const requestUrl = "temples.json";
const cards = document.querySelector(".cards");



let thumbsList = [];
let arrowDownButton = [];

async function getTemples(){
    let response = await fetch(requestUrl);
    if (response.ok){
        let data = await response.json();
        builtTemplesCard(data);
        // console.log(data);
    }  else{
        throw Error(response.statusText);
    } 
}
// console.log(thumbsList);

function builtTemplesCard(data){
    let thumbContainer = ""; 
    
    let i = 0;
    data.temples.forEach(temple => {
        let card = document.createElement('section');        
        let h3Name = document.createElement('h3');        
        let templeImage = document.createElement('img');        
        let pAddress = document.createElement('p');        
        let pPhoneNumber = document.createElement('p');        
        let templeLink = document.createElement('a');
        thumbContainer = document.createElement("div");   
        let thumbUpIcon = document.createElement('i');

        let displayButton = document.createElement("button");
        displayButton.classList.add("templeButton");
        displayButton.classList.add("fa");
        displayButton.classList.add(`fa-caret-down`);
        displayButton.classList.add(`num-${i}`);


        let templeInfo = document.createElement('div')
        templeInfo.classList.add("temple-info");
        templeInfo.classList.add(`number-${i}`);
        templeInfo.innerHTML = 
        `
        <h4>History</h4>
        <p>
            <b>Announced:</b> ${temple.history[0].announced}<br>
            <b>Groundbreaking:</b> ${temple.history[0].groundbreaking}<br>
            <b>Dedicated:</b> ${temple.history[0].dedicated}<br>        
        </p>
        <h4>Session Schedules</h4>
        <p>
            <b>Endowments:</b> ${temple.sessionschedules[0].endowment}<br> 
            <b>Sealings</b> ${temple.sessionschedules[0].sealings}<br>
            <b>Baptistery:</b> ${temple.sessionschedules[0].baptistery}<br>
        </p>
        <h4>Temple Closure Schedule</h4>
        <p>
            <b>2022:</b><br> 
            ${temple.templeclosureschedule[0]}<br>
            ${temple.templeclosureschedule[1]}<br>
            ${temple.templeclosureschedule[2]}<br>
        </p>
        <h4>Temple Services</h4>
        <p>
            ${temple.templeservices[0]}<br>
            ${temple.templeservices[1]}<br>
            ${temple.templeservices[2]}<br>
            ${temple.templeservices[3]}<br>
        </p>
        `;
           

        templeImage.setAttribute('src', `${temple.imagelink}`);
        templeImage.setAttribute('alt', `${temple.place} logo`);
        templeImage.setAttribute('loading', 'lazy');
        h3Name.textContent = `${temple.place}`;
        pAddress.textContent = `${temple.address}`;
        pPhoneNumber.textContent = `${temple.telephonenumber}`;
        templeLink.textContent = `visit temple site`;
        templeLink.setAttribute('href', `${temple.templelink}`);
        templeLink.setAttribute('target', `blank`);
        thumbUpIcon.classList.add("fa");
        thumbUpIcon.classList.add(`fa-thumbs-up`);
        
        
        
        thumbContainer.appendChild(thumbUpIcon);
        thumbContainer.classList.add('thumb-box');
        thumbContainer.classList.add(`thumb-container-${i}`);
        thumbsList.push(thumbContainer);

        arrowDownButton.push(displayButton);
        
        card.append(templeImage);
        card.append(h3Name);
        card.append(pAddress);
        card.append(pPhoneNumber);
        card.append(templeLink);
        card.append(thumbContainer);
        card.append(displayButton);
        card.append(templeInfo);
        // card.append(membershipLevel);
        
        cards.append(card);
        
        i++;
    });
    // this loop is for all the temple thumbs
    let thumbBox;
    for (let i = 0; i < thumbsList.length; i++){
        thumbBox = document.querySelector(`div.thumb-container-${i}`);
        thumbBox.onclick = checkingThumb;
           
        
        function checkingThumb(){
            document.querySelector(`div.thumb-container-${i}`).classList.toggle("check");
            if(document.querySelector(`div.thumb-container-${i}`).classList.contains('check')){
                localStorage.setItem(`check${i}`, `yes`);
            }else{

            }
        }
    
        let templedisplayButton = document.querySelector(`.num-${i}`);
        function displayTempleInfo(){
            document.querySelector(`.number-${i}`).classList.toggle('open')
        }
        templedisplayButton.onclick = displayTempleInfo;
    }

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










