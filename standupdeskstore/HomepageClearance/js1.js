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
whenExists('header .header.links, .sections.nav-sections .header.links ', function () {


	jQuery('<li class="da_clearance-desktop"><a href="https://www.standupdeskstore.com/standing-desks/clearance">Shop Clearance</a></li>').appendTo('header .header.links')

	jQuery('<li class="da_clearance-mobile"><a href="https://www.standupdeskstore.com/standing-desks/clearance">Shop Clearance</a></li>').appendTo('.header.links').eq(1);


});
