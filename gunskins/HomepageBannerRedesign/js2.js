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

whenExists('#content', function () {
	$('#content > section:nth-child(1)').html('');

	$('<div class="da_hero"><div class="da_text-ctn"><div class="da_header"><h2>PERSONALIZE YOUR GUN WITH</h2><h2>PREMIUM VINYL WRAPS</h2></div><ul><li>DIY Installation</li><li>Waterproof + Non-reflective</li><li>20+ patterns to choose from</li></ul><a href="https://www.gunskins.com/collections/all-products">SHOP BY GUN</a></div><div class="da_video-ctn"><div class="da_cover"></div><iframe width="100%" height="415" src="https://www.youtube.com/embed/ffLIiGivYNE?controls=0&autoplay=1&showinfo-0&fs=0&playsinline=1&modestbranding=1&rel=0&wmode=transparent&enablejsapi=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>').insertBefore('#content');
});
