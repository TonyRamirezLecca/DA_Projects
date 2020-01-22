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
whenExists('.homeCatCallouts', function () {

	$('.homeCatCallouts').hide();
	$('<div class="da_section-ctn"><a href="https://www.dieselogic.com/c-2-fuel-injectors.aspx" class="da_section"><div class="da_overlay"></div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/shopinjectorsv2.jpg"/><div class="da_text"><div class="da_triangle"></div>SHOP INJECTORS</div></a><a href="https://www.dieselogic.com/c-3-fuel-injection-pumps.aspx" class="da_section"><div class="da_overlay"></div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/shopinjectionpumpsv2.jpg"/><div class="da_text"><div class="da_triangle"></div>SHOP INJECTION PUMPS</div></a><a href="https://www.dieselogic.com/c-5-turbo-chargers.aspx" class="da_section"><div class="da_overlay"></div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/shopturbochargersv2.jpg"/><div class="da_text"><div class="da_triangle"></div>SHOP TURBO CHARGERS</div></a><a href="https://www.dieselogic.com/c-4-parts.aspx" class="da_section"><div class="da_overlay"></div><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/dieselogic/HomepageNavigation/shoppartsv2.jpg"/><div class="da_text"><div class="da_triangle"></div>SHOP PARTS</div></a></div>').insertAfter('.homeCatCallouts');
	
});
