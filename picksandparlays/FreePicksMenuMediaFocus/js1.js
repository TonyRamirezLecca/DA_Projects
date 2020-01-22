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

		whenExists('nav[role="navigation"] > ul > li:nth-child(3)', function () {

			jQuery('<li><a href="https://freepicks.picksandparlays.net/more-free-picks/podcast">Podcasts</a></li>').insertAfter('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3)').eq(0);
			jQuery('<li><a href="https://freepicks.picksandparlays.net/more-free-picks/videos">Videos</a></li>').insertAfter('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3)').eq(0);

		});

	});
});


