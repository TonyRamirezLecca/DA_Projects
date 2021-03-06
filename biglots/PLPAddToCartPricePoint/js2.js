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
whenExists('.regular-price', function () {
	console.log('da');
	//Some pages ajax in content after the load so this interval will run for a few seconds
	myInterval = setInterval(() => {
		document.querySelector('.add-to-cart-form').getAttribute('data-producturl');
		document.querySelectorAll('.product-tile').forEach((el, i, arr) => {
			let price = el.querySelector('.regular-price').innerHTML;
			price = price.split('-').pop();
			price = price.replace(/[^0-9.]/g, '');

			if (price >= 250) {
				if (el.querySelector('button')) {
					el.querySelector('button').innerHTML = 'View Details';
					el.querySelector('button').addEventListener("click", () => {
						event.stopPropagation();
						event.preventDefault();
						location.href = el.querySelector('.product-link').getAttribute('href');
					});
				}
			}
		});
	}, 1000);

	setTimeout(() => {
		clearInterval(myInterval);
	}, 5000);

});
