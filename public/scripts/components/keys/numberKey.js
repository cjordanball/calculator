const NumberKey = (num) => {
	const numString = num.toString();
	const buttonDiv = document.createElement('div');

	buttonDiv.classList.add('button', 'numberButton');
	if (num === 0) {
		buttonDiv.classList.add('zeroButton');
	}

	buttonDiv.dataset.number = numString;
	buttonDiv.id = `numberKey${numString}`;
	buttonDiv.innerText = numString;

	return buttonDiv;
};

export default NumberKey;
