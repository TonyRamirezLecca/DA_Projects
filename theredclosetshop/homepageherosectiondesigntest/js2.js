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

whenExists('#shopify-section-1522779748898,#shopify-section-1541652634357', function () {


	$('#shopify-section-1522779748898').html('<div class="hero-ctn"><div class="hero-column"><div class="hero-img-ctn" id="hero1"> <a class="hero-link" href="https://shop.theredclosetdiary.com/pages/search-results-page?collection=jalynns-faves"></a><div class="hero-header"><h1>JALYNN\'S FAVES</h1><div class="header-background"></div></div></div><div class="hero-img-ctn" id="hero2"><a class="hero-link" href="https://shop.theredclosetdiary.com/pages/search-results-page?collection=plus-size"></a><div class="hero-header"><h1>PLUS-SIZE COLLECTION</h1><p>Sizes up to 15!</p><div class="header-background"></div></div></div></div><div class="hero-column"><div class="hero-img-ctn" id="hero3"><a class="hero-link" href="https://shop.theredclosetdiary.com/collections/grab-bags/products/mystery-grab-bag"></a><div class="hero-header"><h1>MYSTERY GRAB BAGS</h1><p>Exclusive collections at a killer price.</p><div class="header-background"></div></div></div><div class="hero-img-ctn" id="hero4"><a class="hero-link" href="https://shop.theredclosetdiary.com/pages/search-results-page?collection=new-arrivals-updated"></a><div class="hero-header"><h1>NEW ARRIVALS</h1><div class="header-background"></div></div></div></div></div>')


});
