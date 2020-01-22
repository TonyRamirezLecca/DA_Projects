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

whenExists('.slick-list.draggable, .cbb-also-bought-container, .product-list-item:nth-child(2), .ba-bundle-wrapper', function () {
	/* Create Pop Up */
		/* creates popup background and popup */
			$('<div class="da_popup-background" style="display: none;"></div>').appendTo('body');
			$('<div class="da_popup" style="display: none;"><div class="da_header"><h1>HOW TO USE IT</h1><i class="fas fa-times-circle da_popup-close-btn"></i></div><div class="da_video"><iframe width="580" height="335" src="https://www.youtube.com/embed/E-LZgSNQm_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="da_list"><ul><li><strong>Step 1:</strong> Thoroughly wash surface.</li><li><strong>Step 2:</strong> Clay surface well to remove contaminants. (optional)</li><li><strong>Step 3:</strong> Machine polish away imperfections, swirl marks, and scratches. (optional)</li><li><strong>Step 4:</strong> Prep the surface with Prep Spray to remove lingering residues.</li><li><strong>Step 5:</strong> For best results, spray Cermaic Spray Coating onto applicator or microfiber towel</li><li><strong>Step 6:</strong> Apply evenly to cover surface being treated.</li><li><strong>Step 7:</strong> After application, wait 2 minutes, then wipe excess away. You may repeat for extra layers</li><li><strong>Step 8:</strong> After Ceramic Spray Coating treatment is applied, it is ideal to keep it out of the elements, dry and clean for 20 minutes.</li><li><strong>Step 9:</strong> Maintain your coating using Si02 Quick Coat for maximum shine and longevity</li></ul></div></div>').appendTo('body');
			$('<div class="da_popup-video" style="display: none;"><i class="fas fa-times-circle da_popup-close-btn"></i><iframe width="560" height="315" src="https://www.youtube.com/embed/1ZNGBDNlfZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').appendTo('body');
		var fontAwesome5 = document.createElement("link");
		fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
		fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
		document.querySelector("head").appendChild(fontAwesome5);

		/* Close Pop Up On Background Click */
			$('.da_popup-background').click(() => {
				$('.da_popup-background').fadeOut();
				$('.da_popup').fadeOut();
				$('.da_popup-video').fadeOut();
			})
		/* Close Pop Up Button Functionality */
			$('.da_popup-close-btn').click(() => {
				$('.da_popup-background').hide();
				$('.da_popup').hide();
				$('.da_popup-video').hide();
			})
	/* Change Title */
		$('.product-wrap.two-column > .product-form').addClass('da_product-info-ctn');
		$('#product-form > h1').html('<strong>CERAMIC COATING STARTER PACK - </strong></br>Prep, Coat, Maintain 16oz Each');
	/* Add Review stars and scroll down to review section on click */
		$('<div class="da_reviews"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/star.png"/> <span>(83 reviews)</span></div>').insertAfter('#product-form > h1');
		jQuery('.da_reviews').click(function() {
			event.preventDefault();
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('#wc_review_section').offset().top
			}, 600);
		});
	/* Add quantity buttons */
		$('<button class="da_minus">-</button>').insertBefore('#quantity');
		$('<button class="da_plus">+</button>').insertAfter('#quantity');
		$('.da_minus').click(() => {
			event.preventDefault();
			if (document.querySelector('#quantity').value < 1) return;
			document.querySelector('#quantity').value--
		});
		$('.da_plus').click(() => {
			event.preventDefault();
			document.querySelector('#quantity').value++
		});
		$('.da_minus, .da_plus, #quantity').wrapAll('<div class="da_quantity-wrap"></div>');
	/* Add VPs */
		$('<div class="da_vp1-ctn"><div class="da_vp1"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/steeringwheel.png"/><p>WHY PROJE?</p></div><div class="da_vp1"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/spray.png"/><p>HOW TO </br>USE IT</p></div></div>').insertAfter('.product-submit');
	/* Add Second VPs */
		$('<div class="da_vp2-ctn"><h6>The Proje Guarantee</h6><div class="da_vp2-wrap"><div class="da_vp2"><div class="da_vp2-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/SHINE.png"/></div><p>Superior Protection </br>& Shine</p></div><div class="da_vp2"><div class="da_vp2-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/guarantee.png"/></div><p>100% </br>Satisfaction</p></div><div class="da_vp2"><div class="da_vp2-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/seal.png"/></div><p>Safe & Secure </br>Checkout</p></div></div></div>').insertAfter('.da_vp1-ctn');
	/* Add Third VPs Section */
		$('<div class="da_vp3-ctn"><div class="da_vp3"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/thumbsup.png"/><h6>Easy To Use</h6></div><div class="da_vp3"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/cloud.png"/><h6>Protective Layer Against The Elements</h6></div><div class="da_vp3"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/car.png"/><h6>Brilliant Shine, Rich Color</h6></div><div class="da_vp3"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/motorcycle.png"/><h6>Works On Any Type Of Vehicle</h6></div></div>').insertAfter('.product-wrap.two-column.clearfix');
	/* Why Buy This Product? FAQ Section */
		$('<div class="da_faq"><div class="da_why-buy"><h4>WHY BUY THIS PRODUCT?</h4><p>Ceramic Spray Coating by Proje is consumer friendly, easy-to-use ceramic coating that you can apply yourself! No professional detailer required. Just apply, wait 2 minutes, and wipe away! Achieve a true ceramic depth and shine. Protect your investment from harmful elements your paint normally has to endure.</p><ul><li><i class="fas fa-check da_check"></i>Do It Yourself - Save Thousands!</li><li><i class="fas fa-check da_check"></i>Apply To Surface, Wipe Away In 2 Minutes!</li><li><i class="fas fa-check da_check"></i>Instant WOW factor depth, clarity, and shine.</li><li><i class="fas fa-check da_check"></i>Hydrophobic Properties Make Washing Easy</li><li><i class="fas fa-check da_check"></i>Solid Protection You Can Count On</li><li><i class="fas fa-check da_check"></i>Layerable. More Layers, More Shine!</li><li><i class="fas fa-check da_check"></i>Apply To Wheels, Windows, Plastic, Rubber, & More!</li><li><i class="fas fa-check da_check"></i>16oz Lasts Up To 5 to 10 Coats!</li></ul></div><div class="da_consumer-friendly"><h4>Consumer Friendly Ceramic Coating</h4><p>Now anyone can apply a ceramic coating to their own car to achieve ultimate protection, eye-popping clarity, and ultra-reflective shine! No need to pay a professional to install a traditional ceramic coating thousands of dollars. Do it yourself now for as little as $39.95! Don’t worry about the product drying within seconds, leaving permanent streaks and damage that you can’t undo. Easily apply, wait 2 minutes and wipe away!</p></div><div class="da_hydrophobic-paint"><h4>Hydrophobic Paint Protection</h4><p>Ceramic Spray Coating by Proje cures to a clear ceramic shell that stand between your cars paint, and the worlds harmful elements. Not only this, the surface is hydrophobic which means elements slide off your car, which means you don’t have to wash your car as often. Protect from UV rays, oxidation, water, pollen, fallout, acid rain, light rocks, and more!</p></div><div class="da_eye-popping"><h4>Eye-Popping Clarity, Depth & Shine</h4><p>Not only does the product offer easy application, and ultimate protection, it also offers a paint clarity, depth, and shine you will be stunned by. This effect does not take time, you will see it right away. Your vehicle will become increasingly reflective, shining, deeper and dark, plus clarity that will allow you to see every paint flake allowing you to truly appreciate your paint job.</p></div></div>').insertAfter('.da_vp3-ctn');
		jQuery('.da_vp1:nth-child(1)').click(function() {
			event.preventDefault();
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('.da_why-buy').offset().top
			}, 600);
		});
		jQuery('.da_vp1:nth-child(2)').click(function() {
			event.preventDefault();
				$('.da_popup-background').fadeIn();
				$('.da_popup').fadeIn();
		});
	/* Bundle and Save Related Products */
		$('<div class="da_bundle-related"><div class="da_bundle"></div><div class="da_related"><div class="da_related-header">Related Products</div><div class="da_related-wrap"></div></div><div class="da_gray"></div></div>').insertAfter('.da_faq');
		$('.ba-bundle-wrapper').appendTo('.da_bundle');
		$('.related-products-listing.-layout.under-style.rows-of-4 > div:nth-child(1)').appendTo('.da_related-wrap');
		$('.related-products-listing.-layout.under-style.rows-of-4 > div:nth-child(1)').appendTo('.da_related-wrap');
		/* Create Mobile Related Products and Share Media Button*/
			$('.share-buttons[disabled="disabled"]').remove();
			$('.share-buttons').insertAfter('.slick-slider.slick-initialized.slick-dotted');
			$('<div class="da_mobile-related-products"><h6>RELATED PRODUCTS</h6></div>').insertAfter('.share-buttons').eq(0);
			$('.related-products-listing.-layout.under-style.rows-of-4 > div:nth-child(1)').appendTo('.da_mobile-related-products');
			$('.related-products-listing.-layout.under-style.rows-of-4 > div:nth-child(1)').appendTo('.da_mobile-related-products');
	/* Move Slick Slider After Bundle and Related */
		$('.primary-images').insertAfter('.da_bundle-related');
		//
	/* Move Also Bought Section */
		$('.cbb-also-bought-container').insertAfter('.primary-images');
		$('<div class="da_gray"></div>').appendTo('.cbb-also-bought-container');
	/* Add Watch Video Button */
		$('<div class="da_watch-video-btn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/watchvideo.png"/>Watch the Video</div>').insertBefore('.da_product-info-ctn');
		$('<div class="da_watch-video-btn-desktop"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/proje/ceramic-page-redesign/watchvideo.png"/>Watch the Video</div>').appendTo('.da_product-info-ctn');
		jQuery('.da_watch-video-btn, .da_watch-video-btn-desktop').click(function() {
			event.preventDefault();
			$('.da_popup-background').fadeIn();
			$('.da_popup-video').fadeIn();
		});
	/* Product Info Edits */
		$('<div class="da_product-gray"></div>').appendTo('.da_product-info-ctn');
		//
	/* Speed up Slider */
		jQuery(".slick-slider").slick('unslick');
		jQuery('.primary-images > div:nth-child(2)').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			dots: true,
			infinite: true,
			speed: 1500
		});
});

