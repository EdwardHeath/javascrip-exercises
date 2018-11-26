const removeFromArray = function() {
	let arr = arguments[0];
	let remove = Array.prototype.slice.call(arguments).slice(1);

	remove.forEach(function(removed) {
		arr = arr.filter(function(entry) {
			return removed != entry;
		});
	});

	return arr;
}

module.exports = removeFromArray
