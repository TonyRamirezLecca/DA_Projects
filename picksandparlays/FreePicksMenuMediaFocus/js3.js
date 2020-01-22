/*** JS 3***/

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

			if (jQuery(window).width() <= 1250) {
				whenExists('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4)', function () {
					jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > a').html('Media & More')
					jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3) > ul > li:nth-child(1)').clone().appendTo('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > ul');
					jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3) > ul > li:nth-child(2)').clone().appendTo('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > ul');
				});
			}

			jQuery(window).resize(() => {
				if (jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > ul > li').length < 3) {
					if (jQuery(window).width() <= 1250) {
						whenExists('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4)', function () {
							jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > a').html('Media & More')
							jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3) > ul > li:nth-child(1)').clone().appendTo('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > ul');
							jQuery('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(3) > ul > li:nth-child(2)').clone().appendTo('.primary-nav.nav-block > .container.flex > div > div > nav[role="navigation"] > ul > li:nth-child(4) > ul');
						});
					}
				}
			});
		});

	});
});

