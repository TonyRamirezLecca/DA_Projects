/*** JS 3 ***/

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

console.log("DA_script");
whenExists('.route-widget-shopify > .route-widget .rw-checkbox-span', function () {


	jQuery('.rw-contents > .rw-left, .rw-contents > .rw-right').wrapAll('<div class="da_wrapper"/>');
	$('<div class="da_sub-text"><p>One-Click Protect: Select this option to secure your shipment from loss, damage, or theft</p></div>').appendTo('.rw-contents');


});




