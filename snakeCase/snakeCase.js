const snakeCase = function(str) {
	let snake = str.slice();

	snake = snake.replace(/\W+/g, "_");

	if(snake[snake.length - 1] === "_") {
		snake = snake.slice(0, -1);
	}

	if(!snake.includes("_")) {
		for(let i = 0; i < snake.length; i++) {
			if(snake.charCodeAt(i) >= 65 && snake.charCodeAt(i) <= 90) {
				snake = snake.slice(0, i) + "_" + snake.slice(i++);
			}
		}
	}

	return snake.toLowerCase();
}

module.exports = snakeCase