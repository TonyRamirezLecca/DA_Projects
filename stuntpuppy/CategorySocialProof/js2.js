/*** JS 2 ***/
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
whenExists('.grid-view-item__link.grid-view-item__image-container', function () {
	if (window.location.href.includes('&review=true')) {
		setTimeout(() => {
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('#thereviews').offset().top
			}, 600);
		}, 800);
	}
	else {
		setTimeout(() => {
			document.querySelectorAll('.grid-view-item__link.grid-view-item__image-container:nth-child(3)').forEach((el, i, arr) => {
				var href = el.getAttribute('href');
				href = href + "&review=true";
				el.setAttribute('href', href);
			});
			document.querySelectorAll('.spr-badge[data-rating="0.0"]').forEach((el, i, arr) => {
				var trimmedHref = el.parentNode.parentNode.getAttribute('href');
				trimmedHref = trimmedHref.replace('&review=true','');
				el.parentNode.parentNode.setAttribute('href', trimmedHref);
			});
		}, 1000);
	}
});

