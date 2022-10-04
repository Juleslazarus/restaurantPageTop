const body = document.querySelector("body");
const siteWrapper = document.createElement("div");
body.appendChild(siteWrapper);

siteWrapper.classList.add("siteWrapper");

const headerContainer = document.createElement("div");

headerContainer.classList.add("headerContainer");

siteWrapper.appendChild(headerContainer);

const headerText = document.createElement("h1");
headerText.classList.add("headerText");
headerText.textContent = "Francoi's Froyo";
headerContainer.appendChild(headerText);

const navRow = document.createElement("div");
navRow.classList.add("navRow");
headerContainer.appendChild(navRow);

const homeBtn = document.createElement("button");
homeBtn.classList.add("homeBtn");
homeBtn.textContent = "Home";
navRow.appendChild(homeBtn);
const menuBtn = document.createElement("button");
menuBtn.classList.add("menuBtn");
menuBtn.textContent = "Menu";
navRow.appendChild(menuBtn);

const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
siteWrapper.appendChild(mainContainer);

const infoContainer = document.createElement("div");
infoContainer.classList.add("infoContainer");
mainContainer.appendChild(infoContainer);

const addressText = document.createElement("h1");
addressText.textContent = "Address";
addressText.classList.add("addressText");
infoContainer.appendChild(addressText);
const addressSubText = document.createElement("h1");
addressSubText.textContent = "555 N Mountain Ave Salem, MA 55555";
addressSubText.classList.add("addressSubText");
infoContainer.appendChild(addressSubText);
const phoneText = document.createElement("h1");
phoneText.textContent = "Phone Number";
phoneText.classList.add("phoneText");
infoContainer.appendChild(phoneText);
