document.querySelector("#copyNotice").innerHTML = `&copy; ${new Date().getFullYear()} Rexburg Chamber of Commerce | Carl J. Bialorucki | WDD 230 Project | Last Updated: ${new Date(document.lastModified).toLocaleString()}`;

const currentDate = new Date();
document.querySelector("#dateDisplay").innerHTML = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);

const menuButton = document.getElementsByClassName("navList")[0];

if (currentDate.getDay() == 1 || currentDate.getDay() == 2){
    let banner = document.createElement('p');
    banner.innerHTML = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    banner.setAttribute('id', 'banner');
    document.querySelector("header").appendChild(banner);
}

function toggleNavMenu(){
    menuButton.classList.toggle("showList");
}