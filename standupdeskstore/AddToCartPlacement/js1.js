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
whenExists('#product-addtocart-button', function () {
	$(document).ready(() => {

		$('<div class="da_ctn"><div class="da_quantity-ctn"><div class="da_quantity"></div></div><div class="da_value-props-ctn"><div class="da_value-prop"><div class="da_image1"></div><div class="da_value-prop-text"><h4>100% SATISFACTION</h4><h6>Check out our customer reviews.</h6></div></div><div class="da_value-prop"><div class="da_image2"></div><div class="da_value-prop-text"><h4>FAST SHIPPING</h4><h6>Most orders ship within 24 hours.</h6></div></div></div></div>').prependTo('.product-info-main-wrapper.clearfix');
		$('.product-info-main-wrapper.clearfix').addClass('da_wrapper');

		//Add To Cart
		$('<div class="da_atc">Add to Cart</div>').prependTo('.da_quantity-ctn');

		//Quantity
		$('#product_addtocart_form > div.product-options-bottom > div > div > div.field.qty').clone().prependTo('.da_quantity-ctn');

		//Add Arrows for Quantity
		$('.da_quantity-ctn input').wrap('<div class="da_input-ctn"></div>');
		$('<div class="da_arrows"><div class="da_up" style="transform: rotate(180deg);">&#9662</div><div class="da_down">&#9662</div></div>').appendTo('.da_input-ctn');

		//Clone at the bottom for mobile
		$('.da_ctn').clone().insertBefore('.product.info.detailed');

		//Arrow functionality
		document.querySelectorAll('.da_up')[0].addEventListener("click", () => {
			document.querySelectorAll('.da_quantity-ctn input')[0].value++;
			document.querySelectorAll('.da_quantity-ctn input')[1].value++;
			document.querySelector('#product_addtocart_form > div.product-options-bottom > div > div > .field.qty > .control > input').value++;
			document.querySelector('.addto-sticky.sticky-fixed #qty').value++;
		});
		document.querySelectorAll('.da_down')[0].addEventListener("click", () => {
			if (document.querySelectorAll('.da_quantity-ctn input')[0].value <= 0) return;
			document.querySelectorAll('.da_quantity-ctn input')[0].value--;
			document.querySelectorAll('.da_quantity-ctn input')[1].value--;
			document.querySelector('#product_addtocart_form > div.product-options-bottom > div > div > .field.qty > .control > input').value--;
			document.querySelector('.addto-sticky.sticky-fixed #qty').value--;
		});
		//Arrow functinality 2
		document.querySelectorAll('.da_up')[1].addEventListener("click", () => {
			document.querySelectorAll('.da_quantity-ctn input')[0].value++;
			document.querySelectorAll('.da_quantity-ctn input')[1].value++;
			document.querySelector('#product_addtocart_form > div.product-options-bottom > div > div > .field.qty > .control > input').value++;
			document.querySelector('.addto-sticky.sticky-fixed #qty').value++;
		});
		document.querySelectorAll('.da_down')[1].addEventListener("click", () => {
			if (document.querySelectorAll('.da_quantity-ctn input')[1].value <= 0) return;
			document.querySelectorAll('.da_quantity-ctn input')[0].value--;
			document.querySelectorAll('.da_quantity-ctn input')[1].value--;
			document.querySelector('#product_addtocart_form > div.product-options-bottom > div > div > .field.qty > .control > input').value--;
			document.querySelector('.addto-sticky.sticky-fixed #qty').value--;
		});

		//Submit btn
		document.querySelectorAll('.da_atc').forEach((el) => {
			el.addEventListener("click", () => {
				$('#product_addtocart_form > div.product-options-bottom > div > div > div.actions > button').click();
			});
		})


		//moves review section
		$('.da_wrapper .product-info-main > .yotpoBottomLine > div:nth-child(1)').addClass('da_review').appendTo('.da_wrapper .product-info-main > .product-add-form .price-box.price-final_price');

		/* Add price to new thing */
		$('.product-add-form span[data-price-type="finalPrice"].price-wrapper > .price').clone().prependTo('.da_quantity-ctn');
		

	});
});
