const header = document.querySelector("header");

const nav = document.createElement("nav");

const leftList = document.createElement("ul");

const logoItem = document.createElement("li");
const logoLink = document.createElement("a");
logoLink.href = "/";
const logoImg = document.createElement("img");
logoImg.src = "/logo.png";
logoImg.alt = "UnEarthed Logo";
logoImg.style.height = "80px"; 
logoImg.style.marginLeft = "2rem";

logoLink.appendChild(logoImg);
logoItem.appendChild(logoLink);

const titleItem = document.createElement("li");
const title = document.createElement("strong");
title.textContent = "UnEarthed";
titleItem.appendChild(title);

leftList.appendChild(logoItem);
leftList.appendChild(titleItem);

const rightList = document.createElement("ul");

const buttonItem = document.createElement("li");
const homeButton = document.createElement("a");
homeButton.href = "/";
homeButton.setAttribute("role", "button");
homeButton.textContent = "Home";
buttonItem.appendChild(homeButton);

rightList.appendChild(buttonItem);

nav.appendChild(leftList);
nav.appendChild(rightList);

header.appendChild(nav);
