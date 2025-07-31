const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.textContent = "You Clicked Me!";
  setTimeout(() => {
    btn.textContent = "Press me";
  }, 1000);
});
