import NumberKey from './numberKey.js';
import { mathData } from '../../services/mathService.js';


const handleInput = (data) => {
	if (!mathData.operator) {
		if (data) {
			mathData.operand1 += data;
		}
	} else {
		mathData.operand2 += data;
	}
	const display = document.querySelector('.display');
	display.innerText = mathData.operator ? mathData.operand2 : parseFloat(mathData.operand1).toString();
};

const NumberContainer = () => {
	const numberContainer = document.createElement('div');
	const numberRow1 = document.createElement('div');
	numberRow1.classList.add('numberRow');

	const numberRow2 = document.createElement('div');
	numberRow2.classList.add('numberRow');

	const numberRow3 = document.createElement('div');
	numberRow3.classList.add('numberRow');

	const numberRow4 = document.createElement('div');
	numberRow4.classList.add('numberRow');

	numberContainer.classList.add('numberBox');

	for (let i = 0; i < 10; i++) {
		const numKey = NumberKey(i);
		if (i === 0) {
			numberRow4.appendChild(numKey);
			continue;
		} else if (i < 4) {
			numberRow1.appendChild(numKey);
			continue;
		} else if (i < 7) {
			numberRow2.appendChild(numKey);
			continue;
		} else {
			numberRow3.appendChild(numKey);
			continue;
		}
	}
	numberContainer.appendChild(numberRow1);
	numberContainer.appendChild(numberRow2);
	numberContainer.appendChild(numberRow3);
	numberContainer.appendChild(numberRow4);
	numberContainer.addEventListener('click', (e) => { handleInput(e.target.dataset.number); });
	return numberContainer;
};

export default NumberContainer;
