/*** JS 1 
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
whenExists('#shopify-section-header > header > div', function () {

	$('#shopify-section-header > header > div').click(() => {
		event.preventDefault();
		$('.menu-toggle.mobileNavBar-link').click();
	});
	
});
/*
