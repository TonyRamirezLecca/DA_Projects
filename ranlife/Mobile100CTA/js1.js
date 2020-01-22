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

whenExists('.container > .row > .col-sm-8 > a.btn', function () {
	$('.container > .row > .col-sm-8 > a.btn').eq(0).html('Apply Now').attr('href', 'https://www.ranlife.com/fast_track.php');
});
