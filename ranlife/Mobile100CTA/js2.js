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

whenExists('.container > .row > .col-sm-8 > a.btn', function () {

	/* Move image */
	$('body > div.container > div > div.col-sm-4 > img').addClass('da_image').appendTo('.container:nth-child(4) > .row');
	

	/* Create container */
	$('<div class="da_container"></div>').prependTo('.container:nth-child(4) > .row');
	/* Move headline */
	$('body > div.container > div > div.col-sm-8 > h1').addClass('da_headline').prependTo('.da_container');;
	/* Move p1 and p2 */
	$('body > div.container > div > div.col-sm-8 > p:nth-child(1)').addClass('da_p1').insertAfter('.da_headline');
	$('body > div.container > div > div.col-sm-8 > p:nth-child(1)').insertAfter('.da_p1');

	//Move section to bottom
	$('body > div.container > div > div.col-sm-8').insertBefore('.da_image');
});
