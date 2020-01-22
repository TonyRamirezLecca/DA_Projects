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

whenExists('.cartItemCount.text-center.inline-block', function () {

	if($('.customer-logged-in').length > 0) {
		$('<div class="da_fixed-footer"><div class="da_logo"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/mma-silver/mobile-fixed-menu/Logo.png"/></div><div class="da_footer-section da_account"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/account+icon.png"/></div><p>Account</p></div><div class="da_footer-section da_search fa fa-search"><div class="da_img-ctn"></div><p>Search</p></div><div class="da_footer-section da_cart"><div class="da_img-ctn"></div><p>Cart</p></div><div class="da_footer-section da_menu"><div class="da_img-ctn"><div></div><div></div><div></div></div><p>Menu</p></div></div>').appendTo('body');
	}
	else {
		$('<div class="da_fixed-footer"><div class="da_logo"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/mma-silver/mobile-fixed-menu/Logo.png"/></div><div class="da_footer-section da_sign-in"><div class="da_img-ctn"><img src="https://static.disruptive.co/mma-silver/mobile-fixed-menu/account+icon.png"/></div><p>Sign In</p></div><div class="da_footer-section da_search fa-search fa"><div class="da_img-ctn"></div><p>Search</p></div><div class="da_footer-section da_cart"><div class="da_img-ctn"></div><p>Cart</p></div><div class="da_footer-section da_menu"><div class="da_img-ctn"><div></div><div></div><div></div></div><p>Menu</p></div></div>').appendTo('body');
	}

	/*  Default Hidden */
	/* Move cart down */
	$('.cartItemWrapp').clone().appendTo('.da_cart > .da_img-ctn');
	$('.cartItem').eq(3).addClass('da_cartItem');


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

	/* Scrolling functionality */
	window.addEventListener("scroll", (event) => {
		var scroll = this.scrollY;
		if (scroll > 115){
			document.querySelector('.da_fixed-footer').classList.add('da_show-scroll');
		} 
		else {
			document.querySelector('.da_fixed-footer').classList.remove('da_show-scroll');
		}
	});

});

