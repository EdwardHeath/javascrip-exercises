function translate(toTranslate) {
	let consonants = [];
	let words = toTranslate.split(' ');
	let translated = [];

	words.forEach((word) => {
		consonants = [];
		
		for(let i = 0; i < word.length; i++) {
			if(word[i] === 'u' && consonants[consonants.length - 1] === 'q') {
				translated += word.slice(++i) + consonants.join('') + "uay ";
				break;
			} else if(!word[i].match(/[aeiou]/)) {
				consonants.push(word[i]);
			} else {
				translated += word.slice(i) + consonants.join('') + "ay ";
				break;
			}
		}
	});

	return translated.trim();
}


module.exports = {
	translate
}

