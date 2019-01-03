import FunctionKey from './functionKey.js';
import { mathData, clearApp, negate, numberFormatter } from '../../services/mathService.js';


const handleInput = (data) => {
	const display = document.querySelector('.display');

	if (mathData.operand1 && mathData.operand2 && data === '=') {
		console.log('inIf');
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
			console.log('div');
				result = parseFloat(mathData.operand1) / parseFloat(mathData.operand2);
				break;
			default:
				result = 0;
		}
		console.log('result: ', result.toString());
		display.innerText = numberFormatter(result.toString());
	}
	else if (mathData.operand1) {
		mathData.operator = data;
		display.innerText = data;
		mathData.hotNumber = 'operand2';
	}
}

const functionKeys = ['+', '-', '*', '÷'];

const OperatorsContainer = () => {
	const functionContainer = document.createElement('div');
	functionContainer.classList.add('operatorsBox');

	functionKeys.forEach((func) => {
		const functionKey = FunctionKey(func);
		functionContainer.appendChild(functionKey);
	});
	functionContainer.addEventListener('click', (e) => {handleInput(e.target.dataset.operator)});
	return functionContainer;
};

export default OperatorsContainer;
