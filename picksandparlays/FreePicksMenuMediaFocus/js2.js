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

		jQuery(document).ready(() => {
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

			whenExists('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3) > a', function () {
				document.querySelector('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3) > a').textContent = 'Video + Podcast';
			});
		});

	});
});



