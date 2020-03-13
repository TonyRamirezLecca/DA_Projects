/*** JS 3 ***/
function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function () {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				elements.splice(i, 1);
				i--;
			}
		}
		if (elements.length === 0) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}

whenExists('.title-msg, .product-title-and-price , .regular-price, .product-selection-info, .details', function () {
	console.log('Disruptive Advertising');

	/* Selects Get Estimate Section */
	var regex = /Available for Big! Delivery/i;
	var bigDelivery;
	document.querySelectorAll('.title-msg').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			bigDelivery = el;
			return;
		}
	});

	/* Selects Get Estimate Section */
	var regex = /Not available for Shipping/i;
	var availableForShipping;
	document.querySelectorAll('.details').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			availableForShipping = el;
			return;
		}
	});

	var price = document.querySelector('.regular-price').innerHTML.replace(/\$/g, "");
	if (price.includes('-')) {
		price = price.split('-');
		price = price[1];
	}

	if (!bigDelivery && price >= 50.00 && !availableForShipping) {
		$('<p class="da_free-shipping">Available for Free Shipping</p>').prependTo('.product-selection-info');
	}
});
