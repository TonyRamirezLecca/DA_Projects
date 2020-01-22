/*** JS 3 ***/
/* When one element exists OR the other element exists */
function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function() {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				callback();
				clearInterval(interval);
				break;
			}
		}
	}, 100);
}

whenExists('.action_button.add_to_cart, .mobile_nav.dropdown_link', function () {
	/* Move Cart Icon */
	var fontAwesome5 = document.createElement("link");
	fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
	fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
	document.querySelector("head").appendChild(fontAwesome5);

	$('<li class="da_shopping-cart-li"><i class="fas fa-shopping-cart da_shopping-cart"></i></li>').prependTo('.menu.right');
	$('<li class="da_shopping-cart-li-mobile"><i class="fas fa-shopping-cart da_shopping-cart"></i></li>').insertAfter('.mobile_nav.dropdown_link');

	/* PRESS ATC */
	$('.action_button.add_to_cart').click(() => {
		if ($('.da_cart-drawer-background').length && $('.da_cart-drawer').length) {
			$('.da_cart-drawer-background').remove();
			$('.da_cart-drawer').remove();
		}
		setTimeout(() => {
			jQuery.getJSON('https://charisdoxa.com/cart.js', function (cart) {
				$(`<div class="da_cart-drawer-background" style="display: none"></div><div class="da_cart-drawer"><div class="da_header">Shopping Cart <div class="da_close-btn remodal-close"></div></div><div class="da_products"></div><div class="da_subtotal"><p>Subtotal</p><p id="da_subtotal">$${(cart.total_price / 100).toFixed(2)}</p></div><div class="da_free-shipping">FREE Shipping and Returns (U.S. ORDERS)</div><div class="da_underline"></div><a href="https://charisdoxa.com/checkout" class="da_checkout"><span class="icon-lock"></span>CHECKOUT</a><a class="da_view-cart" href="https://charisdoxa.com/cart">VIEW CART</a></div>`).appendTo('body');
				/* Dynamically Add Products to Cart Drawer */
				cart.items.forEach((el, i, arr) => {
					var productKey = el.key;
					var productImg = el.featured_image.url;
					var productName = el.product_title;
					var sizeOrAmountText = `Size: ${el.variant_title}`;
					if (el.product_title == "e-Gift Card") sizeOrAmountText = "Amount: ";
					var productPrice = (el.price / 100).toFixed(2);
					productPrice = "$" + productPrice;
					var productQuantity = el.quantity;

					$(`<div class="da_product"><div class="da_product-img"><img src="${productImg}"/></div><div class="da_product-info"><div class="da_product-name">${productName}</div><div class="da_product-size">${sizeOrAmountText}</div><div class="da_product-price">${productPrice}</div><div product-key="${productKey}" class="da_quantity-ctn"><button class="da_minus" name="da_minus">&minus;</button><input class="da_quantity" type="number" name="da_quantity" value="${productQuantity}"><button class="da_plus" name="da_plus">&plus;</button></div></div></div>`).prependTo('.da_products');

					/* Update Value of Input*/
					$(`div[product-key="${productKey}"] > .da_minus`).click(() => {
						document.querySelector(`div[product-key="${productKey}"] > input`).value--;
					});
					$(`div[product-key="${productKey}"] > .da_plus`).click(() => {
						document.querySelector(`div[product-key="${productKey}"] > input`).value++;
					});
				});
			}).then(() => {
				/* Trigger Cart Drawer Slide */
				$('.da_cart-drawer-background').fadeIn();
				$('.da_cart-drawer').addClass('da_cart-drawer-slide-in');
				$('.da_cart-drawer-background, .da_close-btn').click(() => {
					$('.da_cart-drawer-background').fadeOut();
					$('.da_cart-drawer').removeClass('da_cart-drawer-slide-in');
					/* POST DATA */
					var updates = {};
					var quantity = 0;
					document.querySelectorAll('.da_product > .da_product-info > .da_quantity-ctn').forEach((el, i, arr) => {
						var productKey = el.getAttribute('product-key');
						var productQuantity = el.querySelector('input').value;
						updates[productKey] = productQuantity;
						quantity += productQuantity ;
					});
					document.querySelector('.glyphicon.glyphicon-shopping-cart > mark').innerHTML = quantity;
					jQuery.post('/cart/update.js', {
						updates
					});
				});
				/* POST DATA */
				$('.da_checkout').click(() => {
					event.preventDefault();
					var updates = {};
					var quantity = 0;
					document.querySelectorAll('.da_product > .da_product-info > .da_quantity-ctn').forEach((el, i, arr) => {
						var productKey = el.getAttribute('product-key');
						var productQuantity = el.querySelector('input').value;
						updates[productKey] = productQuantity;
						quantity += productQuantity ;
					});
					/* Update Cart Icon Red thing */
					document.querySelector('.glyphicon.glyphicon-shopping-cart > mark').innerHTML = quantity;
					jQuery.post('/cart/update.js', {
						updates
					}).then(() => window.location = "https://charisdoxa.com/checkout");
				});
				$('.da_view-cart').click(() => {
					event.preventDefault();
					var updates = {};
					var quantity = 0;
					document.querySelectorAll('.da_product > .da_product-info > .da_quantity-ctn').forEach((el, i, arr) => {
						var productKey = el.getAttribute('product-key');
						var productQuantity = el.querySelector('input').value;
						updates[productKey] = productQuantity;
						quantity += productQuantity ;
					});
					/* Update Cart Icon Red thing */
					document.querySelector('.glyphicon.glyphicon-shopping-cart > mark').innerHTML = quantity;
					jQuery.post('/cart/update.js', {
						updates
					}).then(() => window.location = "https://charisdoxa.com/cart");
				});
			});
		}, 1500);
	});
	/* PRESS CART */
	$('.da_shopping-cart-li, .da_shopping-cart-li-mobile').click(() => {
		if ($('.da_cart-drawer-background').length && $('.da_cart-drawer').length) {
			$('.da_cart-drawer-background').remove();
			$('.da_cart-drawer').remove();
		}
		jQuery.getJSON('https://charisdoxa.com/cart.js', function (cart) {
			$(`<div class="da_cart-drawer-background" style="display: none"></div><div class="da_cart-drawer"><div class="da_header">Shopping Cart <div class="da_close-btn remodal-close"></div></div><div class="da_products"></div><div class="da_subtotal"><p>Subtotal</p><p id="da_subtotal">$${(cart.total_price / 100).toFixed(2)}</p></div><div class="da_free-shipping">FREE Shipping and Returns (U.S. ORDERS)</div><div class="da_underline"></div><a href="https://charisdoxa.com/checkout" class="da_checkout"><span class="icon-lock"></span>CHECKOUT</a><a class="da_view-cart" href="https://charisdoxa.com/cart">VIEW CART</a></div>`).appendTo('body');
			/* Dynamically Add Products to Cart Drawer */
			cart.items.forEach((el, i, arr) => {
				var productKey = el.key;
				var productImg = el.featured_image.url;
				var productName = el.product_title;
				var sizeOrAmountText = `Size: ${el.variant_title}`;
				if (el.product_title == "e-Gift Card") sizeOrAmountText = "Amount: ";
				var productPrice = (el.price / 100).toFixed(2);
				productPrice = "$" + productPrice;
				var productQuantity = el.quantity;

				$(`<div class="da_product"><div class="da_product-img"><img src="${productImg}"/></div><div class="da_product-info"><div class="da_product-name">${productName}</div><div class="da_product-size">${sizeOrAmountText}</div><div class="da_product-price">${productPrice}</div><div product-key="${productKey}" class="da_quantity-ctn"><button class="da_minus" name="da_minus">&minus;</button><input class="da_quantity" type="number" name="da_quantity" value="${productQuantity}"><button class="da_plus" name="da_plus">&plus;</button></div></div></div>`).prependTo('.da_products');

				/* Update Value of Input*/
				$(`div[product-key="${productKey}"] > .da_minus`).click(() => {
					document.querySelector(`div[product-key="${productKey}"] > input`).value--;
				});
				$(`div[product-key="${productKey}"] > .da_plus`).click(() => {
					document.querySelector(`div[product-key="${productKey}"] > input`).value++;
				});
			})
		}).then(() => {
			/* Trigger Cart Drawer Slide */
			$('.da_cart-drawer-background').fadeIn();
			$('.da_cart-drawer').addClass('da_cart-drawer-slide-in');
			$('.da_cart-drawer-background, .da_close-btn').click(() => {
				$('.da_cart-drawer-background').fadeOut();
				$('.da_cart-drawer').removeClass('da_cart-drawer-slide-in');
				/* POST DATA */
				var updates = {};
				var quantity = 0;
				document.querySelectorAll('.da_product > .da_product-info > .da_quantity-ctn').forEach((el, i, arr) => {
					var productKey = el.getAttribute('product-key');
					var productQuantity = el.querySelector('input').value;
					updates[productKey] = productQuantity;
					quantity += productQuantity ;
				});
				document.querySelector('.glyphicon.glyphicon-shopping-cart > mark').innerHTML = quantity;
				jQuery.post('/cart/update.js', {
					updates
				});
			});
			/* POST DATA */
			$('.da_checkout').click(() => {
				event.preventDefault();
				var updates = {};
				var quantity = 0;
				document.querySelectorAll('.da_product > .da_product-info > .da_quantity-ctn').forEach((el, i, arr) => {
					var productKey = el.getAttribute('product-key');
					var productQuantity = el.querySelector('input').value;
					updates[productKey] = productQuantity;
					quantity += productQuantity ;
				});
				/* Update Cart Icon Red thing */
				document.querySelector('.glyphicon.glyphicon-shopping-cart > mark').innerHTML = quantity;
				jQuery.post('/cart/update.js', {
					updates
				}).then(() => window.location = "https://charisdoxa.com/checkout");
			});
			$('.da_view-cart').click(() => {
				event.preventDefault();
				var updates = {};
				var quantity = 0;
				document.querySelectorAll('.da_product > .da_product-info > .da_quantity-ctn').forEach((el, i, arr) => {
					var productKey = el.getAttribute('product-key');
					var productQuantity = el.querySelector('input').value;
					updates[productKey] = productQuantity;
					quantity += productQuantity ;
				});
				/* Update Cart Icon Red thing */
				document.querySelector('.glyphicon.glyphicon-shopping-cart > mark').innerHTML = quantity;
				jQuery.post('/cart/update.js', {
					updates
				}).then(() => window.location = "https://charisdoxa.com/cart");
			});
		});
	});
});

