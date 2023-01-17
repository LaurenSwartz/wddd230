let dayname =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
];
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let d = new Date();
let dayName= dayname[d.getDay()];
let monthName = month[d.getMonth()];
let fulldate = dayName + ", " + monthName + ", " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").textContent= fulldate;

const copyright = document.querySelector('#copyright');
copyright. textContent = `©️ ${new Date().getFullYear()}`;






