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
whenExists('.cart-table, #checkout', function () {

	$('<div class="da_faq-ctn da_desktop"><div class="da_faq-header">FREE LIFETIME WARRANTY</div><div class="da_text">We get it, life happens. We want our bag to be there when you need it so we\'ll repeair or replace any soft goods bag and repair any luggage that becomes non-functioning.</div></div>').insertAfter('.cart-table');

	$('<div class="da_faq-ctn da_mobile"><div class="da_faq-header">FREE LIFETIME WARRANTY</div><div class="da_text">We get it, life happens. We want our bag to be there when you need it so we\'ll repeair or replace any soft goods bag and repair any luggage that becomes non-functioning.</div></div>').insertAfter('#checkout');

});
