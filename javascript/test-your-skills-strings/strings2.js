const quote =
  "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Don't edit the code above here!

// Add your code here

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, quote.indexOf(".") + 1);

// Don't edit the code below here!

console.log(`The quote is ${quoteLength} characters long.`);
console.log(index);
console.log(revisedQuote);
