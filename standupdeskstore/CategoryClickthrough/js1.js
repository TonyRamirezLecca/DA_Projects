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

whenExists('.products.list.items.product-items', function () {
	
	document.querySelectorAll('.products.list.items.product-items > li > div > a').forEach((el, i, arr) => {
		var href = el.getAttribute('href');
		var daHoverLink = document.createElement('div'); daHoverLink.classList.add('da_hover-link');
		var daHoverLinkAnchor = document.createElement('a'); daHoverLinkAnchor.href = href; daHoverLinkAnchor.innerHTML = "VIEW PRODUCT";
		daHoverLink.append(daHoverLinkAnchor);
	  el.querySelector('span.product-image-container').append(daHoverLink);
	});

});
