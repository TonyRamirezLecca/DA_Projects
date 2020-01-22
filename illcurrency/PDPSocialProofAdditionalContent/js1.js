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
whenExists('.search__form-input.js-search-input, .product-single__price.js-product-price', function () {
	console.log('DA');
	if ($('.da_stars').length || $('.da_stars-mobile').length) return;

	/* Star section*/
		$('<div class="da_stars" style="cursor: pointer;" >★★★★★</div>').insertAfter('.product-single__price.js-product-price');
		$('<div class="da_stars-mobile">★★★★★<span>4.9/5</span></div>').insertAfter('.js-product-price-number');

	/* Search Section */
	$('.search__form-input.js-search-input').eq(0).addClass('da_search-bar da_slide-up')
	$('.search__form-submit').eq(0).addClass('da_search-icon').hide();


	$('<div class="da_search-ctn"><i class="fa fa-search da_search"></i></div>').prependTo('.header-trigger.header-trigger--far-right.cart-draw-trigger-icon.u-flex.u-flex--middle.js-cart-draw-icon');
	$('.da_search-ctn').click(() => {
		$('.da_search-bar').removeClass('da_slide-up');
	});
	
});

whenExists('.search__form-input.js-search-input, .product-single__price.js-product-price, .product-single__content, .da_stars ', function () {
	if ($('.da_no-repeat').length) return;
	$('<div class="da_no-repeat" style="display: none"></div>').appendTo('body');
		jQuery('.da_stars').click(function() {
			event.preventDefault();
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('.product-single__content').offset().top
			}, 600);
		});
		jQuery('.da_stars-mobile').click(function() {
			event.preventDefault();
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('.product-single__content').offset().top
			}, 600);
		});
});

