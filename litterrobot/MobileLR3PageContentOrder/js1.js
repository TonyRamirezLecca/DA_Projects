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

whenExists('.product-view-top-links.product-page,.product-view-top-links.stick-to-header.product-page', function () {
	
    var sticky_element = jQuery(".product-view-top-links.product-page");
    var sticky_element2 = jQuery(".product-view-top-links.stick-to-header.product-page");
		var headsup = jQuery('#header');
    var sticky_element_top = 70; //$( sticky_element ).position().top;
    jQuery(window).scroll(function() {
				console.log(sticky_element_top);
				console.log(jQuery(window).scrollTop());
        if ( jQuery(window).scrollTop() >= sticky_element_top ) {
            sticky_element.addClass('active');
            sticky_element2.addClass('active');
						if (headsup.hasClass('heads-up')) {
							headsup.removeClass('heads-up')
						}
        } else {
            sticky_element.removeClass('active');
            sticky_element2.removeClass('active');
        }
				
    });

});

