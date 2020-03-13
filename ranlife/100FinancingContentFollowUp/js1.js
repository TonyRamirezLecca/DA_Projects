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
whenExists('.banner-text a', function () {

	$('.banner-text > p').html('Take the 1st Step Toward Home Ownership with</br> NO DOWN PAYMENT.');
	$('<h4 class="da_fancy-text">Other 100% Financing Programs</h4>').insertAfter('.banner-text > p');
	$('.banner-text > a').attr('href', 'https://www.ranlife.com/va_loans.php').html('VA HOME LOANS').addClass('custom-btn').wrap('<div class="da_cta-ctn"/>');
	$('<a class="custom-btn" href="https://www.ranlife.com/usda_loans.php">USDA HOME LOANS</a>').prependTo('.da_cta-ctn');
	$('<a class="custom-btn" href="https://www.ranlife.com/100_grants.php">HOME GRANT PROGRAMS</a>').appendTo('.da_cta-ctn');
	
	$('.row.justify-content-center.p-3 > .col-md-6:nth-child(2) > .mb-3').html('<p class="mb-3">Saving up enough money for a down payment, closing costs, and moving costs can be one of the most difficult steps in buying a home, especially for first time homebuyers. It used to be, despite having strong credit and a stable income, a homebuyer\'s dream could quickly be crushed due to the lack of a down payment. Now, with RANLife\'s <b>No Down Payment</b> program options, this dream can be a reality!');

});
