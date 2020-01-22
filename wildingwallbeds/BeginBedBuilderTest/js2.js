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

whenExists('.btn.btn-primary.show-bed-builder.CTAbutton', function () {

	if (window.innerWidth > 768) { 
		$('.btn.btn-primary.show-bed-builder.CTAbutton').hide();
		$('<a href="tel:8667808527" class="btn CTAbutton da_call-btn">CALL NOW 866-0780-8527</a>').insertAfter('.btn.btn-primary.show-bed-builder.CTAbutton');

		$('.btn.btn-gold.CTAbutton').hide();
		$('<button class="da_design-btn btn CTAbutton">Design Your Bed in 5 Steps</button>').insertAfter('.btn.btn-gold.CTAbutton');

		$('.da_design-btn').click(() => {
			jQuery([document.documentElement, document.body]).animate({
				scrollTop: jQuery('body').offset().top
			}, 600);
			$('.da_design-btn').fadeOut();
			$('.btn.btn-primary.show-bed-builder.CTAbutton').click();
		});
	}

});
