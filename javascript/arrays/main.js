const shopping = ["bread", "milk", "cheese", "hummus", "noddles"];
console.log(shopping[0]);

shopping[0] = "tahini";
console.log(shopping);

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl"));
console.log(birds.indexOf("Rabbit"));

let cities = ["Manchester", "Liverpool"];
console.log(cities);
cities.push("Cardiff");
console.log(cities);
cities.push("Bradford", "Brighton");
console.log(cities, cities.length);
cities.unshift("Edinburgh");
console.log(cities);

cities = ["Manchester", "Liverpool"];
// cities.pop();
cities.shift();
console.log(cities);

cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}

console.log(cities);
