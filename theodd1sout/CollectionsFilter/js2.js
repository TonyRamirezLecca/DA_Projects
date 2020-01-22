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
whenExists('.aside-container, .mobile-aside-container', function () {
	$('.aside-container').hide();
	$('.mobile-aside-container').hide();

	$('<div class="da_filter-ctn"><a class="da_filter-btn" href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Shirts">T-Shirts</a><a class="da_filter-btn" href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Game">Games</a><a class="da_filter-btn" href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Hats">Hats</a><a class="da_filter-btn" href="https://theodd1sout.com/collections/all">View All</a></div>').insertAfter('.collection-header');

	$('<div class="da_filter-ctn da_filter-ctn2"><a class="da_filter-btn" href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Shirts">T-Shirts</a><a class="da_filter-btn" href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Game">Games</a><a class="da_filter-btn" href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Hats">Hats</a><a class="da_filter-btn" href="https://theodd1sout.com/collections/all">View All</a></div>').insertAfter('#bc-sf-filter-collection-header');
});
