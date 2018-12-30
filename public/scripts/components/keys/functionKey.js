const FunctionKey = (sign) => {
	const buttonDiv = document.createElement('div');
	const functionSpan = document.createElement('span');

	buttonDiv.classList.add('functionButton');
	if (sign === '=') {
		buttonDiv.classList.add('equalsButton');
	}
	functionSpan.classList.add('functionText');
	functionSpan.innerText = sign;

	buttonDiv.dataset.operator = sign;
	buttonDiv.id = `functionKey${sign}`;
	buttonDiv.appendChild(functionSpan);

	return buttonDiv;
}

export default FunctionKey;
