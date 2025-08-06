const quote = "I dO nOT lIke gREen eGgS anD HAM";
const toReplace = "green eggs and ham";

// Don't edit the code above here!

// Add your code here

let fixedQuote = quote.toLowerCase();
fixedQuote = fixedQuote[0].toUpperCase() + fixedQuote.slice(1);
fixedQuote = fixedQuote.replace(toReplace, "apples");

const finalQuote = fixedQuote + ".";

// Don't edit the code below here!

console.log(finalQuote);
