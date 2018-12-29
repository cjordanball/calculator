import Display from './components/Display.js';
import NumberContainer from './components/keys/numberContainer.js';


const body = document.querySelector('body');
const container = document.createElement('div');

container.classList.add('container');

body.appendChild(container);
container.appendChild(Display());
container.appendChild(NumberContainer());
