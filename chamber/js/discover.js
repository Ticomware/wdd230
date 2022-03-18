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

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }