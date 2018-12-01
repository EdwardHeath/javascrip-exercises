const palindromes = function(palindrome) {
	let word = palindrome.toLowerCase().match(/\w+/g).join('');

	for(let i = 0; i < (word.length) / 2; i++) {
		if(word[i] !== word[word.length - i - 1]) {
			return false;
		}
	}
	return true;
}

module.exports = palindromes
