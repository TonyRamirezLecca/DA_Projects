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

whenExists('#desktop_button', function () {

	$('#desktop_button').wrapAll('<div class="da_box"></div>');
	$('<div class="da_or">OR</div>').prependTo('.da_box');
	$('<a class="da_subheader" href="tel:866-487-3357">CALL US (866)-487-3357</a>').prependTo('.da_box');
	$('<div class="da_header">HAVE QUESTIONS?</div>').prependTo('.da_box');

	$('#desktop_button').click(() => {
		$('.da_box').hide();
	});
	
});

