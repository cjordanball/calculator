const NumberKey = (num) => {
	const buttonDiv = document.createElement('div');
	const numberSpan = document.createElement('span');

	buttonDiv.classList.add('button', 'numberButton');
	if (num === 0) {
		buttonDiv.classList.add('zeroButton');
	}

	buttonDiv.dataset.number = num;
	buttonDiv.id = `numberKey${num}`;
	buttonDiv.innerText = num.toString();

	return buttonDiv;
}

export default NumberKey;
