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

whenExists('.col-sm-8 > div:nth-child(7)', function () {
	jQuery('.col-sm-8 > div:nth-child(5), .col-sm-8 > div:nth-child(6), .col-sm-8 > div:nth-child(7), .col-sm-8 > a:nth-child(8)').wrapAll('<div class="gov-choice-wrapper"/>');

	$('.gov-choice-wrapper').insertAfter('.col-sm-8 > .col-sm-12');

	$('<div class="leftBackground"></div>').appendTo('.col-sm-8 > .col-sm-12');


});

