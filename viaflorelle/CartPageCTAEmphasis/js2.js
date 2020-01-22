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
whenExists('.btn.half-bottom, #streamthing_shipping_terms_of_service, #streamthing_fulfillment_date, label[for="cartSpecialInstructions"]', function () {
	if ($('.da_checkout').length) return;

	$('<style>@media screen and (min-width:769px){.btn.half-bottom{position:relative}.da_popup{position:absolute;left:50%;top:90%;transform:translate(-50%,0);background:#ececec;width:130%;display:flex;padding:9px 10px;justify-content:center;align-items:center;box-shadow:0 2px 14px #929292}.da_exclamation{margin-right:10px;display:flex;margin-left:5px}.da_exclamation i{color:#862d4e;font-size:16px}.da_popup-text{font-size:14px;font-weight:500;color:#862d4e;white-space:normal!important;text-transform:none;text-align:left;line-height:13px;letter-spacing:0}.da_product-info-ctn{display:flex;align-items:center}.da_update-cart{font-family:Muli,sans-serif!important;margin-right:45px;cursor:pointer}.btn-outline.update-cart{display:none}.da_remove{background:#dcdcdc;margin-right:25px}.da_quantity{max-width:90px!important;margin-bottom:0!important;margin-right:25px!important}.da_price{margin-bottom:0}.da_data-line-wrapper{display:flex}.da_data-line-wrapper-right{flex:1;border:1px solid #ececec;padding-top:20px;margin-left:30px;height:300px}.da_data-line-wrapper-left{flex:1.4}.da_data-line-wrapper-left .grid-item.large--seven-twelfths{width:100%}.da_data-line-wrapper-right .grid-item.text-center{padding-left:0}.da_data-line-wrapper-right .grid-item.text-center.header-message{display:none}.da_data-line-wrapper-right .grid-item.large--three-fifths.medium--one-half.text-center{display:none}.da_data-line-wrapper-right .grid-item.text-center.header-message{display:none}.da_data-line-wrapper-right .grid-item.text-center.half-bottom{display:none}.da_data-line-wrapper-right .social-footer.inline-list.social-icons-bigger{display:none}.da_data-line-wrapper-right .cart-subtotal{margin-bottom:0}.da_data-line-wrapper-right .btn.half-bottom{margin-bottom:25px!important;margin-top:0}.da_data-line-wrapper-right .cart-subtotal__note.secondary-font{width:75%;margin:0 auto}.da_bottom-wrapper{display:flex}.da_bottom-wrapper>.grid{margin-right:30px;flex:1.4}#streamthing_DOM_insertion_point{flex:1}#notification_message{display:none}#fulfillment_body{padding-top:15px}.v-space{display:none}#shipping_fulfillment_body{padding:0!important}#shipping_fulfillment_body>h3{margin-bottom:10px!important;white-space:nowrap}.da_red-shipping-text{color:#a7192a;margin-top:-5px;margin-bottom:20px;font-size:14px}.da_checkout{background:#dadada!important;border:none}.da_checkout.da_checkout-ready{background:#862d4e!important}}@media screen and (max-width:768px){#shopify-section-header .grid--full>.grid-item.logo-col{position:absolute;width:50%;left:50%;top:0;transform:translate(-50%,-87%);z-index:9999}#shopify-section-header .grid--full .grid-item.text-center.header-message{display:none}.site-header{height:0}#mobileNavBar{padding:5px 0}.wrapper.main-content.simpleFade.two{padding-top:0}.cart-form h1{font-size:28px;margin-bottom:0}.cart-form p:nth-child(3){display:none}.cart-row[data-line="1"]{margin-top:-10px}div.cart-row:not([data-line]){padding-top:10px}div.cart-row:not([data-line])>.grid>.grid-item{margin-bottom:0!important}.da_delivery-text{text-align:center;margin-bottom:20px}#notification_message{display:none}#shipping_fulfillment_body>h3{margin-bottom:0!important;font-size:20px;white-space:nowrap}.da_red-shipping-text{color:#a7192a;margin-top:-5px;margin-bottom:20px;font-size:14px}.padded-box-white.border.half-bottom>h3{white-space:nowrap;font-size:24px;text-align:center}#cartSpecialInstructions{display:none}label[for=cartSpecialInstructions]{display:flex;justify-content:center;align-items:center}#cartSpecialInstructions{min-height:0!important;height:100px}.da_arrow-down{font-weight:800;font-size:20px}.da_arrow-up{font-weight:800;font-size:20px}.btn.half-bottom{position:relative}.da_popup{position:absolute;left:50%;top:90%;transform:translate(-50%,0);background:#ececec;width:130%;display:flex;padding:9px 10px;justify-content:center;align-items:center;box-shadow:0 2px 14px #929292}.da_exclamation{margin-right:10px;display:flex;margin-left:5px}.da_exclamation i{color:#862d4e;font-size:16px}.da_popup-text{font-size:14px;font-weight:500;color:#862d4e;white-space:normal!important;text-transform:none;text-align:left;line-height:13px;letter-spacing:0}.da_checkout{background:#dadada!important;border:none}.da_checkout.da_checkout-ready{background:#862d4e!important}.da_product-info-ctn{display:flex;align-items:center}.da_update-cart{display:none}.btn-outline.update-cart{display:none}.da_remove{background:#dcdcdc;margin-right:25px}.da_quantity{max-width:90px!important;margin-bottom:0!important;margin-right:25px!important}.da_price{margin-bottom:0;font-size:18px}.grid-item.one-third.large--one-quarter{display:flex;justify-content:center;align-items:center;min-height:100%!important;padding-left:20px}.grid-item.one-third.large--one-quarter a{margin-bottom:0;display:flex;justify-content:center;align-items:center}}@media screen and (max-width:360px){#shipping_fulfillment_body>h3{white-space:normal}.padded-box-white.border.half-bottom>h3{white-space:normal}}</style>').appendTo('head');

	console.log('Disruptive Advertising');
	if (window.innerWidth > 769) {
		/* Move the price and quantity to the left */
		$('.cart-row[data-line]').each(function() {
			$('<div class="da_product-info-ctn"><div class="da_update-cart">UPDATE CART</div></div>').appendTo($(this).find('.grid > .grid-item.large--seven-twelfths'));
			$(this).find($('a[data-line]')).addClass('da_remove').appendTo($(this).find('.da_product-info-ctn'));
			$(this).find($('input[id^="updates_"]')).addClass('da_quantity').appendTo($(this).find('.da_product-info-ctn'));
			$(this).find($('.grid-item.one-third.medium-down--one-third.medium-down--text-left.text-right > .h2')).addClass('da_price').appendTo($(this).find('.da_product-info-ctn'));
		});

		/* Update Cart functionality */
		$('.da_update-cart').click(() => {
			$('.btn-outline.update-cart').click();
		});

		jQuery('.cart-row[data-line]').wrapAll('<div class="da_data-line-wrapper"><div class="da_data-line-wrapper-left"></div><div class="da_data-line-wrapper-right"></div></div>');

		$('.grid-item.text-center').clone().appendTo('.da_data-line-wrapper-right');
		$('.da_data-line-wrapper-right .btn.half-bottom').insertBefore('.da_data-line-wrapper-right .cart-subtotal__note.secondary-font');

		/* Create pop up for checkout */
		$('<div class="da_popup" style="display: none;"><div class="da_exclamation"><i class="fa fa-exclamation-circle"></i></div><div class="da_popup-text">To checkout, first select a delivery date, agree to the terms and conditions, and add a gift message.</div></div>').appendTo('.btn.half-bottom');

		$('.btn.half-bottom').addClass('da_checkout');
		/*  Checks if date is picked and if one of the times is picked*/
		$('.btn.half-bottom').hover(function() { 
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				$('.da_popup').hide(0);
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				$('.da_popup').hide(0);
			}
			else {
				$('.da_popup').show(0);
			}
		}, function() {
			$('.da_popup').hide(0);
		});

		/* Stops you from being able to click checkout if the options haven't been selected */
		$('.btn.half-bottom').click(() => {
			event.preventDefault();
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				location.href = "https://viaflorelle.com/checkout";
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				location.href = "https://viaflorelle.com/checkout";
			}
			else {
				$('#notification_message').hide();
			}
		});


		/* Shipping agreement and Gift Message section */
		$('#streamthing_DOM_insertion_point').next().wrapAll('<div class="da_bottom-wrapper"></div>');;
		$('#streamthing_DOM_insertion_point').appendTo('.da_bottom-wrapper');
		$('.shipping_agreement > h3').prependTo('#shipping_fulfillment_body');
		$('<div class="da_red-shipping-text">Saturday deliveries incur an additional $15 shipping fee</div>').insertAfter('#delivery_date_widget_uber_container');

		document.querySelector('#streamthing_fulfillment_date input').addEventListener("change", () => {
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else {
				$('.da_checkout').removeClass('da_checkout-ready');
			}
		});

		document.querySelector('#streamthing_shipping_terms_of_service').addEventListener("change", () => {
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else {
				$('.da_checkout').removeClass('da_checkout-ready');
			}
		});
	}
	else {
		/* Move nav bar logo */
		$('.h1.header-logo').insertBefore('#mobileNavBar > .display-table-cell:nth-child(2)');

		/* Make a new button */
		$('<a href="https://viaflorelle.com/checkout" class="da_checkout btn half-bottom">Proceed to Checkout</a>').insertAfter('.btn.half-bottom');
		$('.btn.half-bottom').eq(0).remove();;

		/* Remove outline of buttons */
		$('.btn-outline').eq(0).css({"border":"none"});
		$('.btn-outline').eq(1).css({"border":"none"});

		/* Add delivery date text */
		$('<div class="da_delivery-text"><strong>Please select a delivery date and fill out the gift note.</strong> If you are shipping your product please agree to Shipping terms & conditions</div>').insertAfter('div.cart-row:not([data-line])');

		//shipping text move around and red text
		$('.shipping_agreement > h3').prependTo('#shipping_fulfillment_body');
		$('<div class="da_red-shipping-text">Saturday deliveries incur an additional $15 shipping fee</div>').insertAfter('#delivery_date_widget_uber_container');

		$('label[for="cartSpecialInstructions"]').html('<div class="da_special-text">Special Shipping Instructions (Gate code if applicable)</div><div class="da_arrow-ctn"><i class="fa fa-angle-up da_arrow-up" style="display: none;"></i><i class="fa fa-angle-down da_arrow-down"></i></div>')

		/* Drop down for special shipping */
		$('label[for="cartSpecialInstructions"]').click(() => {
			$('#cartSpecialInstructions').slideToggle();
			$('.da_arrow-up').toggle();
			$('.da_arrow-down').toggle();
		});

		/* DESKTOP AND MOBILE FUNCTIONALITY */

		/* Create pop up for checkout */
		$('<div class="da_popup" style="display: none;"><div class="da_exclamation"><i class="fa fa-exclamation-circle"></i></div><div class="da_popup-text">To checkout, first select a delivery date,  agree to the terms and conditions, and add a gift message.</div></div>').appendTo('.btn.half-bottom');
		
		/*  Checks if date is picked and if one of the times is picked*/
		$('.btn.half-bottom').click(function() { 
			event.preventDefault();
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				location.href = "https://viaflorelle.com/checkout";
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				location.href = "https://viaflorelle.com/checkout";
			}
			else {
				$('.da_popup').show(0);
			}
		});

		document.querySelector('#streamthing_fulfillment_date input').addEventListener("change", () => {
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				$('.da_popup').hide(0);
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				$('.da_popup').hide(0);
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else {
				$('.da_checkout').removeClass('da_checkout-ready');
			}
		});

		document.querySelector('#streamthing_shipping_terms_of_service').addEventListener("change", () => {
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				$('.da_popup').hide(0);
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				$('.da_popup').hide(0);
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else {
				$('.da_checkout').removeClass('da_checkout-ready');
			}
		});

		/* Move the price and quantity to the left */
		$('.cart-row[data-line]').each(function() {
			$('<div class="da_product-info-ctn"><div class="da_update-cart">UPDATE CART</div></div>').appendTo($(this).find('.grid > .grid-item.large--seven-twelfths > .grid > div:nth-child(2)'));
			$(this).find($('a[data-line]')).addClass('da_remove').appendTo($(this).find('.da_product-info-ctn'));
			$(this).find($('input[id^="updates_"]')).addClass('da_quantity').appendTo($(this).find('.da_product-info-ctn'));
			$(this).find($('.grid-item.one-third.medium-down--one-third.medium-down--text-left.text-right > .h2')).addClass('da_price').appendTo($(this).find('.da_product-info-ctn'));
		});

		$(document).click(function(e) {
			var target = e.target

			if (!$(target).is('.da_popup') && !$(target).is('.da_checkout')) {
				$('.da_popup').hide(0);
			}
		});
	}

	setInterval(() => {
			if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#no:checked').length) {
				$('.da_popup').hide(0);
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else if ($('#streamthing_fulfillment_date input').val() != "" && $('#streamthing_shipping_terms_of_service:checked').length && $('#recipients-name').val() != "" && $('#senders-name').val() != "" && $('#yes:checked').length && $('#your-gift-message').val() != "" ) {
				$('.da_popup').hide(0);
				$('.da_checkout').addClass('da_checkout-ready');
			}
			else {
				$('.da_checkout').removeClass('da_checkout-ready');
			}
	}, 1000);
});
