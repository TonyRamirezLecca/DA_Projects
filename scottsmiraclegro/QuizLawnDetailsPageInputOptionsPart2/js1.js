/*** JS 1 ***/
/* Function Declarations */
	function hashChanged() {
		if (location.hash === '#lawn-details') {
			jQuery('.sp-quiz__question-title').html('What size is your lawn?');
			jQuery('.sp-quiz__question.sp-container.sp-mb-8 > p:nth-child(3)').html('Enter your lawn size!');

			jQuery('.sp-quiz__banner.sp-max-w-lg.sp-mx-auto.sp-text-center').hide();
			jQuery('.sp-quiz__question.sp-container.sp-mb-8 > div:last-child').hide();
			jQuery(`<div class="da_flex-ctn"><div class="da_left-ctn">
				<h4>Let us help!</h4>
				<p>Enter your address and trace your own to get the perfect amount of products.</p>
				<img class="sp-quiz__question-draw-image" src="https://test_magento_image_repo.storage.googleapis.com/LawnSizeCalc_InstructionOverlayAnimation_01242020.gif"/>


<div class="da_mobile">
				<img class="sp-quiz__question-draw-image" src="https://test_magento_image_repo.storage.googleapis.com/LawnSizeCalc_InstructionOverlayAnimation_01242020.gif"/>
				<div class="da_mobile-text-ctn">
				<h4>Let us help!</h4>
				<p>Enter your address and trace your own to get the perfect amount of products.</p>
</div>
				</div>


				<a onclick="jQuery('.sp-quiz__manual-entry.sp-mb-4').click();">TRACE MY LAWN</a>
				</div><div class="da_right-ctn"></div></div>
			`).insertBefore('.sp-quiz__question.sp-container.sp-mb-8 > div:last-child');

			jQuery('.sp-quiz__question.sp-container.sp-mb-8 > p:nth-child(3), .sp-quiz__question.sp-container.sp-mb-8 > div:nth-child(4), .sp-quiz__question.sp-container.sp-mb-8 > div:nth-child(5)').appendTo('.da_right-ctn');
			jQuery('<p class="da_right-subtext">Have a general idea of your yard size? Insert it below!</p>').insertAfter('.da_right-ctn > p:first-child');
		}
	}
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
	function defer(callback) {
		if (window.jQuery) {
			callback();
		} else {
			setTimeout(function () { defer(callback); }, 50);
		}
	}

defer(function () {
	jQuery(function () {        
		whenExists('.sp-quiz__question-title', function () {
			window.addEventListener("hashchange", hashChanged);
		});
	});
});
