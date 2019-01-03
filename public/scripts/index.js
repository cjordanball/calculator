import Display from './components/Display.js';
import NumberContainer from './components/keys/numberContainer.js';
import OperatorsContainer from './components/keys/operatorsContainer.js';
import MiscKeysContainer from './components/keys/miscKeysContainer.js';


const body = document.querySelector('body');
const container = document.createElement('div');

container.classList.add('container');

body.appendChild(container);
container.appendChild(Display());
container.appendChild(NumberContainer());
container.appendChild(OperatorsContainer());
container.appendChild(MiscKeysContainer());
