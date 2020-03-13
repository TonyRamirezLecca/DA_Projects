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
	}, 50);
}
whenExists('.js-username, #site-launch-modal-email', function () {

	if ($('.js-username').html() == '') {
		$('#site-launch-modal-email').addClass('da_hide-modal');
		setTimeout(() => {
			$('#site-launch-modal-email').removeClass('da_hide-modal');
		}, 90000);
		$('html').removeClass('no-scroll');
	}

});
