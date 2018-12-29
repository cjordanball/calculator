import NumberKey from './numberKey.js';
import { mathData } from '../../services/mathService.js';


const handleInput = (data) => {
	if (data) {
		mathData.operand1 += data;
	}
	const display = document.querySelector('.display');
	display.innerText = mathData.operand1


}

const NumberContainer = () => {
	const numberContainer = document.createElement('div');
	numberContainer.classList.add('numberbox');

	for (let i = 0 ; i < 10; i++) {
		const numKey = NumberKey(i);
		numberContainer.appendChild(numKey);
	}
	numberContainer.addEventListener('click', (e) => {handleInput(e.target.dataset.number)});
	return numberContainer;
}

export default NumberContainer;
