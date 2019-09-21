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

whenExists('#page-row-5,#page-row-14', function () {
	var banner1	= $('<div class="banner bannerImg1"><div class="darkFilter"></div><h1>See how Professional Services Automation can impact your service organization.</h1><a href="https://www.kimbleapps.com/product/">Learn More</a></div>');
	var banner2	= $('<div class="banner bannerImg2"><div class="darkFilter"></div><h1>See how Professional Services Automation can impact your service organization.</h1><a href="https://www.kimbleapps.com/product/">Learn More</a></div>');

	banner1.insertAfter('#page-row-5');
	banner2.insertAfter('#page-row-14');


});
