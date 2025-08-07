const button = document.querySelector("button");

function setButtonText() {
  button.textContent = `Machine is ${button.className}`;
}

function handleButtonClick() {
  if (button.className === "off") {
    button.className = "on";
  } else {
    button.className = "off";
  }

  setButtonText();
}

setButtonText();

button.addEventListener("click", handleButtonClick);
