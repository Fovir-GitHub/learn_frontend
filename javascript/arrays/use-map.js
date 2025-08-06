function double(number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);

console.log(
  numbers.map((number) => {
    return number * number;
  }),
);
