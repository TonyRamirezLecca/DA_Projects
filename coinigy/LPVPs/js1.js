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


if (window.location.href.includes('/s/i/')) {
	whenExists('body > div.row', function () {

		$('<div id="da_banner"></div>').insertAfter('body > div.row');

	});
}



