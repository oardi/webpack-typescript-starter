import './style.scss';

function init(): void {
	document.body.innerHTML = `
	<h1>Webpack Typescript Starter</h1>
	<button class="btn btn-primary" id="btn-counter">you clicked me: 0 times</button>
	`;
}

init();

window.onload = (): void => {
	let count: number = 0;
	const handleClick = (): void => {
		count += 1;
		button.innerHTML = `you clicked me: ${count.toString()} times`;
	};

	const button: HTMLButtonElement = document.querySelector('#btn-counter');
	button.addEventListener('click', handleClick);
};
