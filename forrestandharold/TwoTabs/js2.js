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

whenExists('#product-form-6657100101 > div.product-options > div.product-swatchess', function () {
	console.log("DA_Script");


	//Moves Rating Section into Color Section
	$('.yotpo.bottomLine').prependTo('.product-swatchess');

	//Sets up default tabs
	$('.two-tone-tab').addClass('two-tone-tab_active');

	//Seperate colors with classes
	$('.swatch-element.available').addClass('color_two-tone');
	$('div[data-value="Red"]').addClass('color_monochrome');
	$('div[data-value="Red"]').addClass('hidethispermanently');
	$('div[data-value="Red"]').removeClass('color_two-tone');
	$('div[data-value="Blue"]').addClass('color_monochrome');
	$('div[data-value="Blue"]').addClass('hidethispermanently');
	$('div[data-value="Blue"]').removeClass('color_two-tone');
	$('div[data-value="Navy"]').addClass('color_monochrome');
	$('div[data-value="Navy"]').addClass('hidethispermanently');
	$('div[data-value="Navy"]').removeClass('color_two-tone');
	$('div[data-value="Charcoal Grey"]').addClass('color_monochrome');
	$('div[data-value="Charcoal Grey"]').addClass('hidethispermanently');
	$('div[data-value="Charcoal Grey"]').removeClass('color_two-tone');
	$('div[data-value="Pebble-Grain Black"]').addClass('color_monochrome');
	$('div[data-value="Pebble-Grain Black"]').removeClass('color_two-tone');
	$('div[data-value="Pebble-Grain Black"]').addClass('hidethispermanently');

	//Add a wrapper around the swatches
	$('.color_two-tone').wrap('<div class="swatchesWrapper"></div>');
	$('.color_monochrome').wrap('<div class="swatchesWrapper_monochrome"></div>');

	//Clicking Functionality for Tabs
		//default hide this 
		$('.swatch-element.soldout').addClass('hidethispermanently');
		$('.swatchesWrapper_monochrome').hide();

	//Show Monochrome
		$('.monochrome-tab').addClass('monochrome-tab_active');
		$('.color_monochrome').removeClass('hidethispermanently');
		$('.swatchesWrapper_monochrome').show();

	/* Wrap Two-Tone */
	jQuery('.swatchesWrapper').wrapAll('<div class="da_two-tone__container"><div class="da_two-tone-swatch__wrapper"></div></div>');
	jQuery('.swatchesWrapper_monochrome').wrapAll('<div class="da_monochrome__container"><div class="da_monochrome__wrapper"></div></div>');

	/*Add Category Header */
	$('<div class="da_two-tone__header">Two-Tone</div>').prependTo('.da_two-tone__container');
	$('<div class="da_monochrome__header">Monochrome</div>').prependTo('.da_monochrome__container');
});


