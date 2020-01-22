/*** JS 3 ***/

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

	/* ------------------------------------ */

	jQuery('<div class="da_links"><a href="#shopify-section-how-it-work">How It Works</a><a href="#shopify-section-what-in-the-box">What\'s in the Box</a><a href="#shopify-section-review-section">See Reviews</a><a href="#shopify-section-app-section">Get Inspired</a></div>').insertAfter('#shopify-section-pdp-the-basics');

	jQuery('a[href="#shopify-section-how-it-work"]').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#shopify-section-how-it-work').offset().top
		}, 600);
	});

	jQuery('a[href="#shopify-section-what-in-the-box"]').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#shopify-section-what-in-the-box').offset().top
		}, 600);
	});

	jQuery('a[href="#shopify-section-review-section"]').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#shopify-section-review-section').offset().top
		}, 600);
	});
	
	jQuery('a[href="#shopify-section-app-section"]').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#shopify-section-app-section').offset().top
		}, 600);
	});


});

