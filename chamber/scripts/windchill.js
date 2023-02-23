
function calculatewind(){
    temperature = document.querySelector("#tempinput").value;
    windspeed = document.querySelector("#windinput").value;
    windchill = document.querySelector("#windchill")
 if (temperature<=50 && windspeed>3) {
    chill = 35.74 + (0.6215*temperature)-(35.75*Math.pow(windspeed, 0.16)) + 0.4275* temperature * Math.pow(windspeed,0.16)
    console.log(chill)
   windchill.innerHTML = `${chill.toFixed(1)}°`;
 }else {
    windchill.innerHTML = "N/A";
 }
}