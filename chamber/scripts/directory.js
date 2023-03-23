const requestURL ='https://raw.githubusercontent.com/LaurenSwartz/wdd230/main/chamber/directory.json';
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
async function getDirectoryData(url){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayDirectory(data.business);
}

getDirectoryData(url);

const displayDirectory = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        // create elements to add to the div.cards element
        let portrait = document.createElement('img');
        let h2 = document.createElement('section');
        let h3 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let a = document.createElement('a');
        

        // Build the h2 content out to show the prophets full name - finish the template string
        h2.textContent =` ${business.companyname}`;
        h3.textContent =`${business.phoneNumber}`;
        p.textContent =`${business.address}`;
        a.textContent =`${business.url}`;
        a.setAttribute(`href`, `${business.url}`)

        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src',business.imageurl);
        portrait.setAttribute('alt', `${business.companyname}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');

        //Append the section (card) with the created elements
        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(a);
        
        cards.appendChild(card);

        
    });
}