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

whenExists('#top-nav-btns > a.join.ghost-btn', function () {
	$('#top-nav-btns > a.join.ghost-btn').html('<i class="fas fa-mouse-pointer"></i> JOIN NOW');
});
