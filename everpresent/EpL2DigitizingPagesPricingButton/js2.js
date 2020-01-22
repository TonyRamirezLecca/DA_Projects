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

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
		whenExists('.maxbutton-12.maxbutton.maxbutton-national', function () {

			//Adds buttons
			jQuery('#wi-content > .container:first-child .maxbutton-12.maxbutton.maxbutton-national > span').html('FREE ESTIMATE');
			jQuery('<a href="#" class="da_new-button"><span class="mb-text">Pricing</span></a>').insertBefore('#wi-content > .container:first-child .maxbutton-12.maxbutton.maxbutton-national');

			/* Selects Pricing Section */
			var regex1 = / .+ pricing options/i;
			var get_pricing_section;
			document.querySelectorAll('.wi-center-heading > h2.h').forEach((el, i, arr) => {
				if (regex1.test(el.innerHTML)) {
					get_pricing_section = el;
					console.log("found 1");
					return;
				}
			});

			/* Selects Get Estime Section */
			var regex2 = /Get an estimate on .+ project!/i;
			var get_estimate_section;
			document.querySelectorAll('.wi-center-heading > h3.h').forEach((el, i, arr) => {
				if (regex2.test(el.innerHTML)) {
					get_estimate_section = el;
					console.log("found 2");
					return;
				}
			});


			if (window.innerWidth >= 1200) {
				jQuery('.maxbutton-12.maxbutton.maxbutton-national').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_estimate_section.offsetTop - 120
					}, 600);
				});
				jQuery('.da_new-button').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_pricing_section.offsetTop - 120
					}, 600);
				});
			}
			else if(window.innerWidth >= 500 && window.innerWidth < 1200) {
				jQuery('.maxbutton-12.maxbutton.maxbutton-national').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_estimate_section.offsetTop - 150
					}, 600);
				});
				jQuery('.da_new-button').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_pricing_section.offsetTop - 150
					}, 600);
				});
			}
			else {
				jQuery('.maxbutton-12.maxbutton.maxbutton-national').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_estimate_section.offsetTop
					}, 600);
				});
				jQuery('.da_new-button').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_pricing_section.offsetTop
					}, 600);
				});

			}

		});
	});
});

