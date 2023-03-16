// References
const numBtn = document.querySelectorAll('#number')
const operatorBtn = document.querySelectorAll('#operator')
const equalBtn = document.getElementById('equals')
const displayCalc = document.getElementById('display')
const userValue = document.getElementById('display-value')
const allClear = document.getElementById('all-clear')
const deleteBtn = document.getElementById('delete')
const allBtns = document.querySelectorAll('button')

// Math Operators

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (a / b).toFixed(1);

const exponent = (a, b) => (a ** b);

// Operate Calculator

const operate = (operator, a, b) => {
  const numA = Number(a)
  const numB = Number(b)

  if (operator === "+") { displayCalc.innerText = add(numA, numB) };
  if (operator === "-") { displayCalc.innerText = subtract(numA, numB) };
  if (operator === "*") { displayCalc.innerText = multiply(numA, numB) };
  if (operator === "/") { displayCalc.innerText = divide(numA, numB) };
  if (operator === "exp") { displayCalc.innerText = exponent(numA, numB) };
};

// Display Value

allBtns.forEach(e => {
  e.addEventListener('click', () => {
    const value = e.value;

    equalBtn.addEventListener('click', () => {
      if (displayCalc.innerText.includes('+')) {
        const splitText = displayCalc.innerText.split('+');
        operate('+', splitText[0], splitText[1])
      }

      if (displayCalc.innerText.includes('-')) {
        const splitText = displayCalc.innerText.split('-');
        operate('-', splitText[0], splitText[1])
      }

      if (displayCalc.innerText.includes('/')) {
        const splitText = displayCalc.innerText.split('/');
        operate('/', splitText[0], splitText[1])
      }

      if (displayCalc.innerText.includes('*')) {
        const splitText = displayCalc.innerText.split('*');
        operate('*', splitText[0], splitText[1])
      }

      if (displayCalc.innerText.includes('^')) {
        const splitText = displayCalc.innerText.split('^');
        operate('exp', splitText[0], splitText[1])
      }

    })

    displayCalc.innerText += value;
  })
});

// Listeners
allClear.addEventListener('click', () => displayCalc.innerText = "")

deleteBtn.addEventListener('click', () => {
  displayCalc.innerText = displayCalc.innerText.slice(0, -1)
});