
/*** JS 3 ***/

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
		var fontAwesome5 = document.createElement("link");
		fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
		fontAwesome5.href="https://use.fontawesome.com/releases/v5.3.1/css/all.css";
		document.querySelector("head").appendChild(fontAwesome5);

		/* Give da_hamburger to menu */
		$('.mobile-menu__trigger').addClass('da_hamburger');

		/****Footer Changes****/
		var flagSection = $('.footer__language.mobile-only').clone();
		$('<div class="da_footer__bottom"><div class=da_footer-site-links><a href=https://www.stickergiant.com/privacy-notice>PRIVACY</a> <a href=https://www.stickergiant.com/sitemap>SITEMAP</a> <a href=https://www.stickergiant.com/return-policy>RETURN POLICY</a> <a href=https://www.stickergiant.com/terms-of-service>TERMS & CONDITIONS</a></div><div class=da_flag-section__new></div><div class=da_footer-address><p>StickerGiant.com Inc<p>880 Weaver Park Road, Longmont, CO 80501</div><div class=da_footer-sticker-story><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/Sticker-story-Color%403x.png></div><div class=da_footer-social-links><a href=https://www.facebook.com/stickergiant><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/facebook%403x.png></a><a href=https://www.instagram.com/stickergiant/ ><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/instagram%403x.png></a><a href=https://www.pinterest.com/stickergiant/ ><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/pinterest%403x.png></a><a href=https://www.stickergiant.com/snapchat><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/snapchat%403x.png></a><a href=https://twitter.com/stickergiant><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/twitter%403x.png></a><a href=https://www.youtube.com/user/stickergiant><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/youtube%403x.png></a></div><div class=da_footer-copyright><p>Copyright © 2019 StickerGiant.com Inc. All rights reserved.</div></div>').insertAfter('.footer__bottom');
		flagSection.appendTo('.da_flag-section__new');
		flagSection.click(() => {
			$('body > footer > div.footer__bottom > div.footer__language.mobile-only > a').click();
		});



		/****Menu Changes****/

		//Change Menu Text
		$('<div class="da_hide-menu da_menu"><div class=da_menu-items><div class=da_X>×</div><a href=https://www.stickergiant.com/type class=da_menu-item><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/Kiss-Cut-Stickers%403x.png><p>Products</p></a><a href=https://www.stickergiant.com/faq class=da_menu-item><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/Mask+Group+8%403x.png><p>FAQs</p></a><a href=https://www.stickergiant.com/about class=da_menu-item><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/SG-Circle-Logo-Email%403x.png><p>About Us</p></a><a href=https://www.stickergiant.com/artwork class=da_menu-item><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/Mask+Group+11%403x.png><p>Resources</p></a><a href=https://www.stickergiant.com/customer/account/orders class=da_menu-item><img src=https://s3-us-west-1.amazonaws.com/static.disruptive.co/sticker-giant/nav-follow-up-test-1/Mask+Group+6%403x.png><p>Accounts</p></a><a href=https://www.stickergiant.com/type>GET STICKERS!</a></div></div>').appendTo('body');
		//Start menu faded out

		//Fade in/out menu on click
		$('.da_X').click(() => {
			$('.da_menu').fadeOut();
			$('.page-type-home').removeClass('is-open-mm');
		});
		$('.da_hamburger').click(() => {
			$('.da_menu').removeClass('da_hide-menu');
			$('.da_menu').fadeIn();
		});
	});
});

