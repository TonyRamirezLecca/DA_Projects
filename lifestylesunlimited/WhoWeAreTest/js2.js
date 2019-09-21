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

whenExists('#content,#sidebar', function () {
	jQuery('#content,#sidebar').wrapAll('<div class="DA_Wrapper"/>');
	jQuery('<div class="DA_NewHeader"></div>').prependTo("#content-sidebar-wrap");
	jQuery('#content > div > div > p:nth-child(1)').appendTo('.DA_NewHeader');
	jQuery('#content > div > div > p:nth-child(1)').prependTo('.DA_NewHeader');
	jQuery('#content > div > h1').prependTo('.DA_NewHeader');

	jQuery('<div id="DA_Navigation"><a href="#ourHistory">Our History</a><a href="#caseStudies">Case Studies</a><a href="#ourMission">Our Mission</a><a href="#mediaContent">Media Content</a><a href="#letterFromDel">Letter from Del</a></div>').appendTo('.DA_NewHeader')

	jQuery('#DA_Navigation a:nth-child(1)').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#content > div > div > h3:nth-child(1)').offset().top
		}, 600);
	});
	jQuery('#DA_Navigation a:nth-child(2)').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#content > div > div > h3:nth-child(17)').offset().top
		}, 600);
	});
	jQuery('#DA_Navigation a:nth-child(3)').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#content > div > div > h3:nth-child(20)').offset().top
		}, 600);
	});
	jQuery('#DA_Navigation a:nth-child(4)').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#content > div > div > h3:nth-child(25)').offset().top
		}, 600);
	});
	jQuery('#DA_Navigation a:nth-child(5)').click(function() {
		event.preventDefault();
		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#content > div > div > h3:nth-child(29)').offset().top
		}, 600);
	});

});

