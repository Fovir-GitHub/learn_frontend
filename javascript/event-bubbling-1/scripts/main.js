const output = document.querySelector("#output");

/**
 * @param {MouseEvent} e
 */
function handleClick(e) {
  // output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
