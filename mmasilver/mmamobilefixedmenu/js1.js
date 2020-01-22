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

whenExists('.cartItemCount.text-center.inline-block', function () {

	if($('.customer-logged-in').length > 0) {
		$('<div class="da_fixed-footer"><div class="da_footer-section da_account"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/sign+in+icon-1.png"/></div><p>Account</p></div><div class="da_footer-section da_shop"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/Shop+Icon.png"/></div><p>Shop</p></div><div class="da_footer-section da_menu"><div class="da_img-ctn"><div></div><div></div><div></div></div><p>Menu</p></div><div class="da_footer-section da_search"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/search+icon.png"/></div><p>Search</p></div><div class="da_footer-section da_cart"><div class="da_img-ctn"></div><p>Cart</p></div></div>').appendTo('body');
		}
	else {
		$('<div class="da_fixed-footer"><div class="da_footer-section da_sign-in"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/sign+in+icon-1.png"/></div><p>Sign In</p></div><div class="da_footer-section da_sign-up"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/sign+up+icon.png"/></div><p>Sign Up</p></div><div class="da_footer-section da_menu"><div class="da_img-ctn"><div></div><div></div><div></div></div><p>Menu</p></div><div class="da_footer-section da_search"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/search+icon.png"/></div><p>Search</p></div><div class="da_footer-section da_cart"><div class="da_img-ctn"></div><p>Cart</p></div></div>').appendTo('body');
	}

	/*  Default Hidden */
		/* Move cart down */
		$('.cartItemWrapp').appendTo('.da_cart > .da_img-ctn');
		/* Hide Menu Icon */
		$('.visible-xs.visible-sm.menuTrrigor a').hide();
		/* Hide Search */
		$('.searchFormdevice.visible-xs.visible-sm').addClass('da_hide-search');

	/* Clicking Functionality */
		$('.da_sign-in').click(() => {
			window.location = "https://www.mmasilver.com/account/login";
		});
		$('.da_sign-up').click(() => {
			window.location = "https://www.mmasilver.com/account/register";
		});
		$('.da_menu').click(() => {
			$('.visible-xs.visible-sm.menuTrrigor a').click();
		});
		$('.da_search').click(() => {
			$('.searchFormdevice.visible-xs.visible-sm').removeClass('da_hide-search');
			$('#menu > div.mm-navbar.mm-navbar-top.mm-navbar-top-1.mm-navbar-size-1.mm-hasbtns > a.mm-close.mm-btn')
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('body').offset().top
			}, 600);

			$('.searchFormdevice.visible-xs.visible-sm > form > div > input').focus();
		});
		$('.da_cart').click(() => {
			window.location = "https://www.mmasilver.com/cart";
		});
		$('.da_account').click(() => {
			$('.visible-xs.visible-sm.menuTrrigor a').click();
			$('#mm-1 > ul > li:nth-child(1) > a.mm-next').click();
		});
		$('.da_shop').click(() => {
			$('.visible-xs.visible-sm.menuTrrigor a').click();
			$('#mm-1 > ul > li:nth-child(3) > a').click();
		});

});

