const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(
      `${this.name[0]} ${this.name[1]} is ${this.age} years old.`,
    );
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

console.log(person.name);
console.log(person.name[0]);
// console.log(person.name.first);
// console.log(person.name.last);
console.log(person.age);

person.bio();
person.introduceSelf();

logProperty("name");
logProperty("age");

person.age = 45;
person["name"][1] = "Cratchit";
logProperty("name");
logProperty("age");

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person["eyes"]);
person.farewell();

const salva = new Person("Salva");
salva.introduceSelf();
