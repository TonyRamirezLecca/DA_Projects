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

whenExists('#shopify-section-product-testimonials', function () {
	if (window.innerWidth < 991) {
		$('#shopify-section-product-testimonials').addClass('da_review').insertAfter('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div.row > div:nth-child(1)');
	}
	else {
		$('#shopify-section-product-testimonials').addClass('da_review').insertAfter('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div');
	}
});

