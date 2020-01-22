/*** JS 2 ***/
var jQuery_script = document.createElement("script");
jQuery_script.type = 'text/javascript';
jQuery_script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
document.querySelector("head").appendChild(jQuery_script);

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
		whenExists('#order-summary > div > div.order-summary__section.order-summary__section--total-lines, body > div.content > div > div.main', function () {

			//Gets user's Country 
			var country = 'United States';
			jQuery.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo => {
				country = addrInfo.countryName;
			});
			var priceIsAbove50 = true;
			if (Number(jQuery('.payment-due__price').attr('data-checkout-payment-due-target')) <= 5000) {
				priceIsAbove50 = false;
			}
			
			var imageURL = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/checkout-trust-icons/valueprops.png';
			var asteriks = true;
			if (country == "United States" && priceIsAbove50) {
				imageURL = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/checkout-trust-icons/valueprops.png';
			} else {
				imageURL = 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/checkout-trust-icons/valuepropsNoUSA.png';
				asteriks = false;
			}

			jQuery(`<div class="da_value-props-desktop"><img src="${imageURL}"/><p class="da_asteriks">Free Shipping only available for destinations in the continental US</p></div>`).insertBefore('body > div.content > div > div.main > div.main__header > div');

			jQuery(`<div class="da_value-props-mobile"><img src="${imageURL}"/><p class="da_asteriks">Free Shipping only available for destinations in the continental US</p></div>`).insertAfter('#checkout-context-step-one');

			if (!asteriks) {
				jQuery('.da_asteriks').hide();
			}

		});
	});
});
