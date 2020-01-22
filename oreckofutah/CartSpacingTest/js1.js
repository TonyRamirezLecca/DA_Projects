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

whenExists('.woocommerce-cart-form__cart-item', function () {
	$('.woocommerce-cart-form__cart-item').each(function() {
		$(this).find('.product-name, .product-price, .product-quantity, .product-subtotal').wrapAll('<div class="da_product-inner-wrap"></div>');
		$(this).find('.product-thumbnail, .da_product-inner-wrap').wrapAll('<div class="da_product-outer-wrap"></div>');
		$('<span class="da_insert">Product: </span>').prependTo($(this).find('.product-name'));
		$('<span class="da_insert">Price: </span>').prependTo($(this).find('.product-price'));
		$('<span class="da_insert">Quantity: </span>').prependTo($(this).find('.quantity.default'));
		$('<span class="da_insert">Subtotal: </span>').prependTo($(this).find('.product-subtotal'));
	});
});
