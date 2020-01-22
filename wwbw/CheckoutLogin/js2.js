/*** JS 2 ***/
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
whenExists('#content, #guestCheckout', function () {

	//Mobile
	if (document.querySelector('body').classList.contains('isMobile')) {
		$('<div class="da_wrapper"><div class="da_continue-as-guest-btn">Continue as Guest</div><p class="da_or">or</p><div class="da_returning-customer-btn">Returning Customer Login</div></div>').prependTo('div[data-role="content"]');

		$('#guestCheckoutMessage').appendTo('div[data-role="content"]');


		$('.da_returning-customer-btn').click(() => {
			$('.da_returning-customer-btn').slideUp();
			$('#login > div.ui-panel-wrapper > div.ui-content > div:nth-child(2)').slideDown();
		});

		$('.da_continue-as-guest-btn').click(() => {
			$('#continueCheckoutBtn[value="Checkout as guest"]').click();		
		});
	}
	//Desktop
	else {
		$('<div class="da_wrapper"><div class="da_continue-as-guest-btn">Continue as Guest</div><p class="da_or">or</p><div class="da_returning-customer-btn">Returning Customer Login</div></div>').insertBefore('#content');

		$('.da_returning-customer-btn').click(() => {
			$('.da_returning-customer-btn').slideUp();
			$('#content').slideDown();
		});

		$('.da_continue-as-guest-btn').click(() => {
			$('#guestSubmit').click();
		});
	}
	
});
 
