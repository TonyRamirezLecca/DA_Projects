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

whenExists('#content-main > main > div.elementor.elementor-87336 > div > div > section.elementor-element.elementor-element-0a46d7b.elementor-section-stretched.elementor-section-height-min-height.elementor-hidden-desktop.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle.elementor-section.elementor-top-section > div.elementor-container.elementor-column-gap-default > div > div.elementor-element.elementor-element-2691b51.elementor-column.elementor-col-50.elementor-top-column > div > div > section > div > div > div.elementor-element.elementor-element-5de1d06.elementor-column.elementor-col-50.elementor-inner-column > div > div > div > div > div > div > img', function () {

	//Change WATCH EXPERIENCE href
	$('#content-main > main > div.elementor.elementor-87336 > div > div > section.elementor-element.elementor-element-0a46d7b.elementor-section-stretched.elementor-section-height-min-height.elementor-hidden-desktop.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle.elementor-section.elementor-top-section > div.elementor-container.elementor-column-gap-default > div > div.elementor-element.elementor-element-2691b51.elementor-column.elementor-col-50.elementor-top-column > div > div > section > div > div > div.elementor-element.elementor-element-5de1d06.elementor-column.elementor-col-50.elementor-inner-column > div > div > div > div > div > div > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/family-life/wtr-homepage-layout-refresh/watch-experience.png');

	$('#content-main > main > div.elementor.elementor-87336 > div > div > section.elementor-element.elementor-element-700c933f.elementor-section-stretched.elementor-section-height-min-height.elementor-hidden-tablet.elementor-hidden-phone.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle.elementor-section.elementor-top-section > div.elementor-container.elementor-column-gap-default > div > div.elementor-element.elementor-element-6839fde9.elementor-column.elementor-col-50.elementor-top-column > div > div > section > div > div > div.elementor-element.elementor-element-1474432.elementor-column.elementor-col-50.elementor-inner-column > div > div > div > div > div > div > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/family-life/wtr-homepage-layout-refresh/watch-experience.png');

	/* Change down arrow color */
	$('#content-main > main > div.elementor.elementor-87336 > div > div > section.elementor-element.elementor-element-2f96eb7.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.elementor-section.elementor-top-section > div > div > div.elementor-element.elementor-element-4c2e280.elementor-column.elementor-col-66.elementor-top-column > div > div > div.elementor-element.elementor-element-7603bbd.elementor-widget.elementor-widget-image > div > div > a > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/family-life/wtr-homepage-layout-refresh/brown-down-arrow.png');

	/* Change logo */
	$('#logo-nav-header > div.logo-nav-header-container.only-desktop > figure > a > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/family-life/wtr-homepage-layout-refresh/logo.png');
	$('#logo-nav-header > div.mobile-logo-nav-header-container.only-mobile > div > figure > a > img').attr('src', 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/family-life/wtr-homepage-layout-refresh/logo.png');

});
