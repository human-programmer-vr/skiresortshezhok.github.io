const basketTableNode = document.querySelector(`.basket-table`);
const basketButtonNode = document.querySelector(`.fa-cart-shopping`);
const closeBasketNode = document.querySelector(`.close`);
const addProductNode = document.querySelector(`.button-buy`);
const listProductNode = document.querySelector(`.list-products`);
const basketNode = document.querySelector(`.list-basket`);
const quantityNode = document.querySelector(`.quantity-product`);
const rentButtonNode = document.querySelector(`.rent`);
const closeButtonNode = document.querySelector(`.close`);
const messageNode = document.querySelector(`#text-message`);

let listProducts = [];
let carts = [];

basketButtonNode.addEventListener(`click`, () => {
	basketTableNode.classList.add(`show-basket`);
	basketTableNode.classList.remove(`close-basket`);
});

closeBasketNode.addEventListener(`click`, () => {
	basketTableNode.classList.remove(`show-basket`);
	basketTableNode.classList.add(`close-basket`);
});

// кнопка аренды товара
rentButtonNode.addEventListener(`click`, () => {
	basketNode.innerHTML = '';
	carts.length == 0 ? closeMessage() : showMessage();
	quantityNode.innerHTML = 0;
});

closeButtonNode.addEventListener(`click`, () => {
	closeMessage();
});

function showMessage() {
	messageNode.classList.add(`show-message`);
};

function closeMessage() {
	messageNode.classList.remove(`show-message`);
};

// получение id продукта
listProductNode.addEventListener(`click`, (event) => {
	let positionClick = event.target;
	
	if (positionClick.classList.contains('button-buy')) {
		let product_id = positionClick.parentElement.dataset.id;
		addToCart(product_id);
	}
})

const addToCart = (product_id) => {

	let positionProductInCart = carts.findIndex((value) => value.product_id == product_id);

	if (carts.length <= 0) {
		carts = [{
			product_id: product_id,
			quantity: 1
		}];
	} else if (positionProductInCart < 0) {
		carts.push({
			product_id: product_id,
			quantity: 1
		});
	} else {
		carts[positionProductInCart].quantity = carts[positionProductInCart].quantity + 1;
	}
	addCartToHTML();
};

const addCartToHTML = () => {
	basketNode.innerHTML = '';

	let totalProduct = 0;
	if (carts.length > 0) {
		carts.forEach(item => {
			totalProduct += item.quantity;
			let newCart = document.createElement('div');
			newCart.classList.add('item');
			newCart.dataset.id = item.product_id;
			let positionProduct = listProducts.findIndex((value) => value.id == item.product_id);
			let info = listProducts[positionProduct];
			basketNode.appendChild(newCart);
			newCart.innerHTML = `
				<div class="image">
					<img src="${info.image}">
				</div>
				<div class="name">${info.name}</div>
				<div class="price">${info.price * item.quantity}р.</div>
				<div class="quantity">
					<span class="minus">-</span>
					<span>${item.quantity}</span>
					<span class="plus">+</span>
				</div>
			`;
		})
	}
	quantityNode.innerHTML = totalProduct;
};

basketNode.addEventListener(`click`, (event) => {
	let positionClick = event.target;
	if (positionClick.classList.contains(`minus`) || positionClick.classList.contains(`plus`)) {
		let product_id = positionClick.parentElement.parentElement.dataset.id;
		let type = 'minus';

		if (positionClick.classList.contains('plus')) {
			type = 'plus';
		}

		changeQuantity(product_id, type);
	}
});

const changeQuantity = (product_id, type) => {
	let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
	if (positionItemInCart >= 0) {
		switch (type) {
			case 'plus':
				carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
				break;

			default:
				let valueChange = carts[positionItemInCart].quantity - 1;
				valueChange > 0 ? carts[positionItemInCart].quantity = valueChange : carts.splice(positionItemInCart, 1);
				break;
		}
	}
	addCartToHTML();
}

const addProductInPage = () => {
	listProductNode.innerHTML = '';
	if (listProducts.length > 0) {
		listProducts.forEach(product => {
			let newProduct = document.createElement('div');
			newProduct.dataset.id = product.id;
			newProduct.classList.add('products');
			newProduct.innerHTML = `
					<img src="${product.image}">
					<h4 class="product-title">${product.name}</h4>
					<p class="product-price">${product.price} р.</p>
					<button class="button-buy">Добавить в корзину</button>`;
			listProductNode.appendChild(newProduct);
		});
	}
};

const downloadProducts = () => {
	fetch('json/product.json')
		.then(responce => responce.json())
		.then(data => {
			listProducts = data
			addProductInPage();
		})
}

downloadProducts();