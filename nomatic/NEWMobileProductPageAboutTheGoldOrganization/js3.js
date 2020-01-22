/* JS 3 */

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

whenExists('div[data-section-type="product"] > div > div.col-lg-30.product-description > div > div.product-head > div > div:nth-child(1) > p', function () {

		$('.product-single__photos.col-lg-30').prependTo('.row.product-single.flex-md-row-reverse');
		$('<div class="da_check-out"><span>CHECK OUT WHAT THIS BAG CAN DO!</span><span><i class="fas da_arrow fa-arrow-right"></i><span></div>').insertAfter('.product-single__photos.col-lg-30');

});


