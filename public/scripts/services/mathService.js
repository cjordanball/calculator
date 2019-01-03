const startState = Object.freeze({
	operand1: '0',
	operand2: '0',
	operator: undefined,
	hotNumber: 'operand1'
});

export const mathData = {
	operand1: '0',
	operand2: '0',
	operator: undefined,
	hotNumber: 'operand1'
};

export const numberFormatter = (numString) => {
	let [integerPortion, decimalPortion] = numString.split(/\./);
	if (integerPortion[0] === '0') {
		integerPortion = integerPortion.slice(1);
	}
	console.log('numString: ', integerPortion);
	const neg = integerPortion[0] === '-';
	decimalPortion = parseInt(decimalPortion, 10) ? decimalPortion : '';
	integerPortion = parseInt(integerPortion, 10).toString();
	const intPortionArr = integerPortion.split('');
	const leng = intPortionArr.length;
	const offSet = 0
	console.log('off: ', offSet)
	for (let i = 1; i < leng - 1; i++) {
		if ((leng - i) % 3 === offSet) {
			intPortionArr[i] = `,${intPortionArr[i]}`;
		}
	}
	integerPortion = intPortionArr.join('');
	return decimalPortion ? `${integerPortion}.${decimalPortion}` : `${integerPortion}`;
};

export const clearApp = () => {
	Object.assign(mathData, startState);
	const display = document.querySelector('.display');
	display.innerText = '0';
};

export const negate = () => {
	mathData[mathData.hotNumber] = (parseInt(mathData[mathData.hotNumber], 10) * -1).toString();
	const display = document.querySelector('.display');
	display.innerText = numberFormatter(mathData[mathData.hotNumber]);
};
