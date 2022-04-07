const templeCardContainer = document.getElementsByClassName("discoverMain")[0];

fetch("data/data.json").then((response) => response.json())
.then((jsObject) => {
    const temples = jsObject["temples"];
    temples.forEach(element => {
      templeCardContainer.appendChild(createCard(element))
    });
});

function createCard(temple){
  let section = document.createElement("section");
  let img = document.createElement("img");
  let title = document.createElement("h2");
  let description = document.createElement("p");

  title.innerText = temple["title"];

  img.setAttribute('src', temple["picture"]);
  img.setAttribute('alt', `${temple["title"]}`);

  description.innerText = temple["description"];

  section.appendChild(img);
  section.appendChild(title);
  section.appendChild(description);

  return section;
}
