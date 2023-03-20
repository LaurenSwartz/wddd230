
const thing = document.querySelector("#visit");

let today = new Date();

let lastlogin = window.localStorage.getItem("local");

localStorage.setItem("local", Date.now());

let days = (lastlogin - Date.now()) / 84600000;

thing.innerHTML = Math.ceil(days)*-1;