exports.highPass = function highPass(number, cutoff) {
	if (number >= cutoff)
		return true;
	else
		return false;
};

exports.lowPass = function lowPass(number, cutoff) {
	if (number <= cutoff)
		return true;
	else
		return false;
};