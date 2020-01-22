/*** JS 1 ***/
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

whenExists('.js-cart-replace > .product-single__box > form', function () {
	if ($('.da_vp-ctn').length == 0) {
		$('<div class="da_vp-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-value-props/valueprops1.png"/></div>').insertAfter('.js-cart-replace > .product-single__box > form');
	}
});
