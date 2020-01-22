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

//starting page
whenExists('body.value', function () {
	if (window.location.href.includes('/purchase/value') || window.location.href.includes('/refinance/value')) {
		$('<div class="da_banner"><h5>Get Your Custom Quote</br> in Less than <span>3 Minutes</span></h5></div>').prependTo('.transition-container > div > .question-layout');
	}
});

