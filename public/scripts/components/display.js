const Display = () => {
	const displayDiv = document.createElement('div');

	displayDiv.innerText = '0';
	displayDiv.classList.add('display');

	return displayDiv;
};


export default Display;
