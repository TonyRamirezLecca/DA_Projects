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

whenExists('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul,#mega-menu-wrap-primary-menu > ul > li:nth-child(2)', function () {
	console.log("DA SCRIPT");
	if (jQuery('.da_faq').length > 0) return;
	console.log("START");
	/* About Section */
	document.querySelector('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > a').textContent = 'About';

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(1) a').attr('href', 'https://crossoversymmetry.com/learn/shoulder-pain/').html('Pain Programs');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(2) a').attr('href', 'https://crossoversymmetry.com/learn/how-cs-works/').html('Shoulder System');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(3) a').attr('href', 'https://crossoversymmetry.com/halo/').html('Hip & Core System');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(4) a').attr('href', 'https://crossoversymmetry.com/learn/safety/').html('Safety');

	jQuery('<li class="da_faq"><a href="https://crossoversymmetry.com/learn/faq/">FAQ</a></li>').insertAfter('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(1) > ul > li:nth-child(4)');


	/* Remove Hip & Core section */
	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(2)').hide();

	/* Sports Section */
	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(3) > ul > li:nth-child(2) a').hide();

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(3) > ul > li:nth-child(3) a').html('Swim');

	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(3) > ul > li:nth-child(7) a').hide();

	/* V2 CHANGES
	 ----------------------------------------------- */

	/* Move blog Section */
	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(4)').insertAfter('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(4)');
	/* Add to blog section */
	jQuery('<ul class="da_blog"><li class="da_warm-up"><a href="https://blog.crossoversymmetry.com/perfect-warm-up/">The Perfect Warm-Up Plan</a></li><li class="da_overhead-press"><a href="https://blog.crossoversymmetry.com/how-to-progress-to-a-pain-free-overhead-press/">How to Progress to a Pain-Free Overhead Press</a></li><li class="da_grip"><a href="https://blog.crossoversymmetry.com/grip-your-bands/">Maximize Your Arm Care By Using Your Grip</a></li><ul>').appendTo('#mega-menu-wrap-primary-menu > ul > li:nth-child(3) > ul > li:nth-child(5)');

	/* Add class to learn section */
	jQuery('#mega-menu-wrap-primary-menu > ul > li:nth-child(3)').addClass('da_learn-btn');


	/* Create Extras section */
	jQuery('<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-megamenu da_extras-btn"> <a class="mega-menu-link" href="#">EXTRAS<span class="mega-indicator"></span></a><ul class="mega-sub-menu"><li class="da_bundles"> <a class="mega-menu-link">BUNDLES</a><ul class="mega-sub-menu><li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page"> <a class="mega-menu-link" href="https://crossoversymmetry.com/product/fitness-bundle/">FITNESS</a></li><li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page"> <a class="mega-menu-link" href="https://crossoversymmetry.com/product/baseball-bundle/">BASEBALL</a></li></ul></li><li class="da_extras"> <a class="mega-menu-link">EXTRAS</a><ul class="mega-sub-menu><li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page"> <a class="mega-menu-link" href="https://crossoversymmetry.com/product/crossover-cords/">CROSSOVER CORDS</a></li><li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page"> <a class="mega-menu-link" href="https://crossoversymmetry.com/product/attachments/">ATTACHMENTS</a></li><li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page"> <a class="mega-menu-link" href="https://crossoversymmetry.com/product/mobility-sac/">MOBILITY SAC</a></li></ul></li></ul></li>').insertAfter('#mega-menu-wrap-primary-menu > ul > li:nth-child(2)')

	jQuery('.da_learn-btn > ul').addClass('da_toggle-learn');



		//Toggle Nav functionality --> BUG: The hover functionality won't work with desktop anymore, you have to click. (which is nicer imo)
		if (window.innerWidth <= 1020) {
			document.querySelector('.da_extras-btn > a').addEventListener("click", () => {
				jQuery('.da_extras-btn').toggleClass('mega-toggle-on');
				jQuery('.da_extras-btn > ul').toggleClass('da_toggle-extras');
			});
		}

		document.querySelector('.da_learn-btn > a').addEventListener("click", () => {
			jQuery('.da_learn-btn > ul').toggleClass('da_toggle-learn');
		});


		window.addEventListener("resize", () => {
			if (window.innerWidth >= 1020) {
				jQuery('.da_extras-btn > ul').removeClass('da_toggle-extras');
			}
		});
});




