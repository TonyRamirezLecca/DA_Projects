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

whenExists('.login.ghost-btn,.join.ghost-btn', function () {
	jQuery('.login.ghost-btn,.join.ghost-btn').wrapAll('<div class="navBtnWrapper"/>');
	$('<a class="ghost-btn" href="tel:866-945-6565">CALL US TODAY | (866) 945-6565</a>').appendTo('#top-nav-btns');
});
