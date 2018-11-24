const repeatString = function(str, times) {
	if(times < 0) return 'ERROR';

	let repeated = "";

	for(let i = 0; i < times; i++) {
		repeated += str;
	}
	
	return repeated;
}

module.exports = repeatString
