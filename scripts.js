let numOne = '';
let numTwo = '';
let operator = '';

const rndToTwo = number => Math.round(number * 100) / 100;
const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const grabDecimal = button => {
	if (!operator && numOne.search(/\./)) {
		numOne += button.target.textContent;
	}
	if (operator && numTwo.search(/\./)) {
		numTwo += button.target.textContent;
	}
	updateDisplay();
};

const grabOperator = button => {
	if (!numOne) return;
	if (operator && numTwo) {
		numOne = operate(operator, numOne, numTwo);
		numTwo = '';
		final.textContent = '';
	}
	operator = button.target.textContent;
	updateDisplay();
};

const grabNumber = button => {
	if (final.textContent && numTwo) clear();
	if (!operator) numOne += button.target.textContent;
	if (operator) numTwo += button.target.textContent;
	updateDisplay();
};

const clear = () => {
	numOne = '';
	operator = '';
	numTwo = '';
	final.textContent = '';
	updateDisplay();
};

const updateDisplay = () => {
	display.textContent = `${numOne} ${operator} ${numTwo}`;
};

//switch formatted for mieruko
function operate(operator, a, b) {
	if (!b) return;
	switch (operator) {
		case '+':
			return rndToTwo(add(a, b));
		case '-':
			return rndToTwo(subtract(a, b));
		case '*':
			return rndToTwo(multiply(a, b));
		case '/':
			return isFinite(divide(a, b)) ? divide(a, b) : 'error: div by 0';
		default:
			return `error: how did you break this?`;
	}
}

// UI

const final = document.querySelector('.answer');
const display = document.querySelector('.equation');
const operatorBtns = document
	.querySelectorAll('.operator')
	.forEach(e => e.addEventListener('click', grabOperator));

const numberBtns = document
	.querySelectorAll('.number')
	.forEach(e => e.addEventListener('click', grabNumber));

const decimalBtn = document
	.querySelector('.decimal')
	.addEventListener('click', grabDecimal);

const clearBtn = document
	.querySelector('.clear')
	.addEventListener('click', clear);

const equalsBtn = document
	.querySelector('.equal')
	.addEventListener(
		'click',
		() => (final.textContent = operate(operator, numOne, numTwo))
	);
