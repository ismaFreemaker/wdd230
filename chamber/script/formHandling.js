// This is the code to handle the form 
// and stuff

const businessPosition = document.querySelector('input[name="busposition"]');


// the accepted characters are: any Latin Character, hyphens and white spaces
const latinCharacter = /([\w])/;
const spaceCharacter = /([\s])/;
const hyphenCharacter = /([-])/;
const alphaCharacters = /[A-aZ-z]/; 
const numberCharacters = /[0-9]/;
const permittedCharacters = /([0-9])|([^A-aZ-z\s-])/;
const avoidSymbols = /[\*\"\!\#\$\%\&\/\(\)\=\?\'\"\+\.\,\:\;0-9]/;

businessPosition.addEventListener("focusout", checkJob);

const re = new RegExp();

function checkCharacter(){

}


function checkJob () {
    // conditional for the matches of the business input box
    let warningMessage = document.querySelector(".warning-box");
    if (businessPosition.value.length === 0){
        document.querySelector(".warning-box").style.display = "none";
        businessPosition.style.backgroundColor = 'white';   
    }
    else if (businessPosition.value.match(permittedCharacters) ){
        businessPosition.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        warningMessage.textContent = "Only alpha characters, spaces and '-' allowed. Not numbers or other symbols";
        warningMessage.style.display = "block";

    }else if ((businessPosition.value.length <= 7)){
        businessPosition.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        warningMessage.textContent = "The filed must be at least 7 characters.";
        warningMessage.style.display = "block";
    }else{
        document.querySelector(".warning-box").style.display = "none";
        businessPosition.style.backgroundColor = 'white';   
    }
}

// down here the script for the hidden input
var thisDay = new Date();
var dd = thisDay.getDate();
var mm = thisDay.getMonth() + 1;
var yyyy = thisDay.getFullYear();

document.querySelector("#daySubmitted").value = dd + "/" + mm + "/" + yyyy;




