function createCard(business){
    let busSection = document.createElement("section");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let address = document.createElement("a");
    let phone = document.createElement("a");
    let web = document.createElement("a");

    img.setAttribute('src', business["logo"]);
    img.setAttribute('alt', `${business["title"]} Logo`);

    title.innerText = business["title"];

    address.setAttribute('href', convertAddressToMapURL(business["address"]));
    address.innerText = business["address"];

    phone.setAttribute('href', `tel:+1-${business["phone"]}`)
    phone.innerText = business["phone"];

    web.setAttribute('href', business["website"]);
    web.innerText = "Website";

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

fetch("data/data.json").then((response) => response.json())
.then((jsObject) => {
    const businesses = jsObject["businesses"];
    console.log(businesses);
    const directorySection = document.getElementById("directorySection");
    businesses.forEach(element => {
        directorySection.appendChild(createCard(element));
    });
});