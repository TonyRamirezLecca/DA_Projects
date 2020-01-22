/*** JS 2 ***/

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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
		whenExists('.pdp-block', function () {

			//headline
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > div.pdp-desc').addClass('da_headline');

			//seperator
			jQuery('<div class="da_seperator"/>').insertAfter('.da_headline');
			
			//hide
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > div:nth-child(3) > div > div:nth-child(3)').addClass('da_hide');
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > div:nth-child(3) > div > div:nth-child(4)').addClass('da_hide');
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > form > div.quantity-update > label').addClass('da_hide');

			//price
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > div.pdp-price').addClass('da_price');

			//form container
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > form').addClass('da_form');

			//quantity container
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > form > div.quantity-update > div').addClass('da_quantity-container');

			//minus and plus
			jQuery('.minus.change-quantity').addClass('da_minus');
			jQuery('.plus.change-quantity').addClass('da_plus');
			//quanity
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > form > div.quantity-update > div > input').addClass('da_quantity');

			//add to cart
			jQuery('#shopify-section-pdp-banner-slider > div > div > div.pdp-block > form > div.button').addClass('da_add-to-cart');


			var sticky_element = ".pdp-block";
			var sticky_element_top = jQuery( sticky_element ).position().top + jQuery(sticky_element).height() ;

			jQuery( window ).resize(function() {
				if (window.innerWidth < 1050) {
						jQuery('.pdp-block').insertAfter('#shopify-section-pdp-banner-slider > div > div > div.main-slider.owl-carousel.owl-loaded.owl-drag');
				}
			});

				jQuery(window).scroll(function() {
					if ( jQuery(window).scrollTop() >= sticky_element_top ) {
						if (window.innerWidth < 1050) {
							jQuery('.pdp-block').insertAfter('#shopify-section-pdp-banner-slider > div > div > div.main-slider.owl-carousel.owl-loaded.owl-drag');
							return;
						}
						jQuery( sticky_element + ':not(.da_scroll)' ).addClass('da_scroll');
						jQuery('.pdp-block').appendTo('body');
					} 
					else {
						jQuery( sticky_element + '.da_scroll' ).removeClass('da_scroll');
						jQuery('.pdp-block').insertAfter('#shopify-section-pdp-banner-slider > div > div > div.main-slider.owl-carousel.owl-loaded.owl-drag');
					}
				});
			
		});

	});
});

	
/*** JS 2 ***/
