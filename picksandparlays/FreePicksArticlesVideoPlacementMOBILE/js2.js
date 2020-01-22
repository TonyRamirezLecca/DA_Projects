
/*** JS 2 ***/
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

		whenExists('.teads-ui-components-adchoices', function () {

			jQuery('.article-video.mobile').clone().insertBefore(jQuery('.teads-ui-components-adchoices').parent());
			jQuery(jQuery('.teads-ui-components-adchoices').parent()).insertBefore('.article-video.mobile').eq(1);


		});

	});
});
