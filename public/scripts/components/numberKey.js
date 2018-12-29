const NumberKey = (num) => {
	const buttonDiv = document.createElement('div');
	const numberSpan = document.createElement('span');

	buttonDiv.classList.add('numberButton');
	numberSpan.classList.add('numberText');
	numberSpan.innerText = num;

	buttonDiv.dataset.number = num;
	buttonDiv.addEventHandler('click', () => {console.log('howdy: ', data-number)});
	buttonDiv.appendChild(numberSpan);

	return buttonDiv;
}

export default NumberKey;
