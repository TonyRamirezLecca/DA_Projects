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

whenExists('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul', function () {
	/* About Section */
	document.querySelector('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > a').textContent = 'About';

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(1) a').attr('href', 'https://crossoversymmetry.com/learn/shoulder-pain/').html('Pain Programs');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(2) a').attr('href', 'https://crossoversymmetry.com/learn/how-cs-works/').html('Shoulder System');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(3) a').attr('href', 'https://crossoversymmetry.com/halo/').html('Hip & Core System');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(4) a').attr('href', 'https://crossoversymmetry.com/learn/safety/').html('Safety');

	jQuery('<li class="da_faq"><a href="https://crossoversymmetry.com/learn/faq/">FAQ</a>').insertAfter('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(4)');


	/* Remove Hip & Core section */
	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(2)').hide();
	

	/* Sports Section */
	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(3) > ul > li:nth-child(2) a').hide();

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(3) > ul > li:nth-child(3) a').html('Swim');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(3) > ul > li:nth-child(7) a').hide();
});
