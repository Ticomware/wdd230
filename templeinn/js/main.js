document.querySelector("#copyNotice").innerHTML = `&copy; ${new Date().getFullYear()} Temple Inn & Suites | Carl J. Bialorucki | WDD 230 Project`;
document.querySelector("#modifiedNotice").innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const menuButton = document.getElementsByClassName("navList")[0];

function toggleNavMenu(){
    menuButton.classList.toggle("showList");
}

function closeWeatherAlert(){
    document.querySelector("#weatherAlert").remove();
}