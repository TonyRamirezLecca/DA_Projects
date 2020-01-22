/*** JS 1 ***/

/* When one element exists OR the other element exists */
function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function() {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				callback();
				clearInterval(interval);
				break;
			}
		}
	}, 100);
}
whenExists('#guestSubmit, #guestCheckout', function () {

	//Mobile
	if (document.querySelector('body').classList.contains('isMobile')) {
		console.log("Mobile");
		$('<div class="da_wrapper"><div class="da_button">Checkout as a guest</div><p>or</p></div>').insertBefore('#login > div.ui-panel-wrapper > div.ui-content > div:nth-child(1) > h1');
		$('.da_button').click(() => {
			$('#continueCheckoutBtn[value="Checkout as guest"]').click();		
		});
	}
	//Desktop
	else {
		console.log("Desktop");
		$('<div class="da_guestSubmit">Continue as a Guest</div>').prependTo('#janrainEngageEmbed');
		$('<p class="da_or">or</p>').prependTo('#janrainEngageEmbed');

		$('.da_guestSubmit').click(() => {
			$('#guestSubmit').click();
		});
	}
	
});
 
