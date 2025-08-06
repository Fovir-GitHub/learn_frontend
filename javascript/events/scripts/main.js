const changeColorButton = document.querySelector("button");

function getRandomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}

const changeColor = () => {
  const COLOR_LIMIT = 255;
  document.body.style.backgroundColor = `rgb(${getRandomNumber(COLOR_LIMIT)},${getRandomNumber(COLOR_LIMIT)},${getRandomNumber(COLOR_LIMIT)})`;
};

changeColorButton.addEventListener("click", changeColor);

changeColorButton.addEventListener("mouseover", (e) => {
  changeColorButton.style.scale = 2;
  console.log(e);
});

changeColorButton.addEventListener("mouseout", () => {
  changeColorButton.style.scale = 1;
});

changeColorButton.addEventListener("focus", () => {
  changeColorButton.style.backgroundColor = "blue";
});

changeColorButton.addEventListener("blur", () => {
  changeColorButton.style.backgroundColor = "red";
});

changeColorButton.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "black";
});

changeColorButton.removeEventListener("click", changeColor);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed ${event.key}.`;
});

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
