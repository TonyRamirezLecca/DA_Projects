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
function addContent() {
	/* Selects Get Estimate Section */
	var regex = /Features/i;
	var featuredSection;
	console.log('started function')
	document.querySelectorAll('div[id^="pdp"] > .accordion-container > .accordion-title').forEach((el, i, arr) => {
		console.log('Iterating');
		if (regex.test(el.innerHTML)) {
		console.log('found!');
			featuredSection = el.nextElementSibling.querySelector('.accordion-body-content > ul');
			return;
		}
		console.log('didnt find');
	});
	if (featuredSection) {
		$('<div class="da_vp-ctn"><div class="da_product-title"></div><ul class="da_vps"></ul>').prependTo('.product-title-and-price');

		featuredSection.querySelectorAll('li').forEach((el, i, arr) => {
			if (i <= 3) {
				$(`<li class="da_vp">${el.innerHTML}</li>`).appendTo('.da_vps');
			}
		});

		$('.product-detail-wrapper .product-name').clone().appendTo('.da_product-title');
		$('.product-detail-wrapper .product-name').eq(1).hide();
	}
}
//.details
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

