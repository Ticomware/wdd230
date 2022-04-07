function createSpotlight(temple){
    let section = document.createElement("section");
    let title = document.createElement("h2");
    let img = document.createElement("img");
    let description = document.createElement("p");

    title.innerText = temple["title"];

    img.setAttribute('src', temple["picture"]);
    img.setAttribute('alt', `${temple["title"]}`);

    description.innerText = temple["description"];
    
    section.appendChild(title);
    section.appendChild(img);
    section.appendChild(description);

    return section;
}

function convertAddressToMapURL(address){
    return `https://bing.com/maps/default.aspx?rtp=~adr.${address.replaceAll(" ", "%20")}`;
}

const spotlightContainer = document.getElementById("spotlightSection");

fetch("data/data.json").then((response) => response.json())
.then((jsObject) => {
    const temples = jsObject["temples"];
    randomNumber = Math.floor(Math.random() * temples.length);
    spotlightContainer.appendChild(createSpotlight(temples[randomNumber]));
});