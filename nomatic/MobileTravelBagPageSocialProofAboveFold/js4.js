/*** JS 4 ***/

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

whenExists('#shopify-section-product-testimonials', function () {
	if (window.innerWidth < 991) {
		$('#shopify-section-product-testimonials').addClass('da_review').insertBefore('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div:nth-child(5) > div > div.product-social > div');

		$('#shopify-section-product-testimonials').addClass('da_review').insertBefore('div[data-section-type="product"] > div > div.col-60.d-lg-none.d-block > div.product-description.d-lg-block.d-block > div.product-social');
	}
	else {
		$('#shopify-section-product-testimonials').addClass('da_review').insertBefore('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div:nth-child(5) > div > div.product-social > div');
	}
});

