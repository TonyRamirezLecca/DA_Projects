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
whenExists('.col-sm-4 .btn.btn-primary.btn-lg[href="/Get-Started"]', function () {

	$('.col-sm-4 .btn.btn-primary.btn-lg[href="/Get-Started"]').html('Get Your Free Consultation');

});
