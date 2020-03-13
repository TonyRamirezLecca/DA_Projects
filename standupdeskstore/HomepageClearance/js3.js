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
whenExists('.home-video.copper-full-width', function () {

	jQuery('<div class="da_banner"><h1 class="da_banner-title">Markdowns on Desks</br> and Accessories</h1><p class="da_banner-subtext"><span class="da_dash"/>for those of us on a budget.</p><a class="da_link" href="https://www.standupdeskstore.com/standing-desks/clearance">SHOP CLEARANCE</a><div class="da_orange-background"></div></div>').insertBefore('.home-video.copper-full-width');


});
