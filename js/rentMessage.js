const messageNode = document.querySelector(`#text-message`);

function showMessage () {
	messageNode.classList.add(`show-message`);
};

function closeMessage () {
	messageNode.classList.remove(`show-message`);
};