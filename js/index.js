const menuNode = document.querySelector('.nav-menu');
const showNode = document.querySelector('#showMenu');
const hideNode = document.querySelector('#hideMenu');

showMenu.addEventListener(`click`, () => {
	menuNode.classList.add('show-menu');
	menuNode.classList.remove('hide-menu');
});

hideNode.addEventListener(`click`, () => {
	menuNode.classList.add('hide-menu');
	menuNode.classList.remove('show-menu');
});