const dayDisclaimer = document.getElementById("dayDisclaimer");
let lastVisitDate = window.localStorage.getItem('LastVisit');
if(lastVisitDate === undefined) {
    lastVisitDate = new Date(Data.now());
}

lastVisitDate = Date.parse(lastVisitDate);
let numOfDays = Math.floor((new Date() - lastVisitDate)/(1000*60*60*24));

if (numOfDays == 1)
    dayDisclaimer.innerText = `${numOfDays} day`;
else
    dayDisclaimer.innerText = `${numOfDays} days`;

window.localStorage.setItem('LastVisit', new Date(Date.now()));