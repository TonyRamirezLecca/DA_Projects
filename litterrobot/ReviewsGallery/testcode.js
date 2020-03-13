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
whenExists('.product-view', function () {
	(function ($) {
		var productView,
			container,
			carouselContainer,
			waitInterval,
			widgetLoaded = false;

		/**
		 * Check if the widget has been loaded.
		 */
		function waitForYotpo() {
			carouselContainer = $(container).find('.yotpo-single-image-container');
			widgetLoaded = Boolean(carouselContainer.length);
			if(widgetLoaded) {
				// Add class to gallery container.
				// It's important this is done after Yotpo loads the gallery.
				// Yotpo doesn't load the gallery when there are styles applied to the parent element.
				// Not sure why.
				$(container).addClass('product-gallery-container');
				window.clearInterval(waitInterval);
			}
		}

		// Find product view element.
		productView = $('.product-view').first();

		// Create container div.
		container = document.createElement('div');
		productView.after(container);

		// Create the gallery div.
		var gallery = document.createElement('div');
		gallery.className = 'yotpo yotpo-pictures-widget';
		gallery.setAttribute('data-gallery-id', '5e0a10bbf90f7608fda38d76');
		container.appendChild(gallery);

		yotpo.initWidgets();

		// Wait for Yotpo to load widget
		waitInterval = window.setInterval(waitForYotpo, 40);
	})(jQuery);
});

