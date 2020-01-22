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

// when multiple elements are removed
function whenRemoved(elements, callback) {
	var elements_array = elements.split(',');
	var interval = setInterval(function() {
		for (var i = 0; i < elements_array.length; i++) {
			if (document.querySelectorAll(elements_array[i]).length === 0) {
				elements_array.splice(i,1);
				i--;
			}
		}
		if (elements_array.length === 0) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}


whenExists('#burger_cart_popup > div > div.popup-header > h3', function () {

	//Checks to see if there is a litter robot in cart
	var hasLitterRobot = false;
	document.querySelectorAll(".custom-popup .item .product-name > a").forEach((el) => {
		if (el.innerHTML.includes("Litter-Robot")) {
			hasLitterRobot = true;
		}
	});

	//Adds New Content if there is a litter robot in cart
	if (hasLitterRobot) {
		jQuery('<div class="da_wrapper"><div class="da_bar"></div><h1>Included with your Litter-Robot:</h1><div class="da_icons"><div><div class="imgCtn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/litter-robot/mobile-cart-drawer-security-icons-existence/Layer+5.png"/></div><h4>90-Day</br>Money-Back</br>Guarentee</h4></div><div><div class="imgCtn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/litter-robot/mobile-cart-drawer-security-icons-existence/Layer+6.png"/></div><h4>18-Month</br>Warranty</h4></div><div><div class="imgCtn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/litter-robot/mobile-cart-drawer-security-icons-existence/Layer+7.png"/></div><h4>Free</br>Shipping</h4></div></div></div>').insertAfter('#burger_cart_popup > div > div.popup-header > h3');
		jQuery('<div class="da_wrapper2"><div class="da_bar"></div><h4>Other satisfied cat-lovers agree:</h4><div class="da_icons"><div><div class="imgCtn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/litter-robot/mobile-cart-drawer-security-icons-existence/stars.png"/></div><h1>"Worth every cent!"</h1></div></div><h5>Cheryl H. (Verified Cat-Lover)</h5></div>').insertBefore('.minicart-actions');
	}

	//Checks if there is still litter robot in cart after something is removed
	//if there is no litter robot, then delete new content
	jQuery('.remove').each(() => {
		jQuery(this).click(() => {
			cartSize = jQuery('.remove').length;
			whenRemoved(`#cart-sidebar .item:nth-child(${cartSize}) .remove`, function() {
				if (jQuery('.da_wrapper2').length == 0) {
					jQuery('<div class="da_wrapper2"><div class="da_bar"></div><h4>Other satisfied cat-lovers agree:</h4><div class="da_icons"><div><div class="imgCtn"><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/litter-robot/mobile-cart-drawer-security-icons-existence/stars.png"/></div><h1>"Worth every cent!"</h1></div></div><h5>Cheryl H. (Verified Cat-Lover)</h5></div>').insertBefore('.minicart-actions');

					 hasLitterRobot = false;
					document.querySelectorAll(".custom-popup .item .product-name > a").forEach((el) => {
						if (el.innerHTML.includes("Litter-Robot")) {
							hasLitterRobot = true;
						}
					});
				}
				if (!hasLitterRobot) {
					jQuery('.da_wrapper').remove();
					jQuery('.da_wrapper2').remove();
				}

			});
		});
	});

});


