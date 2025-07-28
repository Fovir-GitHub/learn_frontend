let listField = document.querySelector("div.items-list");

function addItem() {
  let newItem = document.createElement("li");
  const ul = document.getElementById("list");

  newItem.className = "item";
  newItem.textContent = prompt("Please enter the item name.");
  ul.appendChild(newItem);
}

function EditItem(item) {
  let newItem = prompt("Enter new item name.");
  if (newItem) {
    item.textContent = newItem;
  }
}

listField.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    EditItem(event.target);
  } else {
    addItem();
  }
});
