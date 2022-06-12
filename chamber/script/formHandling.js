// This is the code to handle the form 
// and stuff

const businessPosition = document.querySelector('input[name="busposition"]');


// the accepted characters are: any Latin Character, hyphens and white spaces
const latinCharacter = /([\w])/;
const spaceCharacter = /([\s])/;
const hyphenCharacter = /([-])/;

businessPosition.addEventListener("focusout", checkJob);



function checkJob () {
    // conditional for the matches of the business input box
    if ((businessPosition.value.match(latinCharacter) || businessPosition.value.match(hyphenCharacter) || businessPosition.value.match(spaceCharacter)) && (businessPosition.value.length >= 7)){
        businessPosition.style.backgroundColor = 'green';
    } else {
        businessPosition.style.backgroundColor = 'rgba(200, 0, 0, 0.7)';   

    }
}





