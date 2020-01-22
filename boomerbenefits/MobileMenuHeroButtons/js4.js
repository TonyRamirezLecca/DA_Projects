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

whenExists('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul', function () {

	jQuery('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul > li:nth-child(4)').insertAfter('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul');

	jQuery('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul').addClass('da_list');
	
});
