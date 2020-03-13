/*** JS 2 ***/
/* Function Declarations */
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
	function defer(callback) {
		if (window.jQuery) {
			callback();
		} else {
			setTimeout(function () { defer(callback); }, 50);
		}
	}

defer(function () {
	jQuery(function () {        
		whenExists('.no-store-selected.callout', function () {
			$('.no-store-selected.callout > figure').html('<label class="ae-label">Pick Up in-Store</label>');
		});
	});
});
