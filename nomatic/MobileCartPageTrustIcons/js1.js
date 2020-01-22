/*** DA IMPLEMENTATION Jan 15, 2020***/
if (window.location.href.includes('/cart')) {
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
	defer(function () {
		jQuery(function () {        
			whenExists('#shopify-section-cart-template > div.cart-banner', function () {

				//Gets user's Country 
				var country = 'United States';
				jQuery.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo => {
					country = addrInfo.countryName;
				});

				var currency = jQuery('.cart-subtotal > .row > .text-right > p').html();
				currency = currency.replace(/[$,]+/g,"");
				var amountResult = parseFloat(currency);

				var priceIsAbove50 = true;
				if (amountResult <= 50) {
					priceIsAbove50 = false;
				}

				var imageURL = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/mobile-cart-page-trust-icons/mobile_valueprops.png';
				var asteriks = true;
				if (country == "United States" && priceIsAbove50) {
					imageURL = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/mobile-cart-page-trust-icons/mobile_valueprops.png';
				} else {
					imageURL = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/mobile-cart-page-trust-icons/mobile_valuepropsNoUSA';
					asteriks = false;
				}

				jQuery(`<div class="da_value-props-mobile"><img src="${imageURL}"/><p class="da_asteriks">Free Shipping only available for destinations in the continental US</p></div>`).insertAfter('#shopify-section-cart-template > div.cart-banner');


				if (!asteriks) {
					jQuery('.da_asteriks').hide();
				}

			});


		});
	});
}

