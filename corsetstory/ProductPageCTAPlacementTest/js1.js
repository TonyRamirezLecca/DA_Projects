//VARIATION 1
function whenExists(elements, callback) { elements = elements.split(',');
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
whenExists('button[name="add"],.product-icon', function () {
	console.log("DA TEST");
	if (window.location.href.includes('/products/')) {
		jQuery('button.btn.btn--addCart.btn--addCart--mobile.hide.small--show').insertAfter('.option-wrapper');
	}
});

