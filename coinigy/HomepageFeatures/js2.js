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
whenExists('body > div:nth-child(16)', function () {
	$('body > div:nth-child(16)').hide();
	$('<div class="da_features-ctn"><h3 class="text-center">Looking for features? <a href="https://www.coinigy.com/features">We\'ve got you covered.</a></h3></div>').insertAfter('#mainimage');
	$('.pricingbox.no-image-bg').eq('0').css({'padding-top':'20px'});
});
