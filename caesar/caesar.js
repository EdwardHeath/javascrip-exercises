const caesar = function(str, shift) {
	let shifted = "";
	let letterCode = "";

	shift = shift % 26;

	for(let i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			letterCode = str.charCodeAt(i) + shift;
			if(letterCode > 90) letterCode -= 26;
			if(letterCode < 65) letterCode += 26;
		} else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <=122) {
			letterCode = str.charCodeAt(i) + shift;
			if(letterCode > 122) letterCode -= 26;
			if(letterCode < 97) letterCode += 26;
		} else {
			letterCode = str.charCodeAt(i);
		}
		shifted += String.fromCharCode(letterCode)
	}

	return shifted;
}

module.exports = caesar
