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

whenExists('#hs_cos_wrapper_module_14521963583842184 > div > div.page-center', function () {


	$('.newHero.heroBackground > .page-center > .heroContent > h1 > span').html('sick of running a</br> Cash-Strapped Business?');
	$('.newHero.heroBackground > .page-center > .heroContent > h3 > span').html('Grow your company with<span></br></span> Ignite Spot\'s<span class="da_display-br"></br></span> outsourced<span></br></span> accounting services');

	
});
