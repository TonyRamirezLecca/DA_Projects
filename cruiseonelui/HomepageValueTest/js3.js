/*** JS 3 ***/
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

whenExists('.section-callout > .section-body > .shell.shell-normal', function () {
	$('.section-callout > .section-body > .shell.shell-normal > p').wrapAll('<div class="da_outer-wrap"><div class="da_paragraph-wrap"></div></div>');
	$('<iframe width="560" height="315" src="https://www.youtube.com/embed/u_5QDjF3AjY?playsinline=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>').appendTo('.da_outer-wrap');
});
