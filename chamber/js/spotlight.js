function createSpotlight(business){
    let busSection = document.createElement("section");
    let img = document.createElement("img");
    let title = document.createElement("h3");

    let address = document.createElement("a");
    let addressIcon = document.createElement("i");
    let addressText = document.createElement("p");

    let phone = document.createElement("a");
    let phoneIcon = document.createElement("i");
    let phoneText = document.createElement("p");

    let web = document.createElement("a");
    let webIcon = document.createElement("i");
    let webText = document.createElement("p");

    img.setAttribute('src', business["logo"]);
    img.setAttribute('alt', `${business["title"]} Logo`);

    title.innerText = business["title"];

    address.setAttribute('href', convertAddressToMapURL(business["address"]));
    addressIcon.setAttribute("class", "fa-solid fa-map-location-dot");
    addressText.innerText = business["address"];
    address.appendChild(addressIcon);
    address.appendChild(addressText);

    phone.setAttribute('href', `tel:+1-${business["phone"]}`)
    phoneIcon.setAttribute("class", "fa-solid fa-phone");
    phoneText.innerText = business["phone"];
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneText);

    web.setAttribute('href', business["website"]);
    webIcon.setAttribute("class", "fa-solid fa-globe");
    webText.innerText = "Website";
    web.appendChild(webIcon);
    web.appendChild(webText);
    

    busSection.appendChild(img);
    busSection.appendChild(title);
    busSection.appendChild(address);
    busSection.appendChild(phone);
    busSection.appendChild(web);

    return busSection;
}

function convertAddressToMapURL(address){
    return `https://bing.com/maps/default.aspx?rtp=~adr.${address.replaceAll(" ", "%20")}`;
}

const spotlightContainer = document.getElementById("spotlightSection");
let selectedItems = [];

fetch("data/data.json").then((response) => response.json())
.then((jsObject) => {
    const businesses = jsObject["businesses"];

    while(selectedItems.length < 3){
        
        randomNumber = Math.floor(Math.random() * businesses.length);
        console.log(`Random Number: ${randomNumber}`);
        if (!selectedItems.includes(randomNumber))
            selectedItems.push(randomNumber);
    }

    while(selectedItems.length > 0){
        spotlightContainer.appendChild(createSpotlight(businesses[selectedItems.pop()]));
    }

});