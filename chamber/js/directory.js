function createCard(business){
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

const directorySection = document.getElementById("directorySection");
const listViewButton = document.getElementById("listViewButton");
const cardViewButton = document.getElementById("cardViewButton");

function cardView(){
    directorySection.classList.remove("directoryListView");
    directorySection.classList.add("directoryCardView");

    listViewButton.classList.add("notSelected");
    cardViewButton.classList.remove("notSelected");
}

function listView(){
    directorySection.classList.remove("directoryCardView");
    directorySection.classList.add("directoryListView");

    cardViewButton.classList.add("notSelected");
    listViewButton.classList.remove("notSelected");
}

fetch("data/data.json").then((response) => response.json())
.then((jsObject) => {
    const businesses = jsObject["businesses"];
    businesses.forEach(element => {
        directorySection.appendChild(createCard(element));
    });
});

