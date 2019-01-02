import FunctionKey from './functionKey.js';
import { mathData, clearApp, negate } from '../../services/mathService.js';


const handleInput = (data) => {
	const display = document.querySelector('.display');
	if (data === 'CA') {
		clearApp();
		return;
	}
	if (data === '+/-') {
		negate();
		return;
	}
	if (data === 'C') {
		mathData[mathData.hotNumber] = mathData[mathData.hotNumber].slice(0, -1).length ? mathData[mathData.hotNumber].slice(0, -1) : '0';
		display.innerText = mathData[mathData.hotNumber];
	}
	else if (mathData.operand1 && mathData.operand2 && data === '=') {
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
			case '/':
				result = parseFloat(mathData.operand1) / parseFloat(mathData.operand2);
				break;
			default:
				result = 0;
		}
		console.log('result: ', result.toString());
		display.innerText = result.toString();
	}
	else if (mathData.operand1) {
		mathData.operator = data;
		display.innerText = data;
	}

	// ['+', '-', '*', '/'].includes(data) && mathData.operand1 {
	// 	console.log(data)
	// }
}

const functionKeys = ['+', '-', '*', '/', '=', 'C', 'CA', '+/-'];

const FunctionContainer = () => {
	const functionContainer = document.createElement('div');
	functionContainer.classList.add('functionBox');

	functionKeys.forEach((func) => {
		const functionKey = FunctionKey(func);
		functionContainer.appendChild(functionKey);
	});
	functionContainer.addEventListener('click', (e) => {handleInput(e.target.dataset.operator)});
	return functionContainer;
};

export default FunctionContainer;
