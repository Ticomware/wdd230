function createCard(){

}

fetch("data/data.json").then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
});