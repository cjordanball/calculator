const mathData = {
	operand1: '',
	operand2: '',
	operator: undefined,
	hotNumber: 'operand1'
};

const NumberFormatter = (numString) => {
	let [integerPortion, decimalPortion] = numString.split(/\./);
	return decimalPortion;
};

module.exports = {
	mathData,
	NumberFormatter
};
