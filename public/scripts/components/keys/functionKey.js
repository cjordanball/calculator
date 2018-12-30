const FunctionKey = (sign) => {
	const buttonDiv = document.createElement('div');
	const functionSpan = document.createElement('span');

	buttonDiv.classList.add('button', 'functionButton');
	if (sign === '=') {
		buttonDiv.classList.add('equalsButton');
	}

	buttonDiv.dataset.operator = sign;
	buttonDiv.innerText = sign;
	buttonDiv.id = `functionKey${sign}`;

	return buttonDiv;
}

export default FunctionKey;
