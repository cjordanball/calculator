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

const handleIntPortion = (intPortion) => {
	let neg;
	if (!intPortion) {
		return '0';
	}
	const trimmedIntPortion = parseInt(intPortion, 10).toString();
	let intPortionArr = trimmedIntPortion.split('');
	if (intPortionArr[0] === '-') {
		neg =  intPortionArr.shift();
	};
	const leng = intPortionArr.length;
	for (let i = 1; i < leng - 1; i++) {
		if ((leng - i) % 3 === 0) {
			intPortionArr[i] = `,${intPortionArr[i]}`;
		}
	}
	return neg ? neg.concat(intPortionArr.join('')) : intPortionArr.join('');
}
export const numberFormatter = (numString) => {
	let intPortion;
	const dotted = numString.includes('.');
	if (!dotted) {
		return handleIntPortion(numString);
	}
	let [integerPortion, decimalPortion] = numString.split(/\./);

	decimalPortion = parseInt(decimalPortion, 10) ? decimalPortion : '';
	intPortion = handleIntPortion(integerPortion);

	return decimalPortion ? `${intPortion}.${decimalPortion}` : `${intPortion}.`;
};

export const clearApp = () => {
	Object.assign(mathData, startState);
	const display = document.querySelector('.display');
	display.innerText = '0';
};

export const clearAppKeepDisplay = () => {
	Object.assign(mathData, startState);
}

export const negate = () => {
	mathData[mathData.hotNumber] = (parseInt(mathData[mathData.hotNumber], 10) * -1).toString();
	const display = document.querySelector('.display');
	display.innerText = numberFormatter(mathData[mathData.hotNumber]);
};
