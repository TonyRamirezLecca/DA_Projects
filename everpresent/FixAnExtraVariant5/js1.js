/*** JS 3 FIX***/

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
			jQuery('#wi-content > .container:first-child .maxbutton-12.maxbutton.maxbutton-national > span').html('GET A FREE ESTIMATE');
			jQuery('<p class="da_new-button">Call us Today at <a href="tel:866-363-3351">866-363-3351</a> or Fill out the Form for a Free Estimate <a class="da_here-btn">Here</a></p>').insertBefore('#wi-content > .container:first-child .maxbutton-12.maxbutton.maxbutton-national');

			/* Selects Get Estimate Section */
			var regex2 = /Get an estimate on .+ project!/i;
			var get_estimate_section;
			document.querySelectorAll('.wi-center-heading > h3.h').forEach((el, i, arr) => {
				if (regex2.test(el.innerHTML)) {
					get_estimate_section = el;
					return;
				}
			});

			if (window.innerWidth >= 1200) {
				jQuery('.da_here-btn').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_estimate_section.offsetTop - 120
					}, 600);
				});
			}
			else if((window.innerWidth >= 500) && (window.innerWidth < 1200)) {
				jQuery('.da_here-btn').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_estimate_section.offsetTop - 150
					}, 600);
				});
			}
			else {
				jQuery('.da_here-btn').click(function() {
					event.preventDefault();
					jQuery([document.documentElement, document.body]).animate({
						scrollTop: get_estimate_section.offsetTop
					}, 600);
				});
			}
		});
	});
});

