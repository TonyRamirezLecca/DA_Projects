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

function addContent() {
	$('<div class="da_ctn"><div class="da_product-title"></div><div class="da_description"></div>').prependTo('.product-title-and-price');

	//Gets first 2 sentences
	var regex = /(^.*?[a-z]{2,}[.!?])\s+\W*[A-Z](.*?[a-z]{2,}[.!?])\s+/i;
	console.log(document.querySelector('.product-short-description').innerHTML);
	var twoSentences = regex.exec(document.querySelector('.product-short-description').innerHTML.trim());

	$(`<p>${twoSentences[0]}</p>`).appendTo('.da_description');
		$('.product-detail-wrapper .product-name').clone().appendTo('.da_product-title');
		$('.product-detail-wrapper .product-name').eq(1).hide();
}

whenExists('.accordion-title, .title-msg, .product-title-and-price , .regular-price, .product-selection-info', function () {
	console.log('Disruptive Advertising');

	/* Selects Get Estimate Section */
	var regex = /Available for Big! Delivery/i;
	var bigDelivery;
	document.querySelectorAll('.title-msg').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			bigDelivery = el;
			return;
		}
	});

	/* Selects Get Estimate Section */
	var regex = /Not available for Shipping/i;
	var availableForShipping;
	document.querySelectorAll('.details').forEach((el, i, arr) => {
		if (regex.test(el.innerHTML)) {
			availableForShipping = el;
			return;
		}
	});

	var price = document.querySelector('.regular-price').innerHTML.replace(/\$/g, "");
	if (price.includes('-')) {
		price = price.split('-');
		price = price[1];
	}

	if (!bigDelivery && price >= 50.00 && !availableForShipping) {
		addContent();
		whenExists('#item-size', function() {
			document.querySelector('#item-size').addEventListener("change", () => {
				setTimeout(() => {
					addContent();
					$('.product-detail-wrapper .product-name').eq(0).show();
				}, 600);
			});
		})
	}
});
