const button = document.querySelector("button");

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

button.addEventListener("click", updateName);
