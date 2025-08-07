const buttonBar = document.querySelector(".button-bar");

buttonBar.addEventListener("click", (e) => {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
});
