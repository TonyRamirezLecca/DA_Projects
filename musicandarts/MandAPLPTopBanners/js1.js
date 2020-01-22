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
whenExists('.hide-for-small-only, nav[role="navigation"] > .breadcrumbs, nav[role="presentation"] > .breadcrumbs', function () {
	console.log('da_test');
	$('.hide-for-small-only > header').wrapAll('<div class="da_ctn"></div>');

	$('<div class="da_banner-ctn banner1"><div class="da_banner"><a href="https://www.musicarts.com/beginner-accessories"><div class="da_banner-text">Beginner</br>Accessories<span>&#8250;</span></div><div class="da_color1"></div></a></div><div class="da_banner"><a href="https://www.musicarts.com/-intermediate-accessories"><div class="da_banner-text">Intermediate</br>Accessories<span>&#8250;</span></div><div class="da_color2"></div></a></div><div class="da_banner"><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-text">Staff Picks<span>&#8250;</span></div><div class="da_color3"></div></a></div></div>').appendTo('.da_ctn');

	if (window.innerWidth < 680) {
		$('<div class="da_banner-ctn da_hide-mobile banner2"><div class="da_banner"><a href="https://www.musicarts.com/beginner-accessories"><div class="da_banner-text">Beginner</br>Accessories<span>&#8250;</span></div><div class="da_color1"></div></a></div><div class="da_banner"><a href="https://www.musicarts.com/-intermediate-accessories"><div class="da_banner-text">Intermediate</br>Accessories<span>&#8250;</span></div><div class="da_color2"></div></a></div><div class="da_banner"><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-text">Staff Picks<span>&#8250;</span></div><div class="da_color3"></div></a></div></div>').insertAfter('.show-for-small-only nav[role="presentation"] > .breadcrumbs');
	} else {
		$('<div class="da_banner-ctn banner3"><div class="da_banner"><a href="https://www.musicarts.com/beginner-accessories"><div class="da_banner-text">Beginner</br>Accessories<span>&#8250;</span></div><div class="da_color1"></div></a></div><div class="da_banner"><a href="https://www.musicarts.com/-intermediate-accessories"><div class="da_banner-text">Intermediate</br>Accessories<span>&#8250;</span></div><div class="da_color2"></div></a></div><div class="da_banner"><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-text">Staff Picks<span>&#8250;</span></div><div class="da_color3"></div></a></div></div>').insertAfter('.show-for-small-only nav[role="navigation"] > .breadcrumbs');
	}
});


