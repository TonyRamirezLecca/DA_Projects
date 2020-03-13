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
whenExists('.cart-table, #checkout', function () {

	$('<div class="da_faq-ctn da_desktop"><div class="da_faq-header">SHIPPING & WARRANTY FAQS</div><div class="da_faq-section"><div class="da_faq-section-header">Q: How much is shipping? <i class="fas fa-plus-circle da_plus"></i><i class="fas fa-minus-circle da_minus" style="display: none;"></i></div><div class="da_faq-section-content"><div class="da_answer-label">A:</div><div>Shipping is free for orders over $50 within the United States. Packages typically arrive within 3-5 business days.</div></div></div><div class="da_faq-section"><div class="da_faq-section-header">Q: What if I live outside of the United States? <i class="fas fa-plus-circle da_plus"></i><i class="fas fa-minus-circle da_minus" style="display: none;"></i></div><div class="da_faq-section-content"><div class="da_answer-label">A:</div><div>We ship to nearly all countries.The cost of shipping will vary from location and package size. Before you checkout you will be given different shipping quotes for your order that will give you a custom shipping quote for your order depending on the weight, dimension, and location your order is shipping to. Packages typically arrive within 3-6 business days.</div></div></div><div class="da_faq-section"><div class="da_faq-section-header">Q: What if my bag or luggage breaks? <i class="fas fa-plus-circle da_plus"></i><i class="fas fa-minus-circle da_minus" style="display: none;"></i></div><div class="da_faq-section-content"><div class="da_answer-label">A:</div><div>We’ve got you covered if your bag or luggage becomes defective or non-functioning. We’ll repair or replace any soft gear bag that becomes defective. We’ll repair any luggage that becomes non-functioning.</div></div></div></div>').insertAfter('.cart-table');


	$('<div class="da_faq-ctn da_mobile"><div class="da_faq-header">SHIPPING & WARRANTY FAQS</div><div class="da_faq-section"><div class="da_faq-section-header">Q: How much is shipping? <i class="fas fa-plus-circle da_plus"></i><i class="fas fa-minus-circle da_minus" style="display: none;"></i></div><div class="da_faq-section-content"><div class="da_answer-label">A:</div><div>Shipping is free for orders over $50 within the United States. Packages typically arrive within 3-5 business days.</div></div></div><div class="da_faq-section"><div class="da_faq-section-header">Q: What if I live outside of the United States? <i class="fas fa-plus-circle da_plus"></i><i class="fas fa-minus-circle da_minus" style="display: none;"></i></div><div class="da_faq-section-content"><div class="da_answer-label">A:</div><div>We ship to nearly all countries.The cost of shipping will vary from location and package size. Before you checkout you will be given different shipping quotes for your order that will give you a custom shipping quote for your order depending on the weight, dimension, and location your order is shipping to. Packages typically arrive within 3-6 business days.</div></div></div><div class="da_faq-section"><div class="da_faq-section-header">Q: What if my bag or luggage breaks? <i class="fas fa-plus-circle da_plus"></i><i class="fas fa-minus-circle da_minus" style="display: none;"></i></div><div class="da_faq-section-content"><div class="da_answer-label">A:</div><div>We’ve got you covered if your bag or luggage becomes defective or non-functioning. We’ll repair or replace any soft gear bag that becomes defective. We’ll repair any luggage that becomes non-functioning.</div></div></div></div>').insertAfter('#checkout');

	/* Drop Down Functionality */
	$('.da_faq-section-header').click(function() {
		console.log('click');
		var shouldBeOpen = false;

		$(this).next().toggleClass('da_open');
		if ($(this).next().hasClass('da_open')) {
			console.log('should be open = true');
			shouldBeOpen = true;
		}

		$('.da_faq-section-content.da_open').removeClass('da_open');
		$('.da_plus').show();
		$('.da_minus').hide();

		if (shouldBeOpen) {
			console.log('adding class');
			$(this).next().addClass('da_open');
			$(this).find('.da_plus').hide();
			$(this).find('.da_minus').show();
		}

	});

});
