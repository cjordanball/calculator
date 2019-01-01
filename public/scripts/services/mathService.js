const startState = Object.freeze({
	operand1: '',
	operand2: '',
	operator: undefined,
	hotNumber: 'operand1'
});


export const mathData = {
	operand1: '',
	operand2: '',
	operator: undefined,
	hotNumber: 'operand1'
}

export const NumberFormatter = (numString) => {
	let [integerPortion, decimalPortion] = numString.split(/\./);
	return decimalPortion;
};

export const clearApp = () => {
	Object.assign(mathData, startState);
	const display = document.querySelector('.display');
	display.innerText = '0';
};
