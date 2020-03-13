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
whenExists('.cart-table', function () {

	var da_value = parseInt(0);

	document.querySelectorAll('.cart__qty-input').forEach((el, i, arr) => {
		da_value += parseInt(el.value);
	});


	$(`<div class="align-items-center row line1 cart-flex da_warranty">
		<div class="col-5 col-sm-3"></div>
		<div class="cart__image-wrapper col-sm-11 col-20 da_img-ctn">
			<a><img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/nomatic/cart-page-value/Mountain.png" class="cart__image"/></a>
		</div>
		<div class="cart__meta small--text-left col-sm-25 col-30">
			<div class="list-view-item__title">
				<a class="da_title">NOMATIC LIFETIME WARRANTY</a>
			</div>
		</div>
		<div class="cart__update-wrapper text-right col-sm-10 col-10">
			<div class="cart__qty">
				<input class="cart__qty-input da_quantity" value="${da_value}" disabled/>
			</div>
		</div>
		<div class="cart__price-wrapper text-right col-sm-10 col-10 da_price">FREE</div>

		</div>`).appendTo('.cart-table');

});
