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

whenExists('.sqs-announcement-bar-text > p', function () {
	document.querySelector('.sqs-announcement-bar-text > p').innerHTML = '<strong>The Eustachi is available for purchase online and in-store at all major drugstores. Find the nearest authorized retailer near you >></strong>';
});
