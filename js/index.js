const menuNode = document.querySelector('.nav-menu');
const showNode = document.querySelector('#showMenu');
const hideNode = document.querySelector('#hideMenu');

const btnAutorizeNode = document.querySelector('.autorize');
const btnRegisterNode = document.querySelector('.registration');

showMenu.addEventListener(`click`, () => {
	menuNode.classList.add('show-menu');
	menuNode.classList.remove('hide-menu');
});

hideNode.addEventListener(`click`, () => {
	menuNode.classList.add('hide-menu');
	menuNode.classList.remove('show-menu');
});

btnAutorizeNode.addEventListener(`click`, () => {
	menuNode.classList.add('hide-menu');
	menuNode.classList.remove('show-menu');
});

btnRegisterNode.addEventListener(`click`, () => {
	menuNode.classList.add('hide-menu');
	menuNode.classList.remove('show-menu');
});
