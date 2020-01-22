/*** JS 4 ***/
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
		$('<div class="da_wrapper"><div class="da_return-guest-text">IF YOU WISH TO CHECKOUT AS A GUEST</div><div class="da_continue-as-guest-btn">Continue as Guest</div><div class="da_or"><div class="da_left-line"></div>or<div class="da_right-line"></div></div><div class="da_returning-customer-ctn"><div class="">IF YOU ARE A RETURNING CUSTOMER</div></div></div>').prependTo('div[data-role="content"]');

		$('#guestCheckoutMessage').appendTo('div[data-role="content"]');

		$('.da_continue-as-guest-btn').click(() => {
			$('#continueCheckoutBtn[value="Checkout as guest"]').click();		
		});

		$('<div class="da_value-ctn"><h2>Benefits of Creating an Account</h2><ul><li><span>&#183;</span>Fast Checkout</li><li><span>&#183;</span>Save Your Wish List</li><li><span>&#183;</span>Loyalty Rewards</li></ul><a class=".da_create-account-link" href="https://www.wwbw.com/myaccount/login?createAccount=true#">Create an Account</a></div>').insertAfter('#returningCustomer');

		$('.da_create-account-link').click(() => {
			location.href = "https://www.wwbw.com/myaccount/login?createAccount=true#";
		});
	}
	//Desktop
	else {
		$('<div class="da_wrapper"><div class="da_return-guest-text">IF YOU WISH TO CHECKOUT AS A GUEST</div><div class="da_continue-as-guest-btn">Continue as Guest</div><div class="da_or"><div class="da_left-line"></div>or<div class="da_right-line"></div></div><div class="da_returning-customer-ctn"><div class="">IF YOU ARE A RETURNING CUSTOMER</div></div></div>').insertBefore('#content');

		$('.da_continue-as-guest-btn').click(() => {
			$('#guestSubmit').click();
		});

		$('<div class="da_value-ctn"><h2>Benefits of Creating an Account</h2><ul><li><span>&#183;</span>Fast Checkout</li><li><span>&#183;</span>Save Your Wish List</li><li><span>&#183;</span>Loyalty Rewards</li></ul><a class="da_create-account-link" href="https://www.wwbw.com/myaccount/login?createAccount=true#">Create an Account</a></div>').insertAfter('#returningCustomer');

		$('.da_create-account-link').click(() => {
			location.href = "https://www.wwbw.com/myaccount/login?createAccount=true#";
		});

	}
	
});
 
