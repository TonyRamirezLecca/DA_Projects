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

whenExists('#maincontent > div.columns > div > div.addto-sticky.sticky-fixed > div > div.box-tocart > div > div.actions', function () {
	console.log("DA Script");

	jQuery('<a class="da_bulk" href="https://www.standupdeskstore.com/bulk-discount-form/">Bulk Pricing</a>').appendTo('#maincontent > div.columns > div > div.addto-sticky.sticky-fixed > div > div.box-tocart > div > div.actions');

	jQuery('.da_bulk').click(() => {
		jQuery('#maincontent > div.columns > div > a').click();
	});

});
