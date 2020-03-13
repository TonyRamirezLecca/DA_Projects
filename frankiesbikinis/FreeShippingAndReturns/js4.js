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
whenExists('#CartDrawer > .drawer__header', function () {

	$('<div class="da_free-shipping">Free Shipping on all US orders | Free 30 day returns</div>').insertAfter('#CartDrawer > .drawer__header');

});
