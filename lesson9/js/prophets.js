const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dateOfBirth = document.createElement('p');
    let placeOfBirth = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    //Add additional details
    dateOfBirth.innerText = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.innerText = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${getOrdinalEnding(prophet.order)} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

function getOrdinalEnding(number){
    if (number == 1 || number > 20 && number%10 == 1){
        return "st";
    }

    else if (number == 2 || number > 20 && number%10 == 2){
        return "nd";
    }

    else if (number == 3 || number > 20 && number%10 == 3){
        return "rd";
    }

    else{
        return "th";
    }
}