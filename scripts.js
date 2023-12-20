let operandOne = "";
let operator = "";
let operandTwo = "";
let displayContent = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operandOne, operator, operandTwo) {
  if (operator === "+") return add(operandOne, operandTwo);
  if (operator === "-") return subtract(operandOne, operandTwo);
  if (operator === "*") return multiply(operandOne, operandTwo);
  if (operator === "/") return divide(operandOne, operandTwo);
}

const grabOperator = (button) => (operator = button.target.textContent);
const grabNumber = (button) => {
  if (!operator) operandOne += button.target.textContent;
  if (operator) operandTwo += button.target.textContent;
  updateDisplay();
};


function clear() {
  display.textContent = "";
}

function updateDisplay() {
  clear();
  display.textContent = `${operandOne} ${operator} ${operandTwo}`;
  displayContent = display.textContent;
}


// UI 

const display = document.querySelector(".display");
const operatorBtns = document
  .querySelectorAll(".operator")
  .forEach((e) => e.addEventListener("click", grabOperator));

const numberBtns = document
  .querySelectorAll(".digit")
  .forEach((e) => e.addEventListener("click", grabNumber));

const clearBtn = document
  .querySelector(".clear")
  .addEventListener("click", clear);
