/*** JS 2 ***/
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
whenExists('.product-single__form.js-product-form', function () {

	if ($('.da_vp-ctn').length == 0) {
		$('<div class="da_vp-ctn"><div class="da_vp"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/checkmark.png"/><span>Set The Trend</span></div><div class="da_vp"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/checkmark.png"/><span>Exclusive, Custom Apparel</span></div><div class="da_vp"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/checkmark.png"/><span>Made in USA</span></div><div class="da_vp"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/checkmark.png"/><span>Handmade to Order</span></div></div>').insertAfter('.js-cart-replace > .product-single__box > form');
	}

	
});
