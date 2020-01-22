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

console.log("DA_script");
whenExists('.route-widget-shopify > .route-widget .rw-checkbox-span', function () {
	if ($('.rw-checkbox-span.rw-checked').length > 0 ) {
		return;
	}
	else {
		$('.route-widget-shopify > .route-widget .rw-checkbox-span').click();
	}
});




