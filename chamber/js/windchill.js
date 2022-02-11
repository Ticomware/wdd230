const spanTemp = document.querySelector('#spanTemp');
const spanWindSpeed = document.querySelector('#spanWindSpeed');
const spanWindChill = document.querySelector('#spanWindChill');

spanWindChill.innerHTML = determineWindChill(parseInt(spanTemp.innerHTML), parseFloat(spanWindSpeed.innerHTML));

function determineWindChill(avgTemp, windSpeed)
{
    if (avgTemp <= 50 && windSpeed > 3)
    {
        return `${Math.round(35.74 + (0.6215*avgTemp) - (35.75*windSpeed^0.16) + (0.4275*avgTemp*windSpeed^0.16))}°F`;
    }
    
    return "N/A";
}