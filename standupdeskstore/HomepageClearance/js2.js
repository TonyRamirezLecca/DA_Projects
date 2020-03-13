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
whenExists('.minicart-wrapper', function () {

	jQuery('<a class="da_shop-clearance" href="https://www.standupdeskstore.com/standing-desks/clearance">Shop Clearance</a>').prependTo('.minicart-wrapper');

});
