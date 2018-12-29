const NumberKey = (num) => {
	const buttonDiv = document.createElement('div');
	const numberSpan = document.createElement('span');

	buttonDiv.classList.add('numberButton');
	if (num === 0) {
		buttonDiv.classList.add('zeroButton');
	}
	numberSpan.classList.add('numberText');
	numberSpan.innerText = num;

	buttonDiv.dataset.number = num;
	buttonDiv.id = `numberKey${num}`;
	buttonDiv.appendChild(numberSpan);

	return buttonDiv;
}

export default NumberKey;
