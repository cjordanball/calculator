import FunctionKey from './functionKey.js';
import { mathData, clearApp, clearAppKeepDisplay, negate, numberFormatter } from '../../services/mathService.js';

const handleInput = (data) => {
	const display = document.querySelector('.display');
	if (data === 'AC') {
		clearApp();
		return;
	}
	if (data === '+/-') {
		negate();
		return;
	}
	if (data === '<=') {
		mathData[mathData.hotNumber] = mathData[mathData.hotNumber].slice(0, -1).length ? mathData[mathData.hotNumber].slice(0, -1) : '0';
		display.innerText = numberFormatter(mathData[mathData.hotNumber],10);
	}
	else if (mathData.operand1 && mathData.operand2 && data === '=') {
		let result;
		switch(mathData.operator) {
			case '+':
				result = parseFloat(mathData.operand1) + parseFloat(mathData.operand2);

				console.log('inplus: ', result);
				break;
			case '-':
				result = parseFloat(mathData.operand1) - parseFloat(mathData.operand2);
				break;
			case '*':
				result = parseFloat(mathData.operand1) * parseFloat(mathData.operand2);
				break;
			case '÷':
				result = parseFloat(mathData.operand1) / parseFloat(mathData.operand2);
				break;
			default:
				result = 0;
		}
		display.innerText = numberFormatter(result.toString());
		clearAppKeepDisplay();

	}
}

const miscKeys = ['AC', '<=', '+/-', '='];

const miscKeysContainer = () => {
	const miscKeysContainer = document.createElement('div');
	miscKeysContainer.classList.add('miscKeysBox');

	miscKeys.forEach((func) => {
		const miscKey = FunctionKey(func);
		miscKeysContainer.appendChild(miscKey);
	});
	miscKeysContainer.addEventListener('click', (e) => {handleInput(e.target.dataset.operator)});
	return miscKeysContainer;
};



export default miscKeysContainer;
