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

whenExists('#menu > .search', function () {

	$('<div class="da_grid-ctn"><div class="da_row"><a href="https://theodd1sout.com/collections/all" class="da_shop-all">SHOP ALL</a><a href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Shirts" class="da_shirts">T-SHIRTS</a></div><div class="da_row"><a href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Plushie" class="da_plushies">PLUSHIES</a><a href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Game" class="da_games">GAMES</a></div><div class="da_row"><a href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Hats" class="da_hats">HATS</a><a href="https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Accessories" class="da_accessories">ACCESSORIES</a></div></div>').insertAfter('#menu > .search');

	$('<div class="da_wave"></div>').prependTo('header.util');
	
});

