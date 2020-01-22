/** JS 1 ***/

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

whenExists('div[itemprop="offers"] > div:nth-child(4)', function () {

	$('<div class="da_vp-ctn"><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/Ribbon+Icon.png"/><p>Comfortable, Performance Components that are Built to Last</p></div><div class="da_vp"> <img src="https://s3-us-west-1.amazonaws.com/static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/running+Dog.png"/><p>Fit To Move Design</p></div><div class="da_vp"> <img src="https://static.disruptive.co/stunt-puppy/product-page-add-vp-above-fold/flag.png"/><p>Made in The USA</p></div></div>').insertAfter('div[itemprop="offers"] > div:nth-child(4)');
	
});

