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

whenExists('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > div', function () {

	jQuery('<div class="da_toggle-drop-down">CHOOSE PLAN <i class="fas fa-arrow-circle-up da_up"></i> <i class="fas fa-arrow-circle-down da_down"></i></div>').insertAfter('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > div');

	jQuery('body > div.site-container > div.site-inner > div > main > div.hero-area > div > div.one-third.quote-box > div.medicare-mobile-list > ul').addClass('da_list');

	jQuery('.da_toggle-drop-down').click(() => {

		jQuery('.da_list').slideToggle();
		jQuery('.da_up').toggle();
		jQuery('.da_down').toggle();

	});
	
});
