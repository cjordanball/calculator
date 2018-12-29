import NumberKey from './components/numberKey.js';
const container = document.createElement('div');
container.classList.add('container');
const body = document.querySelector('body');
body.appendChild(container);

for (let i = 0 ; i < 10; i++) {
	const numKey = NumberKey(i);
	container.appendChild(numKey);
}
