document.querySelector("#copyNotice").innerHTML = `&copy; ${new Date().getFullYear()} Rexburg Chamber of Commerce | Carl J. Bialorucki | WDD 230 Project | Last Updated: ${new Date(document.lastModified).toLocaleString()}`;

const currentDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(new Date());
document.querySelector("#dateDisplay").innerHTML = currentDate;

const menuButton = document.getElementsByClassName("navList")[0];

function toggleNavMenu(){
    menuButton.classList.toggle("showList");
}