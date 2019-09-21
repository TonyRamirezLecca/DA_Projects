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

whenExists('.cell.small-12.medium-8.large-6', function () {
	$('.cell.small-12.medium-8.large-6').append('<a id="ctaButton" href="https://www.kimbleapps.com/product">VIEW THE PRODUCT</a>');
});

