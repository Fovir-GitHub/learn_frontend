const string = "This is my string";

console.log(string.length);
console.log(string[0]);
console.log(string[string.length - 1]);

const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));
console.log(tagline.indexOf("x"));

console.log(browserType.slice(1, 4));
console.log(browserType.slice(2));

const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

const updated = browserType.replace("moz", "van");
console.log(updated);
console.log(browserType);

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);

const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  if (greeting.includes("Christmas")) {
    console.log(greeting);
  }
}

console.log("\n\n");

const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  let temp = city.toLowerCase();
  const result = temp[0].toUpperCase() + temp.slice(1);

  console.log(result);
}

console.log("\n\n");

const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const result =
    station.slice(0, 3) +
    ": " +
    station.slice(station.indexOf(";") + 1);
  console.log(result);
}
