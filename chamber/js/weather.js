const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83440,us&units=imperial&appid=6ab85a365f86c338d15b0ecfee11c84e";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const iconURI = `https://openweathermap.org/img/wn/${jsObject["weather"][0].icon}@2x.png`;
    document.getElementById("weatherIcon").setAttribute('src', iconURI);
    document.getElementById("spanTemp").innerText = Math.round(jsObject["main"].temp);
    document.getElementById("weatherCondition").innerText = jsObject["weather"][0].description;
    document.getElementById("spanWindSpeed").innerText = jsObject["wind"].speed.toFixed(1);
    document.getElementById("spanWindChill").innerText = determineWindChill(parseFloat(jsObject["main"].temp), parseFloat(jsObject["wind"].speed));
  });

function determineWindChill(avgTemp, windSpeed)
{
    if (avgTemp <= 50 && windSpeed > 3)
    {
        return `${Math.round(35.74 + (0.6215*avgTemp) - (35.75*windSpeed^0.16) + (0.4275*avgTemp*windSpeed^0.16))}°F`;
    }
    
    return "N/A";
}