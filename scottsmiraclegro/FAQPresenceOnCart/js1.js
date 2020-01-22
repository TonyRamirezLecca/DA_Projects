/*** JS 1 ***/

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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
		whenExists('body > div.wrapper > div > div.main-container.col1-layout > div > div > div > div.col-md-7.col-lg-7.left-col > div.row.crosssell-wrapper', function () {

			jQuery('<div class="da_faq"><a href="https://www.aerogarden.com/aerogarden-customer-service-support/">Questions? Check out our FAQ</a></div>').insertBefore('body > div.wrapper > div > div.main-container.col1-layout > div > div > div > div.col-md-7.col-lg-7.left-col > div.row.crosssell-wrapper')

		});
	});
});


