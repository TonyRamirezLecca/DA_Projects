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

whenExists('#tab-description > h2', function () {
	$('<div class="da_underline-h2"></div>').appendTo('#tab-description > h2');
	$('<div class="da_underline-h2"></div>').appendTo('#tab-additional_information > h2');

	/* DESKTOP CODE */
		$('<a class="da_information-link">Additional Information</a>').insertAfter('.variations_form.cart');	
		$('<a class="da_description-link">Description</a>').insertAfter('.variations_form.cart');	

	/* Anchor Links */
	jQuery('.da_information-link').click(function() {
		event.preventDefault();
		$('#tab-additional_information').show();
		$('#tab-description').hide();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#tab-title-additional_information').offset().top - 80
		}, 600);
	});

	jQuery('.da_description-link').click(function() {
		event.preventDefault();
		$('#tab-description').show();
		$('#tab-additional_information').hide();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#tab-title-description').offset().top - 80
		}, 600);
	});

	/* MOBILE CODE */
		$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(1)').addClass('da_description');

		$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(2)').addClass('da_information');

		$('<div class="da_red"></div>').appendTo('.woocommerce div.product .woocommerce-tabs ul.tabs');

		/* Default Classes */
		$('.da_red').addClass('da_move-left');
		$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(1) > a').addClass('da_move-text-left');


		/* Click Functionality For Tabs*/
		$('.da_description > a').click(() => {
			$('.da_red').addClass('da_move-left');
			$('.da_red').removeClass('da_move-right');
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(1) > a').addClass('da_move-text-left');
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(2) > a').removeClass('da_move-text-right');
		});

		$('.da_information > a').click(() => {
			$('.da_red').addClass('da_move-right');
			$('.da_red').removeClass('da_move-left');
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(2) > a').addClass('da_move-text-right');
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li:nth-child(1) > a').removeClass('da_move-text-left');
		});

});
