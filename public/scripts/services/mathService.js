export const mathData = {
	operand1: '',
	operand2: '',
	operator: undefined,
	hotNumber: 'operand1'
}

export const NumberFormatter = (numString) => {
	let [integerPortion, decimalPortion] = numString.split(/\./);
	return decimalPortion;
}
