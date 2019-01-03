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
	let neg;
	let [integerPortion, decimalPortion] = numString.split(/\./);
	let integerPortionArr = integerPortion.split('');
	if (integerPortionArr[0] === '-') {
		neg =  integerPortionArr.shift();
	};
	if (integerPortionArr[0] === '0') {
		integerPortionArr = integerPortionArr.slice(1);
	}
	decimalPortion = parseInt(decimalPortion, 10) ? decimalPortion : '';
	// integerPortion = parseInt(integerPortion, 10).toString();
	const leng = integerPortionArr.length;
	for (let i = 1; i < leng - 1; i++) {
		if ((leng - i) % 3 === 0) {
			integerPortionArr[i] = `,${integerPortionArr[i]}`;
		}
	}
	if ()
	integerPortion = neg ? neg.concat(integerPortionArr.join('')) : integerPortionArr.join('');
	return decimalPortion ? `${integerPortion}.${decimalPortion}` : `${integerPortion}`;
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
