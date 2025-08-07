function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  return `rgb(${random(255)},${random(255)},${random(255)})`;
}

const container = document.querySelector("#container");
container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
