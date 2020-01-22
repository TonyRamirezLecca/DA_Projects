/*** JS 4 ***/

/*** JS 3 ***/
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
whenExists('.product-single__form.js-product-form, .container.container--medium', function () {
	console.log('da');
	if ($('.da_stars').length || $('.da_stars-mobile').length) return;

	/* Star section*/
		$('<div class="da_stars" style="cursor: pointer;">★★★★★</div>').insertAfter('.product-single__price.js-product-price');
		$('<div class="da_stars-mobile">★★★★★<span>4.9/5</span></div>').insertAfter('.js-product-price-number');

	/* Search Section */
	$('.search__form-input.js-search-input').eq(0).addClass('da_search-bar da_slide-up')
	$('.search__form-submit').eq(0).addClass('da_search-icon').hide();


	$('<div class="da_search-ctn"><i class="fa fa-search da_search"></i></div>').prependTo('.header-trigger.header-trigger--far-right.cart-draw-trigger-icon.u-flex.u-flex--middle.js-cart-draw-icon');
	$('.da_search-ctn').click(() => {
		$('.da_search-bar').removeClass('da_slide-up');
	});

	if (window.innerWidth > 980) {
		$('.product-single__content').eq(0).addClass('da_product-single').insertAfter('#ProductSection-product-template .container.container--medium').eq(0);
		$('<div class="da_banner-ctn" style="margin-top: 0px"><div class="da_banner-inner-ctn"><div class="da_header"><h2>THE BEST CUSTOM<span></br></span> SNEAKER-MATCHING</br> TEES,<span></br></span> HOODIES AND SWEATSHIRTS</h2><div class="da_underline"></div></div><div class="da_banner-content"><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/working.png"/></div><div class="da_section-text"><h5>THE BEST CUSTOM</br>SNEAKER-MATCHING TEES, HOODIES AND SWEATSHIRTS</h5></br><p>Set the Trend</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/flag.png"/></div><div class="da_section-text"><h5>DESIGNED AND MADE IN THE USA</h5></br><p>Designed and manufactured by sneaker</br> enthusiasts in Pennsylvania</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/shirt.png"/></div><div class="da_section-text"><h5>EXCLUSIVE + CUSTOM APPAREL</h5></br><p>With hundreds of unique designs, no one matches sneakers better</p></div></div></div></div></div>').insertBefore('.da_product-single');

		$('.js-cart-replace > div:nth-child(2)').eq(0).remove();
	}
	else {
		$('.product-single__content').eq(0).addClass('da_product-single').insertAfter('#ProductSection-product-template .container.container--medium').eq(0);
		$('<div class="da_banner-ctn" style="margin-top: -220px"><div class="da_banner-inner-ctn"><div class="da_header"><h2>THE BEST CUSTOM<span></br></span> SNEAKER-MATCHING</br> TEES,<span></br></span> HOODIES AND SWEATSHIRTS</h2><div class="da_underline"></div></div><div class="da_banner-content"><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/working.png"/></div><div class="da_section-text"><h5>THE BEST CUSTOM</br>SNEAKER-MATCHING TEES, HOODIES AND SWEATSHIRTS</h5></br><p>Set the Trend</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/flag.png"/></div><div class="da_section-text"><h5>DESIGNED AND MADE IN THE USA</h5></br><p>Designed and manufactured by sneaker</br> enthusiasts in Pennsylvania</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/shirt.png"/></div><div class="da_section-text"><h5>EXCLUSIVE + CUSTOM APPAREL</h5></br><p>With hundreds of unique designs, no one matches sneakers better</p></div></div></div></div></div>').insertBefore('.da_product-single');
	}
});

whenExists('.search__form-input.js-search-input, .product-single__price.js-product-price, .product-single__content, .da_stars', function () {
	console.log('da2');
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

