/*** JS 5 ***/
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
	$('<div class="da_banner-ctn"><div class="da_banner"><div class="da_slant"></div><a href="https://www.musicarts.com/best-sellers"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/v5img.png"/></div><div class="da_banner-text">STUDENT</div><div class="da_shop-now">SHOP NOW &#9658;</div></a></div><div class="da_banner"><div class="da_slant"></div><a href="https://www.musicarts.com/search?terms=_featured:PriceDrop"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/v5img.png"/></div><div class="da_banner-text">RECITAL</div><div class="da_shop-now">SHOP NOW &#9658;</div></a></div><div class="da_banner"><div class="da_slant"></div><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/v5img.png"/></div><div class="da_banner-text">STAFF PICKS</div><div class="da_shop-now">SHOP NOW &#9658;</div></a></div></div>').insertAfter('nav[role="navigation"].ng-scope');

	if (window.innerWidth < 680) {
		$('<div class="da_banner-ctn da_hide-mobile"><div class="da_banner"><div class="da_slant"></div><a href="https://www.musicarts.com/best-sellers"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/v5img.png"/></div><div class="da_banner-text">STUDENT</div><div class="da_shop-now">SHOP NOW &#9658;</div></a></div><div class="da_banner"><div class="da_slant"></div><a href="https://www.musicarts.com/search?terms=_featured:PriceDrop"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/v5img.png"/></div><div class="da_banner-text">RECITAL</div><div class="da_shop-now">SHOP NOW &#9658;</div></a></div><div class="da_banner"><div class="da_slant"></div><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/v5img.png"/></div><div class="da_banner-text">STAFF PICKS</div><div class="da_shop-now">SHOP NOW &#9658;</div></a></div></div>').insertAfter('nav[role="presentation"] > .breadcrumbs');
	} 
});


