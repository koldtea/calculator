// References

// Listeners

// Functions

// Math Operators

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (a / b).toFixed(1);

// Operate Calculator

const operate = (operator, a, b) => {
  if (operator === "+") { return add(a,b) };
  if (operator === "-") { return subtract(a,b) };
  if (operator === "*") { return multiply(a,b) };
  if (operator === "/") { return divide(a,b) };
};

// Tests

console.log(add(4, 7))

console.log(operate("+", 2, 3))
console.log(operate("-", 2, 3))
console.log(operate("*", 2, 3))
console.log(operate("/", 2, 3))