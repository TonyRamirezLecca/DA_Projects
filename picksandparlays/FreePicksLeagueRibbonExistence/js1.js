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

		whenExists('.container.grid > main nav[role="navigation"] > ul > li:nth-child(6)', function () {
			console.log("DA_Script");

			jQuery('.container.grid > main nav[role="navigation"] > ul > li:nth-child(6)').eq(0).prependTo('.container.grid > main nav[role="navigation"] > ul > li:nth-child(8) > ul');

		});

	});
});

