//VARIATION 2

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
whenExists('button[name="add"],.product-icon', function () {
	// red #80022a;
	if (window.location.href.includes('/products/')) {
		jQuery('button[name="add"]').addClass("CTARed");
		jQuery('button[name="add"]').insertBefore('.feefo-container.test');
	}
});

