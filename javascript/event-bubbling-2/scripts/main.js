const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("section");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.style.backgroundColor =
    video.style.backgroundColor === "red" ? "blue" : "red";
});

box.addEventListener("click", () => box.classList.add("hidden"));
