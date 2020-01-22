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
whenExists('.cart_totals .wc-proceed-to-checkout', function () {
	function createPopUp() {
		//creates popup background and popup 
		var popUpBackground = document.createElement("div"); popUpBackground.classList.add("popUpBackground", "displayNone");
		var popUp = document.createElement("div"); popUp.classList.add("popUp", "displayNone");
		popUp.innerHTML = '<p>To view shipping rates for your country please switch views by clicking the flag in the top right</p><div class="closePopUp">X</div>';

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

	//loads pop up into the dom, but it won't display
	createPopUp();



	//Create the text that will open the popup
	$('<p class="da_shipping">If shipping to Canada, Uk, Europe or Australia, click here</p>').insertAfter('#new-cart-wrap > form > h1 > div');
	//Active popup
	$('.da_shipping').click(() => {
		document.querySelector('.popUpBackground').classList.remove("displayNone");
		document.querySelector('.popUp').classList.remove("displayNone");
	});


	$('.cart_totals .wc-proceed-to-checkout').appendTo('#new-cart-wrap > div');
	/*** JS 1 ***/
});

