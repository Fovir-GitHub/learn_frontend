let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  const cats = JSON.parse(catString);

  for (const cat of cats) {
    motherInfo += `${cat.name}, `;
    total += cat.kittens.length;

    for (const kitten of cat.kittens) {
      if (kitten.gender === "m") {
        male++;
      }
    }
  }

  kittenInfo = `Total: ${total}, Male: ${male}, Female: ${total - male}`;

  // Add your code here

  // Don't edit the code below here!

  console.log(motherInfo);
  console.log(kittenInfo);
}
