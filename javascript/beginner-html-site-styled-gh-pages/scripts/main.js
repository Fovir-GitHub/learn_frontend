let myHeader = document.querySelector("h1");
let myImage = document.querySelector("img");
let changeUserNameButton = document.querySelector("button");
const greetMessage = "Mozilla is cool";

myImage.addEventListener("click", () => {
  if (myImage.getAttribute("src") === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

function getUserName() {
  let userName = prompt("Please enter the username.");

  if (!userName) {
    getUserName();
  }

  return userName;
}

function setHeader(userName) {
  myHeader.textContent = greetMessage + `, ${userName}`;
}

function setUserName() {
  let userName = getUserName();

  localStorage.setItem("username", userName);
  setHeader(userName);
}

let currentUserName = localStorage.getItem("username");
if (!currentUserName) {
  setUserName();
} else {
  setHeader(currentUserName);
}

changeUserNameButton.addEventListener("click", setUserName);
