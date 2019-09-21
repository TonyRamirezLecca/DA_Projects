console.log("DA Test");
function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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


		console.log("DA Test 2");
		whenExists('.short-description', function () {
			jQuery('.short-description').insertAfter('.product-options-bottom');
			jQuery('.availability.in-stock').insertAfter('.product-options-bottom');
			jQuery('#product_addtocart_form > div.product-shop > div.option-availability > div.product-options-bottom > ul').insertAfter('.short-description');
		});

	});
});
