
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
var fontAwesome5 = document.createElement("link");
fontAwesome5.type = "text/css"; fontAwesome5.rel = "stylesheet";
fontAwesome5.href="https://use.fontawesome.com/releases/v5.3.1/css/all.css";
document.querySelector("head").appendChild(fontAwesome5);


whenExists('.js-qty > input,#CartSpecialInstructions', function() {

	var textDrawer = document.querySelector("#CartSpecialInstructions");
	textDrawer.classList.add("collapse-drawer");
	var labelDrawer = document.querySelector(".grid__item.medium-up--one-half > label");
	labelDrawer.innerHTML = 'SPECIAL INSTRUCTIONS FOR SELLER <i class="fas fa-caret-down"></i>';
	labelDrawer.addEventListener("click", () => {
		if (textDrawer.classList.contains("open-drawer")) {
			labelDrawer.innerHTML = 'SPECIAL INSTRUCTIONS FOR SELLER <i class="fas fa-caret-down"></i>';
		}
		else if (textDrawer.classList.contains("collapse-drawer")){
			labelDrawer.innerHTML = 'SPECIAL INSTRUCTIONS FOR SELLER <i class="fas fa-caret-left"></i>';
		}
		textDrawer.classList.toggle("open-drawer");
		textDrawer.classList.toggle("collapse-drawer");
	});


	document.querySelector("#shopify-section-cart-template > div > div > div.cart-heading > div > div:nth-child(1)").addEventListener("click", () => {
		document.querySelector("#shopify-section-cart-template > div > div > div.cart-heading > div > div:nth-child(4) > button").click();	
	});
	document.querySelector("#shopify-section-cart-template > div > div > div.cart-heading > div > div:nth-child(2)").addEventListener("click", () => {
		document.querySelector("#shopify-section-cart-template > div > div > div.cart-heading > div > div:nth-child(4) > button").click();	
	});

	$("#shopify-section-cart-template > div > div > form > div > div.grid__item.cart__buttons.text-right.small--text-center.medium-up--one-half > p.cart__taxes").insertAfter('#shopify-section-cart-template > div > div > form > div > div.grid__item.cart__buttons.text-right.small--text-center.medium-up--one-half > button.btn');


});





