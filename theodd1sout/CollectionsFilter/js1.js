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
function val() {
	console.log(document.querySelector('.da_filter').value);
	if (document.querySelector('.da_filter').value == "T-Shirts") {
		window.location = "https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Shirts"
	}
	else if (document.querySelector('.da_filter').value == "Games") {
		window.location = "https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Game"

	}
	else if (document.querySelector('.da_filter').value == "Hats") {
		window.location = "https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Hats"

	}
	else if (document.querySelector('.da_filter').value == "Accessories") {
		window.location = "https://theodd1sout.com/collections/all?_=pf&pf_pt_product_type=Accessories";

	}
	else if (document.querySelector('.da_filter').value == "View All") {
		window.location = "https://theodd1sout.com/collections/all"

	}

}

whenExists('.aside-container, .mobile-aside-container', function () {

	$('.aside-container').hide();
	$('.mobile-aside-container').hide();

	$('<span class="da_label">Filter by</span><select class="da_filter" onchange="val()"><option value="T-Shirts">T-Shirts</option><option value="Games">Games</option><option value="Hats">Hats</option><option value="Accessories">Accessories</option><option value="View All">View All</option></select>').insertBefore('#bc-sf-filter-top-display-type');

});
