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
function createPopUp() {
	//creates popup background and popup 
	var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground", "displayNone");
	var popUp = document.createElement("div"); popUp.classList.add("popUp", "displayNone");
	popUp.innerHTML = '<div class="da_popup-red-bar"><div class="closePopUp">X</div></div><div class="da_success">SUCCESSFULLY</br> ADDED TO CART!</div><a href="https://charisdoxa.com/checkout" type="submit" class="action_button add_to_cart da_proceed-to-checkout" id="checkout" name="checkout">PROCEED TO CHECKOUT</a><a class="da_view-cart" href="https://charisdoxa.com/cart">VIEW CART</a><a href="https://charisdoxa.com/collections/womens-luxury-footwear" class="da_continue-shopping">Continue Shopping</a>';

	//appends popup background and pop up to body
	document.querySelector('body').append(popUpBackground);
	document.querySelector('body').append(popUp);

	//click background or close button to close popup
	popUpBackground.addEventListener("click", () => {
		popUpBackground.classList.add("displayNone");
		popUp.classList.add("displayNone");
	});

	//make sure close button has class name "closePopUp"
	document.querySelector('.closePopUp').addEventListener("click", () => {
		popUpBackground.classList.add("displayNone");
		popUp.classList.add("displayNone");
	});
}
whenExists('.menu.right, .mobile_nav.dropdown_link', function () {
	/* Move Cart Icon */
	var fontAwesome5 = document.createElement("link");
	fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
	fontAwesome5.href="https://use.fontawesome.com/releases/v5.4.0/css/all.css";
	document.querySelector("head").appendChild(fontAwesome5);

	$('<li class="da_shopping-cart-li"><i class="fas fa-shopping-cart da_shopping-cart"></i></li>').prependTo('.menu.right');
	$('<li class="da_shopping-cart-li-mobile"><i class="fas fa-shopping-cart da_shopping-cart"></i></li>').insertAfter('.mobile_nav.dropdown_link');

	$('.da_shopping-cart-li-mobile, .da_shopping-cart-li').click(() => {
		window.location = "https://charisdoxa.com/cart";
	});
});

whenExists('.action_button.add_to_cart', function () {
	//Creates popup with no display
	createPopUp();
	//Makes Pop Up Appear when you add to cart
	document.querySelectorAll('.action_button.add_to_cart').forEach((el, i, arr) => {
		el.addEventListener("click", () => {
			setTimeout(() => {
				document.querySelector('.popUpBackground').classList.remove("displayNone");
				document.querySelector('.popUp').classList.remove("displayNone");
			}, 1500);
		});
	});
});
