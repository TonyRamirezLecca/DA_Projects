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

	var bigDelivery;
	var availableForShipping;
	var priceIsUnder;

	/* Makes sure it's not a Big Delivery product*/
	var regex = /Available for Big! Delivery/i;
	document.querySelectorAll('.title-msg').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			bigDelivery = el;
			return;
		}
	});

	/* Makes sure item is available for shipping */
	var regex = /Not available for Shipping/i;
	document.querySelectorAll('.details').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			availableForShipping = el;
			return;
		}
	});

	/* Makes sure the price is >= 50 */
  var price = document.querySelector('.regular-price').innerHTML.replace(/\$/g, "");
	if (price.includes('-')) {
		price = price.split('-');
		price = price[1];
	}
	
	if (price < 59.00) {
		priceIsUnder = price;
	}

	if (!bigDelivery && !priceIsUnder && !availableForShipping) {
		excecuteTrigger();
	}
});
