const autorizeNode = document.querySelector(`.wrapper-autorize`);
const registerNode = document.querySelector(`.wrapper-register`);
const closeFormAutorizeNode = document.querySelector(`.ico-autorize`);
const closeFormRegisterNode = document.querySelector(`.ico-register`);

const buttonAutorizeNode = document.querySelector(`.autorize`);
const buttonRegisterNode = document.querySelector(`.registration`);

const greetingNode = document.querySelector(`.welcome-text`);

buttonAutorizeNode.addEventListener(`click`, () => {
	autorizeNode.classList.add(`autorize-open`);
	registerNode.classList.remove(`register-open`);
	autorizeNode.classList.remove(`autorize-close`);
	greetingNode.innerHTML = ``;
});

buttonRegisterNode.addEventListener(`click`, () => {
	registerNode.classList.add(`register-open`);
	autorizeNode.classList.remove(`autorize-open`);
	registerNode.classList.remove(`register-close`);
	greetingNode.innerHTML = ``;
});

closeFormAutorizeNode.addEventListener(`click`, () => {
	autorizeNode.classList.add(`autorize-close`);
	autorizeNode.classList.remove(`autorize-open`);

	greetingNode.innerHTML = `
		<h1>Откройте для себя волшебный мир горнолыжного курорта "Снежочек"!</h1>
		<p>Приглашаем вас на уникальное горнолыжное приключение, которое обещает принести вам незабываемые впечатления и адреналин!</p>`;
});

closeFormRegisterNode.addEventListener(`click`, () => {
	registerNode.classList.add(`register-close`);
	registerNode.classList.remove(`autorize-open`);

	greetingNode.innerHTML = `
		<h1>Откройте для себя волшебный мир горнолыжного курорта "Снежочек"!</h1>
		<p>Приглашаем вас на уникальное горнолыжное приключение, которое обещает принести вам незабываемые впечатления и адреналин!</p>`;
});



