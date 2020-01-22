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

whenExists('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(1) > p', function () {

	if (window.location.href.includes('/nomatic-messenger-bag') | window.location.href.includes('/nomatic-garment-bag') | window.location.href.includes('/backpack-bundle') | window.location.href.includes('/nomatic-travel-pack-bundle') | window.location.href.includes('/nomatic-travel-bag-full-bundle') | window.location.href.includes('ultimate-travel-bundle')) {
		/*remove nomatic title*/
			$('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(1) > p').hide();

		/* Move Packs for section above highlights */
			$('.col-60.d-lg-none.d-block .product-packs').css({"margin-top" : "35px"}).insertBefore('.col-60.d-lg-none.d-block .product-features');

		/*Move Price Section */
			$('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(2) > div').addClass('da_price-section').insertAfter('.col-60.d-lg-none.d-block > div > .accordion');

		/* Add social */
		$('div[data-section-type="product"] > div > div.col-60.d-lg-none.d-block > div.product-description.d-lg-block.d-block > div.product-social > div').addClass('da_social-icons');

		/* Move CTAs */
		$('.row.align-items-end.product-form.product-form--hide-variant-labels').insertAfter('.da_price-section');
		$('.col-md-60.product-btn-mobile').eq(0).addClass('da_new-cta');

		var sticky_element = ".da_new-cta";
		var sticky_element_top = jQuery('.da_social-icons').offset().top + 60;
		jQuery(window).scroll(function() {
			if ( jQuery(window).scrollTop() >= sticky_element_top ) {
				jQuery( sticky_element + ':not(.da_scroll)' ).addClass('da_scroll');
			} 
			else {
				jQuery( sticky_element + '.da_scroll' ).removeClass('da_scroll');
			}
		});
	}
	else {
		/*remove nomatic title*/
			$('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(1) > p').hide();

		/* Move Packs for section above highlights */
			$('.col-60.d-lg-none.d-block .product-packs').css({"margin-top" : "35px"}).insertBefore('.col-60.d-lg-none.d-block .product-features');

		/*Move Price Section */
			$('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(2) > div').addClass('da_price-section').insertAfter('.col-60.d-lg-none.d-block > div > .accordion');

		/* Add social */
		$('div[data-section-type="product"] > div > div.col-60.d-lg-none.d-block > div.product-description.d-lg-block.d-block > div.product-social > div').addClass('da_social-icons');

		/* Move CTAs */
		$('.row.align-items-end.product-form.product-form--hide-variant-labels').insertAfter('.da_price-section');
		$('.col-md-60.product-btn-mobile').eq(0).addClass('da_new-cta');

		var sticky_element = ".da_new-cta";
		var sticky_element_top = jQuery('.da_social-icons').offset().top + 140;
		jQuery(window).scroll(function() {
			if ( jQuery(window).scrollTop() >= sticky_element_top ) {
				jQuery( sticky_element + ':not(.da_scroll)' ).addClass('da_scroll');
			} 
			else {
				jQuery( sticky_element + '.da_scroll' ).removeClass('da_scroll');
			}
		});

	}

});
