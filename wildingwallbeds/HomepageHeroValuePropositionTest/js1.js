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

whenExists('.hero', function () {

	$('#slider-video').addClass('da_video').appendTo('body');

	$('.hero').html('<div class=da_hero><div class=da_headline>Maximize and<span><br></span> Beautify<span><br></span> Your <span class=zigzag-wrapper><span class="zigzag-text zigzag-text-active">Space</span> <svg preserveAspectRatio=none viewBox="0 0 500 150"xmlns=http://www.w3.org/2000/svg><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg></span></div><div class=da_value-props><div class=da_value-props-img></div></div><a href=https://www.wallbedsbywilding.com/october-murphy-bed-specials/ >View Specials</a></div>');

	$('#slider-video').appendTo('.hero');


	$('#slider-video').on('ended', () => {
		$('#slider-video').remove();
	});


});
