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

whenExists('#hs_cos_wrapper_module_14521963583842184 > div > div.page-center', function () {


	$('.newHero.heroBackground > .page-center > .heroContent > h1 > span').html('Spend time on<span></br></span> your business,</br>not your<span></br></span> accounting issues');
	$('.newHero.heroBackground > .page-center > .heroContent > h3 > span').html('Ignite Spot provides<span></br></span> in-house bookkeeping,</br>tax planning, and CFO services</br>to grow your company');

	
});
