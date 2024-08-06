const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("jassim"));

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(10, 30));

const square = (num3) => {
  return num3 ** 2;
};

console.log(square(9));

const numbers = [1, 2, 3, 4, 5, 6];

let square2 = [];

numbers.forEach((num) => {
  square2.push(num ** 2);
});

console.log(square2);
