/*** JS 4 ***/
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
	$('.hide-for-small-only > header').wrapAll('<div class="da_ctn"></div>');
	$('<div class="da_banner-ctn"><div class="da_banner"><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/graduation.png"/></div><div class="da_banner-text"><h6>STAFF PICKS</h6><p>Expert Recommendations from In-tune musicians</p></div><div class="da_small-text"><span>*</span> Some restrictions apply, see details.</div></a></div><div class="da_banner"><a href="https://www.musicarts.com/cms/30-day-price-match-guarantee/"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/ribbon.png"/></div><div class="da_banner-text"><h6>PRICE MATCH GUARANTEE</h6><p>We\'ll Beat the Lowest Price Online or In-store</p></div><div class="da_small-text"><span>*</span> Subject to credit approval, see details.</div></a></div></div>').appendTo('.da_ctn');

	if (window.innerWidth < 680) {
		$('<div class="da_banner-ctn da_hide-mobile"><div class="da_banner"><a href="https://www.musicarts.com/staff-picks"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/graduation.png"/></div><div class="da_banner-text"><h6>STAFF PICKS</h6><p>Expert Recommendations from In-tune musicians</p></div><div class="da_small-text"><span>*</span> Some restrictions apply, see details.</div></a></div><div class="da_banner"><a href="https://www.musicarts.com/cms/30-day-price-match-guarantee/"><div class="da_banner-img"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/music-and-arts/plp-top-banners/ribbon.png"/></div><div class="da_banner-text"><h6>PRICE MATCH GUARANTEE</h6><p>We\'ll Beat the Lowest Price Online or In-store</p></div><div class="da_small-text"><span>*</span> Subject to credit approval, see details.</div></a></div></div>').insertAfter('nav[role="presentation"] > .breadcrumbs');
	} 

});


