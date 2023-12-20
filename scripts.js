let numOne = "";
let numTwo = "";
let operator = "";

const add = (numOne, numTwo) => parseFloat(numOne) + parseFloat(numTwo);
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

function operate(operator, numOne, numTwo) {
  if (operator === "+") return (final.textContent = add(numOne, numTwo));
  if (operator === "-") return (final.textContent = subtract(numOne, numTwo));
  if (operator === "*") return (final.textContent = multiply(numOne, numTwo));
  if (operator === "/") return (final.textContent = divide(numOne, numTwo));
}

const grabOperator = (button) => {
  if (operator && numTwo) {
    numOne = operate(operator, numOne, numTwo);
    numTwo = "";
    final.textContent = "";
  }
  operator = button.target.textContent;
  updateDisplay();
};
const grabNumber = (button) => {
  if (final.textContent && numTwo) clear();
  if (!operator) numOne += button.target.textContent;
  if (operator) numTwo += button.target.textContent;
  updateDisplay();
};

function clear() {
  numOne = "";
  operator = "";
  numTwo = "";
  final.textContent = "";
  updateDisplay();
}

function updateDisplay() {
  display.textContent = `${numOne} ${operator} ${numTwo}`;
}

// UI

const display = document.querySelector(".display");
const operatorBtns = document
  .querySelectorAll(".operator")
  .forEach((e) => e.addEventListener("click", grabOperator));

const numberBtns = document
  .querySelectorAll(".number")
  .forEach((e) => e.addEventListener("click", grabNumber));

const clearBtn = document
  .querySelector(".clear")
  .addEventListener("click", clear);

const final = document.querySelector(".answer");

const equalsBtn = document
  .querySelector(".equal")
  .addEventListener("click", () => operate(operator, numOne, numTwo));
