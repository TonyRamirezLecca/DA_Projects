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

whenExists('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul > li:nth-child(4) > a', function () {

	jQuery('<img class="da_img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/boomer-benefits/mobile-menu-hero-buttons/star.png"/>').prependTo('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul > li:nth-child(1)');

	jQuery('<img class="da_img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/boomer-benefits/mobile-menu-hero-buttons/medic.png"/>').prependTo('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul > li:nth-child(2)');
	jQuery('<img class="da_img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/boomer-benefits/mobile-menu-hero-buttons/drug.png"/>').prependTo('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul > li:nth-child(3)');

	jQuery('<img class="da_img" src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/boomer-benefits/mobile-menu-hero-buttons/question.png"/>').prependTo('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul > li:nth-child(4)');
	
});
