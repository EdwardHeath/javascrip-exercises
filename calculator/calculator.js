function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((sum, value) => sum + value, 0);
}

function multiply (arr) {
	return arr.reduce((product, value) => product * value);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if(a === 0) return 1;
	
	return factorial(a - 1) * a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}