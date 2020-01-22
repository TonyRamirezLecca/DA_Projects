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
whenExists('.product_title.entry-title', function () {
function daScript() {
	/* Selects Get Estimate Section */
	var regex = /Please let us know if you would like a gem/i;
	document.querySelectorAll('.woocommerce-product-details__short-description').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			el.classList.add('da_shrink-text');
			return;
		}
	});

	$('.product_title.entry-title').clone().insertBefore('.woocommerce-product-gallery.woocommerce-product-gallery--with-images.woocommerce-product-gallery--columns-4.images');
	$('.product_title.entry-title').eq(0).addClass('da_header-1');
	$('.product_title.entry-title').eq(1).addClass('da_header-2');
}
daScript();
	
});
