/*** JS 1 ***/
/*Functions  */
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
function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
/* Add Jquery */
var jQuery_script = document.createElement("script");
jQuery_script.type = 'text/javascript';
jQuery_script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
document.querySelector("head").appendChild(jQuery_script);

defer(function () {
	jQuery(function () {        
		whenExists('span.cart__subtotal, #cart__form > footer', function () {

			/*Check if there is checkbox*/
			var hasCheckBox = false;
			if (document.querySelectorAll('.cart__confirm').length > 0) {
				hasCheckBox = true;
			}

			/* Get subtotal amount */
			var subtotal = document.querySelector('span.cart__subtotal').innerHTML;
			//
			/* Create subtotal container */
			$('<div class="da_subtotal-ctn"><div class="da_subtotal"><h6>SUBTOTAL</h6><h6>' + subtotal + '</h6></div><div class="da_taxes-calculated">Taxes calculated at checkout</div><div class="da_seperator"></div><a class="da_checkout">Check Out</a><a class="da_continue-shopping" href="/">Continue shopping</a></div>').insertBefore('#cart__form > footer');
			/* If there was a checkbox, add it to containier */
			if (hasCheckBox) {
				/* Changes color by default */
				$('.da_checkout').css({'background':'#dfdfdf'});
				$('#cart__form').css({'min-height': '650px'});
				$('.cart__checkbox').insertAfter('.da_seperator');
				$('.da_checkout').click(() => {
					event.preventDefault();
					if (document.querySelector('#cart__checkbox').checked) {
//						location.href = "https://justknockknock.com/checkout";
						$('#btn--checkout').click();
					}
					else {
						$('.da_checkout').css({'background':'#dfdfdf'});
						if ($('.da_checkout-error').length > 0) {}
						else {
							$('<p class="da_checkout-error">To Proceed to Checkout, Please Agree to the</br> Terms and Conditions Above</p>').insertBefore('.da_checkout');
						}
					}
				});
				$('label[for="cart__checkbox"]').click(function() {
					console.log('clicked');
					if (document.querySelector('#cart__checkbox').checked) {
						$('.da_checkout').css({'background':'#dfdfdf'});
					}
					else {
						$('.da_checkout').css({'background':'#ff5c39'});
						$('.da_checkout-error').remove();
					}
				});
			}
			else {
				$('.da_checkout').click(() => {
					event.preventDefault();
					//location.href = "https://justknockknock.com/checkout";
					$('#btn--checkout').click();
				});
			}
			/* Create Drop Down */
			$('<div class="da_accordion-ctn"><div class="da_accordion-section"><div class="da_accordion-header"><span class="da_minus da_toggle">-</span><span class="da_plus">+</span><h6>When will my Knock! Knock! plants arrive?</h6></div><div class="da_accordion-content"><p>We ship your Knock! Knock! plant trays at the perfect planting time for your climate zone. Trays will arrive while in the early growing stages to compensate for their shipping journey-but will be ready to flourish upon delivery</p></br><p>Our general shipping windows are:</p></br><ul><li><strong>Spring: </strong>March through April</li><li><strong>Summer: </strong>May</li><li><strong>Fall: </strong>September</li><li><strong>Winter: </strong>November</li></ul></div></div><div class="da_accordion-section"><div class="da_accordion-header"><span class="da_minus da_toggle">-</span><span class="da_plus">+</span><h6>What comes with a Knock! Knock! box?</h6></div><div class="da_accordion-content"><p>We provide two plant trays curated by our horti-futurists. Please note that your plants will not ship at full size. This allows for the plants reach to your door safely and ready to flourish.</p></br><p>You will need two planters 14-16” in diameter, potting mix to plant the trays, and plant food to keep your plants strong. We recommend Miracle Gro® Potting Mix and Miracle Gro® Plant Food for the best results.</p></div></div><div class="da_accordion-section"><div class="da_accordion-header"><span class="da_minus da_toggle">-</span><span class="da_plus">+</span><h6>How do I care for my plants?</h6></div><div class="da_accordion-content"><p>Plant the combinations the day you receive them, and give the plants a thorough watering. When the top inch of soil feels dry or the plants begin to wilt, water them again. Feed the plants with Miracle-Gro® plant food after about 4 weeks. Note that plant care will vary from shipment to shipment.</p></div></div></div>').insertAfter('#cart__form > footer');
			document.querySelectorAll('.da_accordion-header').forEach((el, i, arr) => {
				el.addEventListener("click", () => {
					el.nextElementSibling.classList.toggle('da_expand');
					el.querySelector('.da_minus').classList.toggle('da_toggle');
					el.querySelector('.da_plus').classList.toggle('da_toggle');
				});
			});

			/* Add Mobile Cart */
			$('<div class="da_mobile-footer"><div class="da_mobile-subtotal">' + subtotal + '</div><div class="da_mobile-checkout-btn">CHECK OUT</div></div>').appendTo('body');
			$('<div class="da_mobile-checkout-btn-error">To Proceed to Checkout, Please Agree to the Terms and Conditions Above</div>').appendTo('body')


			if (hasCheckBox) {
				$('.da_mobile-checkout-btn').css({'background':'#dfdfdf'});
				$('.da_mobile-checkout-btn').click(() => {
					if (document.querySelector('#cart__checkbox').checked) {
//						location.href = "https://justknockknock.com/checkout";
						$('#btn--checkout').click();
					}
					else {
						$('.da_mobile-checkout-btn-error').addClass('da_slide-mobile-up');
					}
				});
				$('label[for="cart__checkbox"]').click(function() {
					if (document.querySelector('#cart__checkbox').checked) {
						$('.da_mobile-checkout-btn').css({'background':'#dfdfdf'});
					}
					else {
						$('.da_mobile-checkout-btn').css({'background':'#ff5c39'});
						$('.da_mobile-checkout-btn-error').removeClass('da_slide-mobile-up');
					}
				});
			}
			else {
						$('.da_mobile-checkout-btn').css({'background':'#ff5c39'});
				$('.da_mobile-checkout-btn').click(() => {
					//location.href = "https://justknockknock.com/checkout";
					$('#btn--checkout').click();
				});
			}

		});
	});
});











