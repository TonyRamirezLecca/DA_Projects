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

whenExists('#shopify-section-bv-embed-code-pdp > div, #shopify-section-app-section > div, #bv-grid .vjs-poster img', function () {

	//Move grid out of container
	jQuery('#bv-grid').insertBefore('#shopify-section-app-section > div');

	//Move Container
	jQuery('#shopify-section-bv-embed-code-pdp > div').insertBefore('#bv-grid');

	//Move grid back into container
	jQuery('#bv_grid').insertBefore('.bv-curations-cleanslate.bv-grid-wrapper bv-minimalist');

});

