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

whenExists('#page-row-7 > div', function () {

	$('.owl-carousel').trigger('add.owl.carousel', ['<div id=da_tail-slide><div class=da_slide-text><h4>Ready to learn more<br> about Kimble PSA<br> product features?</h4><a href=https://www.kimbleapps.com/product/ >VIEW THE PRODUCT</a></div></div>']).trigger('refresh.owl.carousel');

});
