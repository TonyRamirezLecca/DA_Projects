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

whenExists('.yotpo.bottomLine,.product-swatchess,#product-form-6657100101 > div.product-options > div.product-swatchess > div > div.swatch-element.color.black-olive.available > label', function () {
	console.log("DA_Script");

	//Inserts Tabs
	$('<div class="tabs_container"><div class="two-tone-tab">Two-Tone</div><div class="monochrome-tab"><div class="monochrome-tab_absolute"></div>Monochrome</div></div>').prependTo('.product-swatchess');


	//Moves Rating Section into Color Section
	$('.yotpo.bottomLine').prependTo('.product-swatchess');

	//Sets up default tabs
	$('.two-tone-tab').addClass('two-tone-tab_active');

	//Seperate colors with classes
	$('div[data-value="Red"]').addClass('color_monochrome');
	$('div[data-value="Blue"]').addClass('color_monochrome');
	$('div[data-value="Navy"]').addClass('color_monochrome');
	$('div[data-value="Charcoal Grey"]').addClass('color_monochrome');
	$('div[data-value="Pebble-Grain Black"]').addClass('color_monochrome');
	$('.swatch-element.available').addClass('color_two-tone');
	$('div[data-value="Pebble-Grain Black"]').removeClass('color_two-tone');

	//Add a wrapper around the swatches
	$('.color_two-tone').wrap('<div class="swatchesWrapper"></div>');
	$('.color_monochrome').wrap('<div class="swatchesWrapper_monochrome"></div>');

	//Clicking Functionality for Tabs
		//default hide this 
		$('.swatch-element.soldout').addClass('hidethispermanently');
		$('.swatchesWrapper_monochrome').hide();


	//VAR 2 COLOR CHANGES
	$('<div class="topColor"></div><div class="bottomColor"></div>').appendTo('#product-form-6657100101 > div.product-options > div.product-swatchess > div.swatch.clearfix > div:nth-child(3) > div > label');
	
	$('.two-tone-tab').click(() => {
		//Changes Tab Look
		$('.two-tone-tab').addClass('two-tone-tab_active');
		$('.monochrome-tab').removeClass('monochrome-tab_active');
		//Change Buttons
		$('.color_two-tone').removeClass('hidethispermanently');
		$('.color_monochrome').addClass('hidethispermanently');
		$('.swatchesWrapper').show();
		$('.swatchesWrapper_monochrome').hide();
	});

	$('.monochrome-tab').click(() => {
		//Changes Tab Look
		$('.monochrome-tab').addClass('monochrome-tab_active');
		$('.two-tone-tab').removeClass('two-tone-tab_active');
		//Change Buttons
		$('.color_two-tone').addClass('hidethispermanently');
		$('.color_monochrome').removeClass('hidethispermanently');
		$('.swatchesWrapper').hide();
		$('.swatchesWrapper_monochrome').show();
	});
});
