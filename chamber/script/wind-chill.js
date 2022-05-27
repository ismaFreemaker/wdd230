//this is the javascript file where we can calculate the windchill

let temperature = document.querySelector(".temperature").textContent;
temperature = parseFloat(temperature);
console.log(temperature);
let windVelocity = document.querySelector(".windVelocity").textContent;
windVelocity = parseFloat(windVelocity);

let windChill = document.querySelector(".windChill");

// the temperature has to be <=50°F(10C°)  and  >3.0mph(4.82803 km/h)

let result = null; // initializing the final result variable

// initializing variables to be more usable in the formula. 
t = temperature;      
s = windVelocity;   

// this is the formula 
let f = 35.74 + (0.6215 * t) - (35.75 * (s**0.16)) + (0.4275 * t * (s**0.16))


// conditional for the result
if (temperature <= 10 && windVelocity > 4.828){
    result = f.toFixed(2);
}else{
    result = NaN; 
}

//appending the result in the windChill as content of teh span
windChill.textContent = result;


