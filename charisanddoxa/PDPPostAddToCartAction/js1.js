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

whenExists('.menu.right, .mobile_nav.dropdown_link', function () {

	/* Move Cart Icon */
	var fontAwesome5 = document.createElement("link");
	fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
	fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
	document.querySelector("head").appendChild(fontAwesome5);

	document.querySelectorAll('.action_button.add_to_cart').forEach((el, i, arr) => {
		el.addEventListener("click", () => {
			setTimeout(() => {
				window.location = "https://charisdoxa.com/cart";
			}, 1500);
		});
	});

	$('<li class="da_shopping-cart-li"><i class="fas fa-shopping-cart da_shopping-cart"></i></li>').prependTo('.menu.right');
	$('<li class="da_shopping-cart-li-mobile"><i class="fas fa-shopping-cart da_shopping-cart"></i></li>').insertAfter('.mobile_nav.dropdown_link');

	$('.da_shopping-cart-li-mobile, .da_shopping-cart-li').click(() => {
		window.location = "https://charisdoxa.com/cart";
	});
	
});
