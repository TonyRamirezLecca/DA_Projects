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
whenExists('.product-single__form.js-product-form', function () {
	console.log('loop');

	if (window.innerWidth > 980) {
		$('.product-single__content').eq(0).addClass('da_product-single').insertAfter('#ProductSection-product-template .container.container--medium').eq(0);
		$('<div class="da_banner-ctn" style="margin-top: 0px"><div class="da_banner-inner-ctn"><div class="da_header"><h2>THE BEST CUSTOM<span></br></span> SNEAKER-MATCHING</br> TEES,<span></br></span> HOODIES AND SWEATSHIRTS</h2><div class="da_underline"></div></div><div class="da_banner-content"><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/working.png"/></div><div class="da_section-text"><h5>THE BEST CUSTOM</br>SNEAKER-MATCHING TEES, HOODIES AND SWEATSHIRTS</h5></br><p>Set the Trend</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/flag.png"/></div><div class="da_section-text"><h5>DESIGNED AND MADE IN THE USA</h5></br><p>Designed and manufactured by sneaker</br> enthusiasts in Pennsylvania</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/shirt.png"/></div><div class="da_section-text"><h5>EXCLUSIVE + CUSTOM APPAREL</h5></br><p>With hundreds of unique designs, no one matches sneakers better</p></div></div></div></div></div>').insertBefore('.da_product-single');

		$('.js-cart-replace > div:nth-child(2)').eq(0).remove();
	}
	else {
		$('.product-single__content').eq(0).addClass('da_product-single').insertAfter('#ProductSection-product-template .container.container--medium').eq(0);
		$('<div class="da_banner-ctn" style="margin-top: -220px"><div class="da_banner-inner-ctn"><div class="da_header"><h2>THE BEST CUSTOM<span></br></span> SNEAKER-MATCHING</br> TEES,<span></br></span> HOODIES AND SWEATSHIRTS</h2><div class="da_underline"></div></div><div class="da_banner-content"><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/working.png"/></div><div class="da_section-text"><h5>THE BEST CUSTOM</br>SNEAKER-MATCHING TEES, HOODIES AND SWEATSHIRTS</h5></br><p>Set the Trend</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/flag.png"/></div><div class="da_section-text"><h5>DESIGNED AND MADE IN THE USA</h5></br><p>Designed and manufactured by sneaker</br> enthusiasts in Pennsylvania</p></div></div><div class="da_section1 da_section"><div class="da_img-ctn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/ill-currency/pdp-social-proof-additional-content/shirt.png"/></div><div class="da_section-text"><h5>EXCLUSIVE + CUSTOM APPAREL</h5></br><p>With hundreds of unique designs, no one matches sneakers better</p></div></div></div></div></div>').insertBefore('.da_product-single');
	}

	document.querySelectorAll('.da_banner-ctn').forEach((el, i, arr) => {
		if (i == 0) return;
		console.log(i);
		el.setAttribute('style', 'display: none !important;');
	});

});
