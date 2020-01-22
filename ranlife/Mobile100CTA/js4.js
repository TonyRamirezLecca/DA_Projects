/*** JS 4 ***/

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
	$('.container > .row > .col-sm-8 > a.btn').eq(0).addClass('da_apply-now').html('Apply Now').attr('href', 'https://www.ranlife.com/fast_track.php');

	/* Move image */
	$('body > div.container > div > div.col-sm-4 > img').addClass('da_image').appendTo('.container:nth-child(4) > .row');
	

	/* Create container */
	$('<div class="da_container"></div>').prependTo('.container:nth-child(4) > .row');
	/* Move headline */
	$('body > div.container > div > div.col-sm-8 > h1').addClass('da_headline').prependTo('.da_container');;
	/* Move p1 and p2 */
	$('body > div.container > div > div.col-sm-8 > p:nth-child(1)').addClass('da_paragraph1').insertAfter('.da_headline');
	$('body > div.container > div > div.col-sm-8 > p:nth-child(1)').addClass('da_paragraph2').insertAfter('.da_paragraph1');

	//Move section to bottom
	$('body > div.container > div > div.col-sm-8').insertBefore('.da_image');

	$('<a class="da_apply-now2" href="https://www.ranlife.com/fast_track.php">Apply Now</a>').insertAfter('.da_paragraph2');


});
