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

//starting page
whenExists('body.value', function () {
	if (window.location.href.includes('/purchase/value')) {
		$('#next').html('Estimated Down Payment <span>&#8250;</span>');
	}
	else if (window.location.href.includes('/refinance/value')) {
		$('#next').html('Current Loan Balance <span>&#8250;</span>');
	}
});
