// This is the code to handle the form 
// and stuff

const firstName = document.querySelector('input[name="fname"]');
const lastName = document.querySelector('input[name="lname"]');
const hotelLocation = document.querySelector('input[name=hotellocation]');
const phone= document.querySelector('input[name=tel]');
const email = document.querySelector('input[name=email]');
const country = document.querySelector('input[name=country]');
const numberRooms = document.querySelector('input[name=numberofrooms]');
const homeState = document.querySelector('input[name=homestate]');

// the accepted characters are: any Latin Character, hyphens and white spaces
const latinCharacter = /([\w])/;
const spaceCharacter = /([\s])/;
const hyphenCharacter = /([-])/;
const alphaCharacters = /[A-aZ-z]/; 
const numberCharacters = /[0-9]/;
const permittedCharacters = /([0-9])|([^A-aZ-z\s-])/;
const avoidSymbols = /[\*\"\!\#\$\%\&\/\(\)\=\?\'\"\+\.\,\:\;0-9]/;


firstName.addEventListener("focusout", checkSpelling);
lastName.addEventListener("focusout", checkSpelling);
hotelLocation.addEventListener("focusout", checkSpelling);
phone.addEventListener("focusout", checkSpelling);
email.addEventListener("focusout", checkSpelling);
country.addEventListener("focusout", checkSpelling);
numberRooms.addEventListener("focusout", checkSpelling);
homeState.addEventListener("focusout", checkSpelling);





function checkSpelling () {
    // conditional for the matches of the business input box
    let warningMessage = document.querySelector(".warning-box");
    if (this.value.length === 0){
        document.querySelector(".warning-box").style.display = "none";
        this.style.backgroundColor = 'white';   
    }
    else{
        document.querySelector(".warning-box").style.display = "none";
        this.style.backgroundColor = 'lightGREEN';
        this.style.borderLeft= '5px solid green';   
    }
}

// down here the script for the hidden input
var thisDay = new Date();
var dd = thisDay.getDate();
var mm = thisDay.getMonth() + 1;
var yyyy = thisDay.getFullYear();

document.querySelector("#daySubmitted").value = dd + "/" + mm + "/" + yyyy;




