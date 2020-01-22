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

whenExists('#page-row-7 > div > div.owl-stage-outer > div > div:nth-child(4) > div > div > div > div > a', function () {

	document.querySelectorAll('#page-row-7 .owl-item').forEach((el, i, arr) => {

		el.innerHTML = el.innerHTML.replace(/VIEW ALL CASE STUDIES/ig, 'VIEW THE PRODUCT');
		el.querySelector('a').setAttribute('href', 'https://www.kimbleapps.com/product/');
		
	});

});
