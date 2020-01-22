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

whenExists('.product-options-bottom > .box-tocart > .fieldset > .actions', function () {
	if (jQuery('.da_bulk-pricing-btn').length >= 1) return;

	jQuery('<a class="da_bulk-pricing-btn" href="https://www.standupdeskstore.com/bulk-discount-form/">BULK PRICING</a>').appendTo('.product-options-bottom > .box-tocart > .fieldset > .actions');


	whenExists('.addon-arrow', () => {
		jQuery('.addon-arrow').insertAfter('.product-options-bottom > .box-tocart > .fieldset > .actions > button');
	});
	
});

