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
console.log("DA SCRIPT");
whenExists('.addto-sticky .price, .product-info-main .yotpoBottomLine > .yotpo .text-m, .product-info-main > .yotpoBottomLine > .yotpo.bottomLine.bottomline-position.yotpo-small, .product-info-main .yotpoBottomLine > .yotpo > .yotpo-display-wrapper > div:nth-child(2)', function () {

		console.log("Ready");
		//Moving the stuff the bottom
		jQuery('.addto-sticky .price').prependTo('.addto-sticky .box-tocart .fieldset');
		jQuery('.addto-sticky').addClass('da_sticky-forever');

    jQuery('.product-info-main .yotpoBottomLine > .yotpo').clone().addClass('da_show-reviews-please').insertAfter('.da_sticky-forever .yotpoBottomLine > .yotpo');


});



