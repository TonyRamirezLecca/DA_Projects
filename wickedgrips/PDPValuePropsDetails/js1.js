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
whenExists('form.cart', function () {

	/* JSON OBJECTS */
	var da = {
		flag: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/wicked-grips/pdp-value-props-details/american_flag.png',
		gun: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/wicked-grips/pdp-value-props-details/gun.png',
		medal: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/wicked-grips/pdp-value-props-details/medal.png'
	}

	$(`<div class="da_vp-ctn"><div class="da_vp"><img class="da_img" src="${da.flag}"/><p class="da_text">Proudly Made in the USA</p></div><div class="da_vp"><img class="da_img" src="${da.gun}"/><p class="da_text">Designed by gun enthusiasts</p></div><div class="da_vp"><img class="da_img" src="${da.medal}"/><p class="da_text">Made with the highest quality materials</p></div></div>`).insertAfter('form.cart');

});
