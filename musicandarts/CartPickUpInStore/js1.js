/*** JS 1 ***/
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
		whenExists('div[ng-if^="cartCtrl"] > div:nth-child(3)', function () {
			$('div[ng-if^="cartCtrl"] > .content:nth-child(2)').hide();
		});
	});
});
