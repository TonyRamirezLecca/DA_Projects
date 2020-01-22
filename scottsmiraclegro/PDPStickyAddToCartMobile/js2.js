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
			//Create Sticky
			jQuery('<div class="da_sticky"><h2><span class="da_cart"></span>Add to cart</h2></div>').appendTo('body');

			//Add to cart
			jQuery('.da_sticky').click(() => {
				jQuery('.add-to-cart-btn').click();
			});

			var sticky_element = ".add-to-cart-btn";
			var sticky_element_top = jQuery( sticky_element ).offset().top + 40;
			jQuery(window).scroll(function() {
				if ( jQuery(window).scrollTop() >= sticky_element_top ) {
					jQuery('.da_sticky').slideDown();
					jQuery('.site-header.header-fixed.animated').addClass('da_slide-far');
				} 
				else {
					jQuery('.da_sticky').slideUp();
					jQuery('.site-header.header-fixed.animated').removeClass('da_slide-far');
				}
			});
		});
	});
});




