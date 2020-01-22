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

console.log("DA script");
whenExists('#shopify-section-bv-embed-code-pdp > div, #shopify-section-app-section > div, #bv-grid .vjs-poster img', function () {


	//Move grid out of container
	jQuery('#bv-grid').insertBefore('#shopify-section-app-section > div');


	//Move Container
	jQuery('#shopify-section-bv-embed-code-pdp > div').insertBefore('#bv-grid');


	//Move grid back into container
	jQuery('#bv_grid').insertBefore('.bv-curations-cleanslate.bv-grid-wrapper bv-minimalist');


	/* Edits for V1 */
	jQuery('#shopify-section-how-it-work').html('<div class=da_how-it-works><div class=da_header><h2>How it works</h2><p>Miracle-Gro® Twelve™ Indoor Growing System does all the thinking for you by creating the perfect growing conditions for herbs and leafy greens to thrive indoors. Growing your own fresh food has never been this simple.</div><div class=da_row><div class=da_img1></div><div class=da_number1>1</div><div class=da_text><h4>Add plants or seeds</h4><p>Add your seeds, young plants or transplants to the system according to the instructions. Water circulates through the system to provide the plant with continual moisture and nutrients that the roots need to grow.</div></div><div class=da_row><div class=da_img2></div><div class=da_number2>2</div><div class=da_text><h4>Watch them grow</h4><p>Specially designed lightning provides the right amount of light for your plants to grow. You can adjust the brightness of the light by tapping the top of the shade or using the Miracle-Gro® Twelve™ app. The app connects to the system with Bluetooth® wireless technology so you can set your growing schedule, change your lighting mode, monitor your water level, and manage your calendar all from your smartphone.</div></div><div class=da_row><div class=da_img3></div><div class=da_number3>3</div><div class=da_text><h4>Add plants or seeds</h4><p>Give your plants nutrients once a month and experience the joy of having fresh leafy greens and herbs within arms reach all year long. The possibilities are endless when you can grow food you love any time, any place.</div></div></div>');

	

});

