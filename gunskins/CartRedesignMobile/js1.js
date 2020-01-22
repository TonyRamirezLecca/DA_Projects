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
whenExists('#update-cart', function () {

	/* Add Classes */
		/* update cart spot (now hidden, but I'll put stuff before it */
		$('#update-cart').addClass('da_update-cart');
		/* coupon input */
		$('input[placeholder="Enter coupon code"]').addClass('da_coupon-input');
		/* coupon button*/
		$('input[value="Apply coupon"]').addClass('da_coupon-btn');
		/* Subtotal Text*/
		$('.subtotal').addClass('da_subtotal');
		/* Total Price */
		$('.total-price').addClass('da_total-price');
		/* Subtotal  Section where coupon is going*/
		$('.sub-total').addClass('da_subtotal-section')
		/* Toggle note */
		$('#toggle-note').addClass('da_note');

	/* Move elements */
		$('.da_total-price').insertAfter('.da_coupon-btn');
		$('.da_subtotal').insertBefore('.da_total-price');
		$('.da_coupon-input').insertBefore('.da_update-cart');
		$('.da_coupon-btn').insertBefore('.da_update-cart');

	/* Change note placeholder */
	$('.da_note textarea').attr('placeholder', 'Leave a note for the order');

	/* Wrap Coupon and Subtotal Sections */
	$('.da_subtotal, .da_total-price').wrapAll('<div class="da_subtotal-wrapper"></div>');
	$('.da_coupon-input, .da_coupon-btn').wrapAll('<div class="da_coupon-wrapper"></div>');

	/* Add class to coupon parent */
	$('.da_coupon-wrapper').parent().addClass('da_coupon-wrapper-parent');
	$('.da_coupon-wrapper-parent').prev().hide();
	$('.da_coupon-wrapper-parent').prev().hide();

	whenExists('.coupon_code_invalid_msg', () => {
		console.log("Error");
		$('.coupon_code_invalid_msg').parent().addClass('da_error-code-parent');
		$('#delivery_timer_wrapper').addClass('da_move-timer-down');
	});
	whenExists('.wholesale-additional-discount-applied', () => {
		console.log("Coupon Applied");
		$('.wholesale-additional-discount-applied').parent().addClass('da_error-code-parent');
		$('#delivery_timer_wrapper').addClass('da_move-timer-down');
	});
	
});
