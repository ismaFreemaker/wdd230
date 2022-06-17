const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL).then(function (response) {
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);  //temporary checking for valid response and data parsing
    console.log(jsonObject.prophets);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

});



function displayProphets(prophet){
    // creating the necessary things for the card
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    let i = 1;


    // setting the content of the heading2
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // setting the attributes of the 
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${i}th Latter-day President`);
    portrait.setAttribute("loading","lazy");

    // setting the content of the birth date and birth place
    birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
    birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;


    // appending the heading and the portrait to the card, as well as the birthPlace and the birthDate
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    
    // appending the card to the card
    document.querySelector("div.cards").appendChild(card);

    // increasing the number of prophets
    i++;
}

    







// async function getProphets(){
//     let response = await fetch(requestURL);
//     if (response.ok){
//         let data = await response.json();
//         console.log(data);
//         buildProphetsCards(data);
//     }else{
//         throw Error(response.statusText)
//     }
// }

// function buildProphetsCards(data){
//     data.prophets.forEach(prophet => {
//         let card = document.createElement("section");
//         let h2 = document.createElement('h2');
//         let p = document.createElement("p");
//         let img = document.createElement("img");

//         h2.innerHTML = `${prophet.name}`;

//         card.append(h2);

//         cards.append(card);
//     });
// }

// getProphets();
