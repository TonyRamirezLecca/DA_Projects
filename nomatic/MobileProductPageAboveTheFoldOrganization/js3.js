/*** JS 3 ***/

if (window.innerWidth <= 500) {

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
		$('.product-single__photos.col-lg-30').prependTo('.row.product-single.flex-md-row-reverse');
		$('<div class="da_check-out"><span>CHECK OUT WHAT THIS BAG CAN DO!</span><span><i class="fas da_arrow fa-arrow-right"></i><span></div>').insertAfter('.product-single__photos.col-lg-30');
		$('div[data-section-type="product"] > div > div.col-60.d-lg-none.d-block > div.product-description.d-lg-block.d-block > div.product-social > div').addClass('da_social-icons');
		jQuery('.da_check-out').click(function() {
			event.preventDefault();
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('#shopify-section-product-videos .row').offset().top - 70
			}, 600);
		});
		if (window.location.href.includes('/nomatic-messenger-bag') | window.location.href.includes('/nomatic-garment-bag') | window.location.href.includes('/backpack-bundle') | window.location.href.includes('/nomatic-travel-pack-bundle') | window.location.href.includes('/nomatic-travel-bag-full-bundle') | window.location.href.includes('ultimate-travel-bundle')) {
			$('.col-md-60.product-btn-mobile').eq(0).addClass('da_new-cta');
			var sticky_element = ".da_new-cta";
			var sticky_element_top = jQuery('.da_social-icons').offset().top - 150;
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
			$('.col-md-60.product-btn-mobile').eq(0).addClass('da_new-cta');
			var sticky_element = ".da_new-cta";
			var sticky_element_top = jQuery('.da_social-icons').offset().top - 170;
			console.log(sticky_element_top);
			console.log(window.pageYOffset);
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

}
