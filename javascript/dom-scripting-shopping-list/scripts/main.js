const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function handleButtonClick() {
  const inputValue = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.appendChild(span);
  li.appendChild(btn);

  span.textContent = inputValue;
  btn.textContent = "Delete";
  btn.addEventListener("click", () => {
    ul.removeChild(li);
  });

  ul.appendChild(li);
}

button.addEventListener("click", handleButtonClick);
