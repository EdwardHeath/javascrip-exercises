const fibonacci = function(num) {
	if(num < 0) return "OOPS";
	if(num == 1 || num == 2) return 1;

	let fib1 = 1;
	let fib2 = 1;
	let fib3 = 0;

	for(let i = 2; i < num; i++) {
		fib3 = fib1 + fib2;
		fib1 = fib2;
		fib2 = fib3;
	}

	return fib2;
}

module.exports = fibonacci
