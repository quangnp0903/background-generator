// const css = document.querySelector("h3");
// // var color1 = document.querySelector(".color1");
// // var color2 = document.querySelector(".color2");
// const [color1, color2] = document.querySelectorAll('.color');
// const body = document.querySelector('#gradient');
// var randomBtn = document.querySelector('button');

// color1.value = '#ff0000';
// color2.value = '#ffff00';
// css.textContent = 'linear-gradient(to right, red , yellow)';

// function makeRdmColor() {
// 	return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
// }

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// function setRandomColors() {
// 	var rdmColor1 = makeRdmColor();
// 	var rdmColor2 = makeRdmColor();

// 	color1.value = rdmColor1;
// 	color2.value = rdmColor2;
	
// 	setGradient();
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

// randomBtn.addEventListener('click', setRandomColors);

//Newer  modern way to write the code (this new syntax will be explored in Advanced JS section)
const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}


_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);